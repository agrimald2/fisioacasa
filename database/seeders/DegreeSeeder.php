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
        $degrees = ['Licenciado', 'Magister', 'Doctor'];

        foreach ($degrees as $degree) {
            Degree::create([
                'name' => $degree,
            ]);
        }

    }
}
