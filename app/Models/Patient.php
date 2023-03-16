<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Foundation\Auth\User as AuthenticatableUser;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Storage;

class Patient extends AuthenticatableUser
{
    use HasFactory, Notifiable, Authenticatable, Authorizable;

    protected $fillable = [
        'email',
        //      'password',
        'document',
        'phone',
        'name',
        'surname',
        'birthdate',
        'sex',
        'profile_photo_url',
    ];

    public function appointments()
    {
        return $this->hasMany(Appointment::class);
    }
}
