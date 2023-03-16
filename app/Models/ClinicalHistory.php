<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ClinicalHistory extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'appointment_id',
        'fisio_id',
        'patient_id',
        'ectoscopy',
        'general_status',
        'observation',
        'disease_time',
        'start_way',
        'anamnesis',
        'initial_patient_status',
        'applied_techniques',
        'body_regions',
        'final_patient_status',
        'wellness_1',
        'wellness_2',
        'wellness_3',
    ];
}
