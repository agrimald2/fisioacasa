<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Foundation\Auth\User as AuthenticatableUser;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Storage;

class Fisio extends AuthenticatableUser
{
    use HasFactory, Notifiable, Authenticatable, Authorizable;

    protected $fillable = [
        'email',
        'password',
        'document',
        'phone',
        'name',
        'surname',
        'birthdate',
        'sex',
        'academic_data_id',
        'documentation_data_id',
        'appointment_price',
        'profile_photo_url',
        'resume_path',
        'criminal_record_path',
        'police_record_path',
        'profesional_hability_path',
    ];

    public function getResumeUrlAttribute()
    {
        return $this->resume_path ? Storage::url($this->resume_path) : null;
    }

    public function getCriminalRecordUrlAttribute()
    {
        return $this->criminal_record_path ? Storage::url($this->criminal_record_path) : null;
    }

    public function academicData()
    {
        return $this->hasMany(AcademicData::class);
    }

    public function schedules()
    {
        return $this->hasMany(Schedule::class);
    }

    public function appointments()
    {
        return $this->hasMany(Appointment::class);
    }
}
