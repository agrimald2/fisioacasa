<?php

namespace App\Http\Controllers\Fisios;

use App\Http\Controllers\Controller;
use App\Models\Appointment;
use App\Models\ClinicalHistory;
use App\Models\Location;
use App\Models\Patient;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use App\Models\Fisio;
use App\Models\Degree;
use App\Models\Especialty;
use App\Models\University;
use App\Models\AcademicData;
use App\Models\Schedule;


class FisioController extends Controller
{
    public function register()
    {
        return inertia('Fisio/Register/Index');
    }
    public function validateDNI(Request $request)
    {
        $dni = $request->input('dni');

        if (Fisio::where('document', $dni)->first()) {
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

    public function create(Request $request)
    {
        logs()->warning($request);

        $fisio = new Fisio;
        $fisio->name = $request->input('name');
        $fisio->email = $request->input('email');
        $fisio->password = Hash::make($request->input('password'));
        $fisio->document = $request->input('document');
        $fisio->surname = $request->input('surname');
        $fisio->birthdate = $request->input('birthdate');
        $fisio->sex = $request->input('sex');
        $fisio->phone = $request->input('phone');
        $fisio->status = 0;

        $fisio->save();

        Auth::guard('fisio')->login($fisio);

        $phone = '51' . $fisio->phone;

        $this->sendRegister($phone);

        return redirect()->route('fisio.dashboard');
    }

    public function sendRegister($phone)
    {
        $template = 'fisio_register_test';
        $token = env('CHATAPI_TOKEN');
        $instanceId = env('CHATAPI_INSTANCE_ID');
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
        ];

        $url = 'https://api.1msg.io/' . $instanceId . '/sendTemplate?token=' . $token;

        $request = Http::post($url, $data);

        return $request->json();
        ;
    }

    public function loginForm()
    {
        if (Auth::guard('fisio')->check()) {
            return inertia('Fisio/Dashboard/Index');
        }
        return inertia('Fisio/Dashboard/Login');
    }

    public function login(Request $request)
    {
        $validatedData = [
            'password' => $request->input('password'),
            'email' => $request->input('email'),
        ];

        if (Auth::guard('fisio')->attempt($validatedData)) {
            $request->session()->regenerate();

            return redirect()->intended('/');
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ]);
    }

    public function logout()
    {
        Auth::guard('fisio')->logout();
        return redirect()->route('fisio.login');
    }

    public function dashboard()
    {

        $degrees = Degree::query()->get();
        $especialties = Especialty::query()->get();
        $universities = University::query()->get();

        if (!Auth::guard('fisio')->check()) {
            return redirect()->route('fisio.login');
        }

        $fisio = Auth::guard('fisio')->user();

        $fisioData = AcademicData::where('fisio_id', $fisio->id)->exists();
        $hasAcademic = $fisioData ? true : false;
        $hasDocumentation = $fisio->resume_path && $fisio->criminal_record_path && $fisio->police_record_path && $fisio->profesional_hability_path;

        $appointmentQuery = Appointment::where('fisio_id', $fisio->id)->with('patient');
        $pendingAppointments = $appointmentQuery->where('status', 0)->get();
        $pastAppointments = $appointmentQuery->where('status', 1)->get();


        return Inertia::render('Fisio/Dashboard/Index', [
            'fisio' => $fisio,
            'resume_url' => $fisio->resume_url,
            'criminal_record_url' => $fisio->criminal_record_url,
            'degrees' => $degrees,
            'especialties' => $especialties,
            'universities' => $universities,
            'hasAcademic' => $hasAcademic,
            'hasDocumentation' => $hasDocumentation,
            'pendingAppointments' => $pendingAppointments,
            'pastAppointments' => $pastAppointments,
        ]);

    }

    public function updatePhoto(Request $request)
    {
        $fisio = Auth::guard('fisio')->user();

        $request->validate([
            'photo' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $fileName = time() . '.' . $request->photo->extension();

        $request->photo->move(public_path('img/fisioPhotos'), $fileName);

        $fisio->profile_photo_path = $fileName;
        $fisio->save();

        return redirect()->back()->with('success', 'Profile photo updated successfully.');
    }

    public function addAcademicData(Request $request)
    {
        $fisio = Auth::guard('fisio')->user();

        $academicData = new AcademicData;

        $academicData->fisio_id = $fisio->id;

        $academicData->degree = $request->input('degree');
        $academicData->university = $request->input('university');
        $academicData->graduation_year = $request->input('graduation_year');
        $academicData->especialty = $request->input('especialty');
        $academicData->especialty_register = $request->input('especialty_register');


        $academicData->save();

        $fisio->academic_data_id = $academicData->id;
        $fisio->update();

        return redirect()->back()->with('success', 'Profile photo updated successfully.');

    }

    public function addDocumentationData(Request $request)
    {
        $fisio = Auth::guard('fisio')->user();

        logs()->warning($request);

        if ($request->hasFile('resume')) {
            $resumePath = $request->file('resume')->store('resumes');
            $fisio->resume_path = $resumePath;
        }

        if ($request->hasFile('criminal_record')) {
            $criminalRecordPath = $request->file('criminal_record')->store('criminal_records');
            $fisio->criminal_record_path = $criminalRecordPath;
        }

        if ($request->hasFile('police_record')) {
            $policeRecordPath = $request->file('police_record')->store('police_records');
            $fisio->police_record_path = $policeRecordPath;
        }

        if ($request->hasFile('profesional_hability')) {
            $profesionalHabilityPath = $request->file('profesional_hability')->store('profesional_habilities');
            $fisio->profesional_hability_path = $profesionalHabilityPath;
        }

        $fisio->save();

        // Save the model to the database
        $fisio->save();

        return;
    }

    public function sendToRevision()
    {
        $fisio = Auth::guard('fisio')->user();
        $fisio->status = 1;
        $fisio->save();
        return redirect()->back();
    }

    public function priceInfo()
    {
        $fisio = Auth::guard('fisio')->user();

        $actual_fare = $fisio->appointment_price;
        $actual_win = $fisio->fisio_price + 15;


        return inertia('Fisio/Dashboard/Price/Index', [
            'actual_fare' => $actual_fare,
            'actual_win' => $actual_win,
            'fisio' => $fisio,
        ]);
    }

    public function updatePrice(Request $request)
    {
        logs()->warning($request);
        $fisio = Auth::guard('fisio')->user();

        $fisio->appointment_price = $request->input('appointment_price');
        $fisio->fisio_price = $request->input('fisio_price');
        $fisio->transport_price = $request->input('transport_price');

        $fisio->save();
        return redirect()->back();

    }

    public function locationInfo()
    {
        $fisio = Auth::guard('fisio')->user();
        $locations = Location::where('fisio_id', $fisio->id)->get();

        return inertia('Fisio/Dashboard/Location/Index', [
            'locations' => $locations,
            'fisio' => $fisio,
        ]);
    }
    public function addLocation(Request $request)
    {
        $fisio = Auth::guard('fisio')->user();
        $location = new Location;

        $location->fisio_id = $fisio->id;
        $location->address = $request->input('address');
        $location->name = $request->input('address_name');
        $location->extra_info = $request->input('address_extra_info');

        $location->save();
    }

    public function deleteLocation($id)
    {
        Location::find($id)->delete();
    }

    public function schedules()
    {
        $fisio = Auth::guard('fisio')->user();
        $locations = Location::where('fisio_id', $fisio->id)->get();
        $schedules = Schedule::where('fisio_id', $fisio->id)->with('location')->get();


        return inertia('Fisio/Dashboard/Schedule/Index', [
            'locations' => $locations,
            'schedules' => $schedules,
            'fisio' => $fisio,
        ]);

    }

    public function createSchedules(Request $request)
    {
        $fisio = Auth::guard('fisio')->user();

        $fisio_id = $fisio->id;
        $selectedWeekdays = $request->input('selectedWeekdays');
        $startTime = Carbon::createFromFormat('H:i', $request->input('startTime'));
        $endTime = Carbon::createFromFormat('H:i', $request->input('endTime'));

        foreach ($selectedWeekdays as $weekday) {
            // Calculate the date of the first occurrence of this weekday in the current week
            $date = Carbon::parse('this week')->startOfWeek()->addDays($weekday - 1);

            // Calculate the start and end time for each hour block
            while ($startTime->lt($endTime)) {
                $startBlock = $date->copy()->setTimeFromTimeString($startTime->toTimeString());
                $endBlock = $date->copy()->setTimeFromTimeString($startTime->addHour()->toTimeString());

                // Create a new block for this hour
                $block = new Schedule();
                $block->fisio_id = $fisio_id;
                $block->location_id = $request->input('location');
                $block->week_day = $weekday;
                $block->start_time = $startBlock->format('H:i');
                $block->end_time = $endBlock->format('H:i');



                // Add the block to the array
                $block->save();
                $startTime->addMinutes(30);
            }

            // Reset the start time for the next iteration
            $startTime->setTimeFromTimeString($request->input('startTime'));
        }

        return;
    }

    public function deleteSchedule($id)
    {
        Schedule::find($id)->delete();
    }

    public function appointments()
    {
        $fisio = Auth::guard('fisio')->user();
        $appointments = Appointment::where('fisio_id', $fisio->id)->with('patient')->orderBy('status', 'asc')->orderBy('date', 'asc')->get();
        $locations = Location::where('fisio_id', $fisio->id)->get();


        return Inertia::render('Fisio/Dashboard/Appointments/Index', [
            'appointments' => $appointments,
            'fisio' => $fisio,
            'locations' => $locations,
        ]);
    }

    public function appointmentDetails($id)
    {
        $fisio = Auth::guard('fisio')->user();
        $appointment = Appointment::where('id', $id)->with('patient')->first();

        $clinicalHistories = ClinicalHistory::where('appointment_id', $appointment->id)->get();

        return Inertia::render('Fisio/Dashboard/Appointments/AppointmentDetails', [
            'appointment' => $appointment,
            'fisio' => $fisio,
            'clinicalHistories' => $clinicalHistories,
        ]);
    }

    public function validateAppointment(Request $request)
    {
        $code = $request->input('code');
        $appointment_id = $request->input('appointment_id');

        $appointment = Appointment::find($appointment_id);

        if ($appointment->code == $code) {
            return true;
        }
        return false;
    }

    public function createClinicalHistory(Request $request)
    {
        $fisio = Auth::guard('fisio')->user();
        $appointment = Appointment::find($request->input('appointment_id'));
        $clinicalHistory = new ClinicalHistory;


        $bodyParts = implode(',', $request->input('body_regions'));
        $recomendations = implode(',', $request->input('recomendations'));


        $clinicalHistory->appointment_id = $request->input('appointment_id');
        $clinicalHistory->fisio_id = $fisio->id;
        $clinicalHistory->patient_id = $request->input('patient_id');
        $clinicalHistory->ectoscopy = $request->input('ectoscopy');
        $clinicalHistory->general_status = $request->input('general_status');
        $clinicalHistory->observation = $request->input('observation');
        $clinicalHistory->disease_time = $request->input('disease_time');
        $clinicalHistory->start_way = $request->input('start_way');
        $clinicalHistory->anamnesis = $request->input('anamnesis');
        $clinicalHistory->initial_patient_status = $request->input('initial_patient_status');
        $clinicalHistory->applied_techniques = $request->input('applied_techniques');
        $clinicalHistory->body_regions = $bodyParts;
        $clinicalHistory->recomendations = $recomendations;
        $clinicalHistory->final_patient_status = $request->input('final_patient_status');
        $clinicalHistory->wellness_1 = $request->input('wellness_1');
        $clinicalHistory->wellness_2 = $request->input('wellness_2');
        $clinicalHistory->wellness_3 = $request->input('wellness_3');

        $clinicalHistory->save();

        $appointment->status = 1;
        $appointment->update();

        return;
    }

    public function patients()
    {
        $fisio = Auth::guard('fisio')->user();
        $patients = Patient::whereHas('appointments.fisio', function ($query) use ($fisio) {
            $query->where('id', $fisio->id);
        })->get();

        return Inertia::render('Fisio/Dashboard/Patients/Index', [
            'fisio' => $fisio,
            'patients' => $patients,
        ]);
    }

    public function profile()
    {
        $fisio = Auth::guard('fisio')->user();

        return Inertia::render('Fisio/Dashboard/Profile/Index', [
            'fisio' => $fisio,
        ]);
    }
}
