<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class PostController extends Controller
{
    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    // PostController.php

    public function index()
    {
        $posts = Post::with('user', 'comments.user')->latest()->get();
        return Inertia::render('Post/Post', compact('posts'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function store(Request $request)
    {
        // Validez les données facultatives
        $validator = Validator::make($request->all(), [
            'description' => ['nullable'],
            'post_image' => ['nullable', 'image'],
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        // Vérifiez si une image a été téléchargée
        if ($request->hasFile('post_image')) {
            // Accédez au fichier téléchargé avec la méthode file() sur $request
            $file = $request->file('post_image');

            // Générez un nom de fichier unique
            $fileName = time() . '.' . $file->extension();

            // Déplacez le fichier téléchargé vers le répertoire public/uploads
            $file->storeAs('uploads', $fileName, 'public');
        } else {
            $fileName = null;  // Aucune image téléchargée
        }

        // Créez le post en utilisant la description (peut être vide) et le nom du fichier (s'il y a une image)
        Post::create([
            'description' => $request->input('description'),
            'post_image' => $fileName,
            'user_id' => auth()->id(),  // Associe l'ID de l'utilisateur actuel au post
        ]);

        return redirect()->route('post.upload');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // Recherchez le post par son ID
        $post = Post::findOrFail($id);

        // Supprimez le fichier image du disque
        unlink(public_path('uploads/' . $post->post_image));

        // Supprimez le post de la base de données
        $post->delete();

        return redirect()->route('post.upload');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // Validez les données mises à jour
        $validator = Validator::make($request->all(), [
            'description' => ['required'],
            'post_image' => ['image'],  // Facultatif : Validez que le fichier est une image
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        // Recherchez le post par son ID
        $post = Post::findOrFail($id);

        // Supprimez l'ancienne image du disque si une nouvelle image est fournie
        if ($request->hasFile('post_image')) {
            unlink(public_path('uploads/' . $post->post_image));
            $file = $request->file('post_image');
            $fileName = time() . '.' . $file->extension();
            $file->move(public_path('uploads'), $fileName);
            $post->post_image = $fileName;
        }

        // Mettez à jour les données du post
        $post->description = $request->input('description');
        $post->user_id = auth()->id();
        // Enregistrez les changements dans la base de données
        $post->save();

        return redirect()->route('post.upload');
    }
}
