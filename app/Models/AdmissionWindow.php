<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

#[Fillable(['academic_year', 'start_date', 'end_date', 'admission_window', 'status'])]
class AdmissionWindow extends Model
{
    //
}
