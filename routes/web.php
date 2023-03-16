<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\Fisios\FisioController;
use App\Http\Controllers\Appointment\AppointmentController;



/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect()->away('https://pacientes.fisioacasa.pe');
});



Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get(
        '/dashboard',
        function () {
            return Inertia::render('Dashboard');
        }
    )->name('dashboard');
});


Route::prefix('fisio')
    ->name('fisio.')
    ->group(function () {
        Route::get('/register', [FisioController::class, 'register'])->name('register');
        Route::get('/validateDNI', [FisioController::class, 'validateDNI'])->name('validateDNI');
        Route::post('/create', [FisioController::class, 'create'])->name('create');
        Route::get('/dashboard', [FisioController::class, 'dashboard'])->name('dashboard');
        Route::get('/login', [FisioController::class, 'loginForm'])->name('login');
        Route::post('/login', [FisioController::class, 'login']);
        Route::post('/logout', [FisioController::class, 'logout']);
        Route::post('/photo', [FisioController::class, 'updatePhoto']);
        Route::post('/addAcademicData', [FisioController::class, 'addAcademicData']);
        Route::post('/addDocumentationData', [FisioController::class, 'addDocumentationData']);
        Route::post('/sendToRevision', [FisioController::class, 'sendToRevision']);
        Route::get('/price', [FisioController::class, 'priceInfo']);
        Route::post('/updatePrice', [FisioController::class, 'updatePrice']);
        Route::get('/location', [FisioController::class, 'locationInfo']);
        Route::post('/addLocation', [FisioController::class, 'addLocation']);
        Route::post('/deleteLocation/{id}', [FisioController::class, 'deleteLocation']);
        Route::get('/schedules', [FisioController::class, 'schedules']);
        Route::post('/createSchedules', [FisioController::class, 'createSchedules']);
        Route::post('/deleteSchedule/{id}', [FisioController::class, 'deleteSchedule']);
        Route::get('/appointments', [FisioController::class, 'appointments']);
        Route::get('/appointment/{id}', [FisioController::class, 'appointmentDetails']);
        Route::post('/validateAppointment', [FisioController::class, 'validateAppointment']);
        Route::post('/createClinicalHistory', [FisioController::class, 'createClinicalHistory']);
        Route::get('/patients', [FisioController::class, 'patients']);
        Route::get('/profile', [FisioController::class, 'profile']);
    });

Route::prefix('appointment')
    ->name('appointment.')
    ->group(function () {
        Route::get('/', [AppointmentController::class, 'index'])->name('index');
        Route::get('/validateDNI', [AppointmentController::class, 'validateDNI'])->name('validateDNI');
        Route::post('/createPatient', [AppointmentController::class, 'createPatient'])->name('createPatient');
        Route::get('/{dni}', [AppointmentController::class, 'selection'])->name('selection');
        Route::post('/searchFisio', [AppointmentController::class, 'searchFisio'])->name('searchFisio');
        Route::post('/payAppointment', [AppointmentController::class, 'payAppointment'])->name('payAppointment');
        Route::get('/thanks/{id}', [AppointmentController::class, 'thanks'])->name('thanks');
    });
