<?php

namespace App\Http\Controllers\Appointment;

use App\Http\Controllers\Controller;
use App\Models\Especialty;
use App\Models\Fisio;
use App\Models\Patient;
use App\Models\Appointment;

use App\Models\PatientLocation;
use App\Models\Schedule;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class AppointmentController extends Controller
{
    public function index()
    {
        return inertia('Appointment/Index');
    }

    public function validateDNI(Request $request)
    {
        $dni = $request->input('dni');
        $patient = Patient::where('document', $dni)->first();
        if ($patient) {
            Auth::guard('patient')->login($patient);

            if (Appointment::where('patient_id', $patient->id)->first()) {
                return 'ANTIGUO';
            }
            return 'SI';
        }

        //Validate DNI in reniec DB and return object called user
        $user = DB::connection('mysql_reniec')
            ->table(env('RENIEC_TABLE', 'reniec'))
            ->where('documento', $dni)
            ->first();

        if ($user) {
            $birthdate = Carbon::parse($user->nacimiento);
            $newBirthdate = $birthdate->format('Y-m-d');
            $data = [
                'dni' => $user->documento,
                'name' => $user->nombres,
                'surname' => $user->paterno . ' ' . $user->materno,
                'sex' => $user->sexo,
                'birthdate' => $newBirthdate
            ];
            return $data;
        }
        $data = "Hola2";
        return $data;
    }

    public function createPatient(Request $request)
    {

        $patient = new Patient;
        $patient->name = $request->input('name');
        $patient->email = $request->input('email');
        $patient->document = $request->input('document');
        $patient->surname = $request->input('surname');
        $patient->birthdate = $request->input('birthdate');
        $patient->sex = $request->input('sex');
        $patient->phone = $request->input('phone');

        $patient->save();

        Auth::guard('patient')->login($patient);

        return redirect()->route('fisio.dashboard');
    }

    public function selection($dni)
    {
        $patient = Patient::where('document', $dni)->first();
        $especialties = Especialty::query()->get();
        $locations = PatientLocation::where('patient_id', $patient->id)->get();

        return Inertia::render('Appointment/Selection', [
            'patient' => $patient,
            'especialties' => $especialties,
            'locations' => $locations
        ]);
    }

    public function searchFisio(Request $request)
    {
        $schedules = Schedule::query()->with('fisio')->get();
        $fisios = Fisio::query()->with('academicData')->get();

        $startTime = $request->input('selectedHour');
        $selectedSpecialty = $request->input('selectedEspecialty');
        $selectedDate = $request->input('selectedDate');

        $dayOfTheWeek = Carbon::parse($selectedDate)->dayOfWeek;

        //SUNDAY FIX
        if ($dayOfTheWeek == 0) {
            $dayOfTheWeek = 7;
        }

        $filteredSchedules = Schedule::whereHas('fisio', function ($query) use ($selectedSpecialty) {
            $query->whereHas(
                'academicData',
                function ($query) use ($selectedSpecialty) {
                    $query->where('especialty', 'LIKE', $selectedSpecialty);
                }
            );
        })->with('fisio')->where('start_time', $startTime)->where('week_day', $dayOfTheWeek)->get();

        return $filteredSchedules;
    }

    public function payAppointment(Request $request)
    {


        $patient = Patient::find($request->input('patient_id'));
        $location = PatientLocation::find($request->input('location_id'));
        $appointment = new Appointment;

        $appointment->fisio_id = $request->input('fisio_id');
        $appointment->patient_id = $patient->id;
        $appointment->schedule_id = $request->input('schedule_id');
        $appointment->status = 0;

        $appointment->date = $request->input('date');
        $appointment->start_time = $request->input('start_time');
        $appointment->end_time = $request->input('end_time');

        $appointment->location_id = $location->id;
        $appointment->address = $location->address;
        $appointment->address_extra_info = $location->extra_info;
        $appointment->address_latitude = '-12.116503';
        $appointment->address_longitude = '-76.974966';


        $appointment->price = $request->input('price');
        $appointment->fisio_win = $request->input('fisio_win');
        $appointment->transport_price = $request->input('transport_price');

        $appointment->save();

        $first = substr($appointment->date, 0, 1);
        $second = $patient->id;
        $third = $appointment->id;

        $code = $first . $second . $third;

        $appointment->code = $code;
        $appointment->update();

        $formatDate = $appointment->date;
        $location = 'CASA 1';

        $messageData = [
            'patient_name' => $patient->name,
            'date' => $formatDate,
            'start_time' => $appointment->start_time,
            'location' => $location,
            'fisio_name' => $request->input('fisio_name'),
            'link_parameter' => $patient->document,
        ];
        $phone = '51' . $patient->phone;
        $template = 'test_confirmation';

        $this->sendConfirmation($phone, $messageData, $template);

        return $appointment->id;
    }

    public function sendConfirmation($phone, $appointment_info, $template)
    {
        $token = 'e5l6xh2x9oam8gjm';
        $instanceId = '449221';
        $namespace = env('CHATAPI_NAMESPACE');

        if ($token == null || $instanceId == null) {
            return logs()->error('CHATAPI_TOKEN or CHATAPI_INSTANCE_ID not defined on .env file');
        }

        $data = [
            'phone' => $phone,
            'namespace' => '85489fc6_2bdc_4137_a3e6_409829280fb5',
            'language' => [
                'code' => 'es',
                'policy' => 'deterministic'
            ],
            'template' => $template,
            'params' => [
                [
                    'type' => "body",
                    'parameters' => [
                        [
                            "type" => "text",
                            "text" => $appointment_info['patient_name']
                        ],
                        [
                            "type" => "text",
                            "text" => $appointment_info['date']
                        ],
                        [
                            "type" => "text",
                            "text" => $appointment_info['start_time']
                        ],
                        [
                            "type" => "text",
                            "text" => $appointment_info['location']
                        ],
                        [
                            "type" => "text",
                            "text" => $appointment_info['fisio_name']
                        ]
                    ]

                ],
                [
                    'type' => "button",
                    'sub_type' => "url",
                    'parameters' => [
                        [
                            "type" => "text",
                            "text" => $appointment_info['link_parameter']
                        ]
                    ]
                ],

            ]
        ];

        $url = 'https://api.1msg.io/' . $instanceId . '/sendTemplate?token=' . $token;

        $request = Http::post($url, $data);

        return $request->json();
        ;
    }

    public function thanks($id)
    {
        $appointment = Appointment::with('fisio')->find($id);

        return Inertia::render('Appointment/Thanks', [
            'appointment' => $appointment,
        ]);
    }

    public function addPatientLocation(Request $request)
    {
        $patient = Patient::find($request->input('patient_id'));
        $location = new PatientLocation;

        $location->patient_id = $patient->id;
        $location->address = $request->input('address');
        $location->name = $request->input('address_name');
        $location->extra_info = $request->input('address_extra_info');

        $location->save();

        $locations = PatientLocation::where('patient_id', $patient->id)->get();

        return $locations;
    }

    public function getPatientLocation(Request $request){
        $location = PatientLocation::find($request->input('location_id'));

        return $location;
    }
}
