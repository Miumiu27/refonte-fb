<?php

namespace App\Models;

use App\Models\Comment;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'description', 'post_image', 'user_id'
    ];

    // Chargement automatique de la relation utilisateur
    protected $with = ['user', 'comments'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    /**
     * Get the full path to the post image.
     *
     * @return string
     */
    public function getPostImageAttribute()
    {
        return asset('storage/uploads/' . $this->attributes['post_image']);
    }
}
