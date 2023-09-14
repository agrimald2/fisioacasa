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
            'Universidad Peruana Cayetano Heredia (UPCH)',
            'Universidad Peruana de Ciencias Aplicadas (UPC)',
            'Universidad Privada del Norte (UPN)',
            'Universidad Privada San Juan Bautista (UPSJB)',
            'Universidad Nacional Federico Villarreal (UNFV)',
            'Universidad Tecnológica del Perú (UTP)',
            'Universidad Nacional Toribio Rodríguez de Mendoza de Amazonas (UNTRM)',
            'Universidad de Chiclayo (UDCH)',
            'Universidad Peruana Los Andes (UPLA)',
            'Universidad Norbert Wiener (UWIENER)',
            'Universidad Católica Sedes Sapientiae (UCSS)',
            'Universidad Continental (UCONTINENTAL)',
            'Universidad Nacional Mayor de San marcos (UNMSM)',
            'Otras'
        ];

        for ($i = 0; $i < count($universities); $i++) {
            University::create([
                'name' => $universities[$i],
            ]);
        }

    }
}
