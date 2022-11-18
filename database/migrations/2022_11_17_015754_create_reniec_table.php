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
        Schema::create('reniec', function (Blueprint $table) {
            $table->id();
            $table->string('documento');
            $table->string('paterno');
            $table->string('materno');
            $table->string('nombres');
            $table->string('sexo');
            $table->string('nacimiento');
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
        Schema::dropIfExists('reniec');
    }
};
