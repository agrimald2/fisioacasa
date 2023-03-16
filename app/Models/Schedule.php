<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Schedule extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillabke = [
        'fisio_id',
        'location_id',
        'week_day',
        'start_time',
        'end_time'
    ];

    public function location()
    {
        return $this->belongsTo(Location::class);
    }

    public function fisio()
    {
        return $this->belongsTo(Fisio::class);
    }

}
