<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CommentController extends Controller
{  // {
    //     public function index($postId)
    //     {
    //         $comments = Comment::where('post_id', $postId)->with('user')->latest()->get();

    //         return Inertia::render('Comments/Commentaire', ['comments' => $comments]);
    //     }

    //     // CommentController.php

    // public function index($postId)
    // {
    //     $comments = Comment::where('post_id', $postId)->with('user')->latest()->get();

    //     return Inertia::render('Comments/Commentaire', ['comments' => $comments]);
    // }

    public function index($postId)
    {
        $comments = Comment::where('post_id', $postId)->with('user:id,name,profile_image')->latest()->get();

        return Inertia::render('Comments/Commentaire', ['comments' => $comments]);
    }

    public function store(Request $request)
    {
        // Validate the comment data
        $validatedData = $request->validate([
            'post_id' => 'required|exists:posts,id',
            'content' => 'required',
        ]);

        // Store the comment
        $comment = Comment::create([
            'post_id' => $validatedData['post_id'],
            'content' => $validatedData['content'],
            'user_id' => auth()->user()->id,
        ]);

        return redirect()->back()->with('success', 'Comment added successfully!');
    }
}
