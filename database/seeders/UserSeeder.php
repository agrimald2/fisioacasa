<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Alonso Grimaldo',
            'phone' => '934094501',
            'email' => 'agrimaldop@fisioacasa.pe',
            'password' => Hash::make('FisioAlonso123'),
        ]);
        User::create([
            'name' => 'Carlos Lara',
            'phone' => '990648927',
            'email' => 'admin@fisioacasa.pe',
            'password' => Hash::make('FisioCarlos123'),
        ]);
        User::create([
            'name' => 'Ricardo Bullon',
            'phone' => '999265392',
            'email' => 'rmbullon@fisioacasa.pe',
            'password' => Hash::make('FisioRicardo'),
        ]);
    }
}
