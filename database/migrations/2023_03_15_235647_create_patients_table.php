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
        Schema::create('patients', function (Blueprint $table) {
            $table->id();

            $table->string('email')->unique();
            //$table->string('password');

            $table->string('document')->unique();
            $table->string('phone');
            $table->string('name');
            $table->string('surname');
            $table->string('birthdate');
            $table->string('sex');

            $table->string('profile_photo_path', 2048)->nullable();

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
        Schema::dropIfExists('patients');
    }
};
