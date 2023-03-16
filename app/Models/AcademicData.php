<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AcademicData extends Model
{
    use HasFactory;
    use SoftDeletes;

    public function fisio()
    {
        return $this->belongsTo(Fisio::class);
    }
}
