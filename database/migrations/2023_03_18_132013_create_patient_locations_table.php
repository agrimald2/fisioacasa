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
            $table->string('address');
            $table->double('latitude')->nullable();
            $table->double('longitude')->nullable();

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
