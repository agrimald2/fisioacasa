<?php

namespace Database\Seeders;

use App\Models\Degree;
use Illuminate\Database\Seeder;

class DegreeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $degrees = ['Bachiller', 'Licenciado', 'Magister', 'Doctor'];

        for ($i = 0; $i < count($degrees); $i++) {
            Degree::create([
                'name' => $degrees[$i],
            ]);
        }

    }
}
