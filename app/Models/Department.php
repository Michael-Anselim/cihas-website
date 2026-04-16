<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Department extends Model
{
    protected $fillable = [
        'name',
        'code',
        'description',
        'status',
    ];

    // Department to programs relationship
    public function programs(): HasMany
    {
        return $this->hasMany(Program::class);
    }

    // Department to posts relationship
    public function posts(): HasMany
    {
        return $this->hasMany(Post::class);
    }
}
