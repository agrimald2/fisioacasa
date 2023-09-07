<?php

namespace Database\Seeders;

use App\Models\University;
use Illuminate\Database\Seeder;

class UniversitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $universities = [
            'Universidad Nacional Mayor de San Marcos',
            'Universidad Nacional Federico Villarreal',
            'Universidad Privada Cayetano Heredia',
            'Universidad Peruana de Ciencias Aplicadas',
            'Universidad Privada Norbert Wiener',
            'Universidad Privada del Norte',
            'Universidad Privada San Juan Bautista',
            'Universidad Católica Sedes Sapientiae',
            'Universidad Privada Arzobispo Loayza',
            'Universidad de Chiclayo',
            'Universidad Peruana Los Andes',
            'Universidad Inca Garcilaso de la Vega',
            'Universidad Tecnológica del Perú',
            'Universidad Alas Peruanas',
            'Otra'
        ];

        for ($i = 0; $i < count($universities); $i++) {
            University::create([
                'name' => $universities[$i],
            ]);
        }

    }
}
