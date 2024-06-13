<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\User;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        dd($request->validated()); // Cela valide les données
        // Affichez les erreurs de validation pour chaque champ
        $errors = $request->validator->errors();
        dd($errors);
        $user = $request->user();

        // Remplissez les attributs du modèle User avec les données validées du formulaire
        $user->name = $request->input('name');
        $user->lastname = $request->input('lastname');
        $user->email = $request->input('email');
        $user->birthdate = $request->input('birthdate');

        // Si l'e-mail a changé, réinitialisez la vérification de l'e-mail
        if ($user->isDirty('email')) {
            $user->email_verified_at = null;
        }

        // Vérifiez si une nouvelle image de profil a été téléversée
        if ($request->hasFile('profile_image')) {
            $profileImage = $request->file('profile_image');
            $profileImageName = time() . '.' . $profileImage->getClientOriginalExtension();

            // Stockez l'image de profil dans le dossier 'profile_images' du système de fichiers 'public'
            $profileImage->storeAs('profile_images', $profileImageName, 'public');

            // Mettez à jour le chemin de l'image de profil dans la base de données
            $user->profile_image = 'profile_images/' . $profileImageName;
        }

        // Sauvegarde Des modifications de l'utilisateur
        $user->save();

        // Redirigez l'utilisateur vers la page de mise à jour du profil
        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
