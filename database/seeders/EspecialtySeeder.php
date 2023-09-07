<?php

namespace Database\Seeders;

use App\Models\Especialty;
use Illuminate\Database\Seeder;

class EspecialtySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $especialties = [
            'Fisioterapia manual ortopédica',
            'Fisioterapia respiratoria',
            'Fisioterapia estética',
            'Fisioterapia neurológica',
            'Fisioterapia uroginecológica',
            'Fisioterapia oncológica',
            'Fisioterapia deportiva',
            'Fisioterapia pediátrica',
            'Fisioterapia geriátrica',
            'Fisioterapia general',
            'Terapias alternativas',
            'Preparación física'
        ];

        for ($i = 0; $i < count($especialties); $i++) {
            Especialty::create([
                'name' => $especialties[$i],
            ]);
        }

    }
}
