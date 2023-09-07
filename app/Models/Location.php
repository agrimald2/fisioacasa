<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Location extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'fisio_id',
        'name',
        'address',
        'latitude',
        'longitude',
        'urbanization',
        'distric',
        'city',
        'postal_code',
    ];
}
