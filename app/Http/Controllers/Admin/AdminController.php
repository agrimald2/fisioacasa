<?php

namespace App\Http\Controllers\Admin;

use App\Models\Appointment;
use App\Models\Fisio;
use App\Models\Patient;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use File;
use Response;

class AdminController extends Controller
{
    public function getFisios()
    {
        $fisios = Fisio::with('academicData')->get();
        return Inertia::render('Admin/Fisios/Index', [
            'fisios' => $fisios,
        ]);
    }

    public function getPatients()
    {
        $patients = Patient::get();
        return Inertia::render('Admin/Patients/Index', [
            'patients' => $patients,
        ]);
    }

    public function getAppointments()
    {
        $appointments = Appointment::get();
        return Inertia::render('Admin/Patients/Index', [
            'appointments' => $appointments,
        ]);
    }

    public function fisioDetails($id)
    {
        $fisio = Fisio::where('id', $id)->with('academicData')->first();
        return Inertia::render('Admin/Fisios/Details', [
            'fisio' => $fisio,
        ]);
    }

    public function downloadFiles(Request $request)
    {
        //return Storage::disk('public')->download($request->input('file'));

        return Storage::download('tutorial.pdf');
    }
    public function fisioApprove(Request $request)
    {
        $fisio = Fisio::find($request->input('id'));
        $fisio->status = 2;
        $fisio->update();
        return;
    }
    public function fisioDeny(Request $request)
    {
        $fisio = Fisio::find($request->input('id'));
        $fisio->status = 3;
        $fisio->update();
        return;
    }
}
