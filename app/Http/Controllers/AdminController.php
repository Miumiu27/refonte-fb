<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        if (Auth::id()) {
            $usertype = Auth()->user()->usertype;
            $admins = [];

            if ($usertype == 'user') {
                $posts = Post::latest()->get();
                return Inertia::render('Post/Post', compact('posts'));
            } elseif ($usertype == 'admin') {
                $admins = User::where('usertype', 'admin')->get();
            }

            $userCount = User::count();
            $postCount = Post::count();
            return Inertia::render('Admin/AdminHomePage', [
                'admins' => $admins,
                'userCount' => $userCount,
                'postCount' => $postCount,
            ]);
        }
    }

    public function createAdmin(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'birthdate' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:' . User::class,
            'password' => ['required', Password::defaults()],
            'profile_image' => 'required|image|mimes:jpeg,png,jpg,gif',
        ]);

        $user = new User();
        $user->name = $request->input('name');
        $user->lastname = $request->input('lastname');
        $user->email = $request->input('email');
        $user->birthdate = $request->input('birthdate');
        $user->password = $request->input('password');
        $user->usertype = 'admin';

        // Enregistrez le fichier image ici et stockez le chemin dans la base de données
        if ($request->hasFile('profile_image')) {
            $image = $request->file('profile_image');
            $imageName = time() . '.' . $image->extension();
            $image->move(public_path('profile_images'), $imageName);
            $user->profile_image = 'profile_images/' . $imageName;
        }
        $user->save();

        return redirect()->route('home');
    }

    // Liste tous les administrateur
    public function getAllAdmin()
    {
        $admins = User::where('usertype', 'admin')->get();
        return Inertia::render('Admin/AdminHomePage', [
            'admins' => $admins,
        ]);
    }

    // Liste tous les utilisateurs
    public function getAllUser()
    {
        $users = User::where('usertype', 'user')->get();
        return Inertia::render('Admin/AllUser', [
            'users' => $users,
        ]);
    }

    // Liste tous les publications
    public function getAllPost()
    {
        $posts = Post::latest()->get();
        return Inertia::render('Admin/AllPost', compact('posts'));
    }

    public function deleteAdmin($id)
    {
        $admin = User::find($id);

        if ($admin) {
            // Supprimez l'image associée s'il en existe une
            if ($admin->profile_image) {
                $imagePath = public_path($admin->profile_image);
                if (file_exists($imagePath)) {
                    unlink($imagePath);  // Supprimez le fichier image du stockage
                }
            }

            $admin->delete();

            return redirect()->route('home')->with('success', 'Administrateur supprimé avec succès');
        } else {
            return redirect()->route('home')->with('error', 'Administrateur non trouvé');
        }
    }

    public function deletePost($id)
    {
        $post = Post::find($id);

        if ($post) {
            // Supprimez l'image associée s'il en existe une
            if ($post->post_image) {
                $imagePath = public_path($post->post_image);
                if (file_exists($imagePath)) {
                    unlink($imagePath);  // Supprimez le fichier image du stockage
                }
            }

            $post->delete();

            return redirect()->route('all.post')->with('success', 'Administrateur supprimé avec succès');
        } else {
            return redirect()->route('all.post')->with('error', 'Administrateur non trouvé');
        }
    }

    public function deleteUser($id)
    {
        $user = User::find($id);

        if ($user) {
            // Supprimez l'image associée s'il en existe une
            if ($user->profile_image) {
                $imagePath = public_path($user->profile_image);
                if (file_exists($imagePath)) {
                    unlink($imagePath);  // Supprimez le fichier image du stockage
                }
            }

            $user->delete();

            return redirect()->route('all.user')->with('success', 'Administrateur supprimé avec succès');
        } else {
            return redirect()->route('all.user')->with('error', 'Administrateur non trouvé');
        }
    }
}
