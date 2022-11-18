<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Mail\PreRegisterMail;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DoctorRegisterController extends Controller
{

    public function index()
    {
        return view('fisio.register.dni');
    }
    public function validateDNI()
    {
        //Validate Input
        $this->validate(request(), [
            'dni' => ['required'],
        ]);


        //Set variable $dni to user DNI input
        $dni = request('dni');

        //Validate IF USER already registered
        $fisio = User::where('dni', '=', $dni)->first();

        if ($fisio) {

            //Check if already finished register if not, then send the view to finish it
            if ($fisio->phone) {

                return view('fisio.register.thanks', compact('fisio'));

            } else {

                $birthdate = Carbon::parse($fisio->nacimiento);
                $input_bd = $birthdate->format('m-d-Y');

                return view('fisio.register.register', compact('fisio', 'input_bd'));
            }
        }

        //Validate DNI in reniec DB and return object called user
        $user = DB::connection('mysql_reniec')
            ->table(env('RENIEC_TABLE', 'reniec'))
            ->where('documento', $dni)
            ->first();


        if (!$user) {

            return view('fisio.register.registerNoDNI', compact('dni'));

        } else {
            $birthdate = Carbon::parse($user->nacimiento);
            $newBirthdate = $birthdate->format('Y-d-m');
            $input_bd = $birthdate->format('m-d-Y');
            $fisio = User::create([
                'dni' => $user->documento,
                'name' => $user->nombres,
                'surname' => $user->paterno . ' ' . $user->materno,
                'sex' => $user->sexo,
                'birthdate' => $newBirthdate
            ]);

            return view('fisio.register.register', compact('fisio', 'input_bd'));
        }

    }

    public function createFisio(Request $request)
    {
        $request = request();

        $this->validate(request(), [
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique(User::class),
            ],
            'phone' => [
                'required',
                'regex:/(9)[0-9]{8}/',
            ]
        ]);


        $birthdate = Carbon::parse($request->birthdate);
        $birthdate = $birthdate->format('Y-d-m');

        $fisio = User::create([
            'dni' => $request->dni,
            'name' => $request->name,
            'surname' => $request->surname,
            'sex' => $request->sex,
            'birthdate' => $birthdate,
            'phone' => $request->phone,
            'email' => $request->email,
        ]);

        $this->sendEmail($fisio);
        //$this->sendWhatsapp($fisio);

        return view('fisio.register.thanks', compact('fisio'));
    }

    public function finishRegisterFisio(Request $request)
    {
        $request = request();

        $this->validate(request(), [
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique(User::class),
            ],
            'phone' => [
                'required',
                'regex:/(9)[0-9]{8}/',
            ]
        ]);

        $fisio = User::where('dni', '=', $request->dni)->first();

        $fisio->phone = $request->phone;
        $fisio->email = $request->email;

        $fisio->save();

        $this->sendEmail($fisio);
        //$this->sendWhatsapp($fisio);

        return view('fisio.register.thanks', compact('fisio'));
    }

    public function sendEmail($fisio)
    {
        $mailData = [
            "name" => "Test NAME",
            "dob" => "12/12/1990"
        ];

        Mail::to($fisio->email)->send(new PreRegisterMail($mailData));
    }

    public function sendWhatsapp($user)
    {

    }

}
