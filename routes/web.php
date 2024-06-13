<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
 * |--------------------------------------------------------------------------
 * | Web Routes
 * |--------------------------------------------------------------------------
 * |
 * | Here is where you can register web routes for your application. These
 * | routes are loaded by the RouteServiceProvider within a group which
 * | contains the "web" middleware group. Now create something great!
 * |
 */

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});

Route::get('/home', [AdminController::class, 'index'])->middleware(['auth', 'verified'])->name('home');

/*
 * Admin Route
 */
Route::middleware('auth')->group(function () {
    Route::post('/admin', [AdminController::class, 'createAdmin'])->name('admin.create');
    Route::get('/admin', [AdminController::class, 'getAllAdmin'])->name('all.admin');
    Route::delete('/admin/{id}', [AdminController::class, 'deleteAdmin'])->name('admin.delete');
    Route::get('/all-user', [AdminController::class, 'getAllUser'])->name('all.user');
    Route::delete('/all-user/{id}', [AdminController::class, 'deleteUser'])->name('user.delete');
    Route::get('/all-post', [AdminController::class, 'getAllPost'])->name('all.post');
    Route::delete('/all-post/{id}', [AdminController::class, 'deletePost'])->name('post.delete');
});

/*
 * Profile Route
 */
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

/*
 * User Route
 */
Route::middleware('auth')->group(function () {
    Route::get('/post', [PostController::class, 'index'])->name('post.upload');
    Route::post('/post', [PostController::class, 'store'])->name('post.upload.store');
    Route::get('/chat', [ChatController::class, 'index'])->name('chat');
});

Route::get('/comments/{postId}', [CommentController::class, 'index']);
Route::post('/comments', [CommentController::class, 'store'])->name('comments.store');

require __DIR__ . '/auth.php';
