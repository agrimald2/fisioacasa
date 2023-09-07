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
        Schema::create('patient_locations', function (Blueprint $table) {
            $table->id();
            $table->integer('patient_id');
            $table->string('name')->nullable();
            $table->string('extra_info')->nullable();

            $table->string('address')->nullable();
            $table->string('latitude')->default('-12.104818');
            $table->string('longitude')->default('-77.013206');
            $table->string('street_number')->default('-77.013206');
            $table->string('street_name')->default('-77.013206');
            $table->string('urbanization')->default('Lima');
            $table->string('distric')->default('Lima');
            $table->string('city')->default('Lima');
            $table->string('postal_code')->default('15036');
            $table->string('maps_url')->nullable();

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
        Schema::dropIfExists('patient_locations');
    }
};
