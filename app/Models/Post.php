<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Post extends Model
{
    protected $fillable = [
        'department_id',
        'title',
        'date',
        'image',
        'description',
        'attachment',
        'category',

    ];

    public function department(): BelongsTo
    {
        return $this->belongsTo(Department::class);
    }
}
