<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PatientLocation extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'patient_id',
        'name',
        'extra_info',
        'address',
        'latitude',
        'longitude',
        'street_number',
        'street_name',
        'urbanization',
        'distric',
        'city',
        'postal_code',
        'maps_url',
    ];
}
