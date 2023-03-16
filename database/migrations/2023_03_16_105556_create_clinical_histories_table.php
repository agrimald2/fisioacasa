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
            $table->string('ectoscopy')->nullable();
            $table->string('general_status')->nullable();
            $table->string('observation')->nullable();
            $table->string('disease_time')->nullable();
            $table->string('start_way')->nullable();
            $table->string('anamnesis')->nullable();
            $table->string('initial_patient_status')->nullable();
            $table->string('applied_techniques')->nullable();
            $table->string('body_regions')->nullable();
            $table->string('final_patient_status')->nullable();
            $table->string('wellness_1')->nullable();
            $table->string('wellness_2')->nullable();
            $table->string('wellness_3')->nullable();

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
