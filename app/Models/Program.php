<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Program extends Model
{
    protected $fillable = [
        'name',
        'type',
        'department_id',
        'description',
        'requirements',
        'image',
        'levels',
        'status',

    ];

    // Program to department relationship
    public function department(): BelongsTo
    {
        return $this->belongsTo(Department::class);
    }
}
