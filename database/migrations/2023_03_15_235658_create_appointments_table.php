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
        Schema::create('appointments', function (Blueprint $table) {
            $table->id();
            $table->integer('fisio_id');
            $table->integer('patient_id');
            $table->integer('schedule_id');
            $table->integer('status');

            $table->string('date');
            $table->string('start_time');
            $table->string('end_time');

            $table->integer('location_id');
            $table->string('address');
            $table->string('address_extra_info');
            $table->string('address_latitude');
            $table->string('address_longitude');

            $table->float('price');
            $table->float('fisio_win');
            $table->float('transport_price');

            $table->integer('fisio_score')->nullable();
            $table->string('code')->nullable();

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
        Schema::dropIfExists('appointments');
    }
};
