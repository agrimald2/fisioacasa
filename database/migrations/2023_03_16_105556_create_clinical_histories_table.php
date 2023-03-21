<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clinical_histories', function (Blueprint $table) {
            $table->id();
            $table->integer('appointment_id');
            $table->integer('fisio_id');
            $table->integer('patient_id');

            $table->string('consult_reason');
            $table->string('disease_time');
            $table->string('start_way');
            $table->string('evaluation');
            $table->string('fisio_diagnostic');
            $table->string('treatment');
            $table->string('evolution');
            $table->string('recomendations');
            $table->string('w_pain');
            $table->string('w_movility');
            $table->string('w_strength');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('clinical_histories');
    }
};
