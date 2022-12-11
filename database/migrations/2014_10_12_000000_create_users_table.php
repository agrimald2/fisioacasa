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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            /*
                *ROLES              *INT
                ? ADMIN           =>  0
                ? PATIENT         =>  1
                ? FISIOTHERAPIST  =>  2
            */
            $table->integer('role')->default(1);

            $table->string('dni')->unique()->nullable();
            $table->string('name');
            $table->string('surname');
            $table->string('sex');
            $table->string('birthdate');

            $table->string('phone')->nullable();
            $table->string('email')->nullable()->unique();

            $table->string('password')->nullable();
            $table->rememberToken();

            $table->foreignId('current_team_id')->nullable();
            $table->string('profile_photo_path', 2048)->nullable();
            $table->timestamp('email_verified_at')->nullable();
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
        Schema::dropIfExists('users');
    }
};
