<?php

use App\Mail\PreRegisterMail;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DoctorRegisterController;

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
    return redirect('https://fisioterapeutas.fisioacasa.pe');
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified'
])->group(function () {
    Route::get(
        '/dashboard',
        function () {
            return view('dashboard');
        }
    )->name('dashboard');
});





Route::prefix('fisio')->group(function () {
    Route::prefix('register')->group(
        function () {
            Route::get('/', [DoctorRegisterController::class, 'index'])->name("fisio.register");
            Route::post('/validateDNI', [DoctorRegisterController::class, 'validateDNI'])->name("fisio.register.validateDNI");
            Route::post('/validated/create}', [DoctorRegisterController::class, 'createFisio'])->name("fisio.register.createFisio");
            Route::post('/validated/finish}', [DoctorRegisterController::class, 'finishRegisterFisio'])->name("fisio.register.finish");

        }
    );

});

Route::get('send-email', function () {

});
