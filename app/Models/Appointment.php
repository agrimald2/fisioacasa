<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    use HasFactory;
    /**
     * STATUS
     * 0 -> Confirmada
     * 1 -> Realizada
     * 2 -> Anulada
     */
    protected $fillable = [
        'fisio_id',
        'patient_id',
        'schedule_id',
        'status',
        'date',
        'start_time',
        'end_time',
        'location_id',
        'address',
        'address_extra_info',
        'address_latitude',
        'address_longitude',
        'price',
        'fisio_win',
        'transport_price',
        'fisio_score',
        'code',
    ];

    public function schedule()
    {
        return $this->belongsTo(Schedule::class);
    }

    public function fisio()
    {
        return $this->belongsTo(Fisio::class);
    }

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }
}
