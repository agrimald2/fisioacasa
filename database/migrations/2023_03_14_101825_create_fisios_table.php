<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fisios', function (Blueprint $table) {
            $table->id();

            $table->string('email')->unique();
            $table->string('password');

            $table->string('document');
            $table->string('phone');
            $table->string('name');
            $table->string('surname');
            $table->string('birthdate');
            $table->string('sex');

            $table->integer('academic_data_id')->nullable();
            $table->integer('documentation_data_id')->nullable();

            $table->float('appointment_price')->nullable();
            $table->float('fisio_price')->nullable();
            $table->float('transport_price')->nullable();


            $table->integer('status')->default(0);

            $table->string('profile_photo_path', 2048)->nullable();
            $table->string('resume_path', 2048)->nullable();
            $table->string('criminal_record_path', 2048)->nullable();
            $table->string('police_record_path', 2048)->nullable();
            $table->string('profesional_hability_path', 2048)->nullable();

            $table->softDeletes();

            $table->rememberToken();
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
        Schema::dropIfExists('fisios');
    }
};
