import React, { useEffect } from "react";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import InputError from "@/Components/constants/InputError";
import InputLabel from "@/Components/constants/InputLabel";
import PrimaryButton from "@/Components/constants/PrimaryButton";
import TextInput from "@/Components/constants/TextInput";

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = "",
}) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            lastname: user.lastname,
            sexe: user.sexe,
            email: user.email,

            birthdate: user.birthdate,
            profile_image: "",
        });

    useEffect(() => {
        console.log("Data before setData:", data);
        setData("birthdate", user.birthdate);
        console.log("Data after setData:", data);
    }, [user.birthdate]);

    const submit = (e) => {
        e.preventDefault();
        console.log("Data before form submission:", data);
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("lastname", data.lastname);
        formData.append("sexe", data.sexe);
        formData.append("email", data.email);
        formData.append("birthdate", data.birthdate);
        formData.append("profile_image", data.profile_image);

        patch(route("profile.update"), formData);
        console.log("Data after form submission:", data);
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Informations de profil
                </h2>

                <img
                    src={user.profile_image}
                    alt="profile image"
                    width={70}
                    height={70}
                    className="rounded-full cursor-pointer"
                />

                <p className="mt-1 text-sm text-gray-600">
                    Mettez à jour les informations de votre compte et votre
                    adresse e-mail.
                </p>
            </header>

            <form
                onSubmit={submit}
                className="mt-6 space-y-6"
                encType="multipart/form-data"
            >
                <div>
                    <InputLabel htmlFor="name" value="Nom" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div>
                    <InputLabel htmlFor="lastname" value="Prénom" />

                    <TextInput
                        id="lastname"
                        className="mt-1 block w-full"
                        value={data.lastname}
                        onChange={(e) => setData("lastname", e.target.value)}
                        required
                        autoComplete="lastname"
                    />

                    <InputError className="mt-2" message={errors.lastname} />
                </div>
                <div>
                    <InputLabel htmlFor="sexe" value="Sexe" />

                    <TextInput
                        id="sexe"
                        className="mt-1 block w-full"
                        value={data.sexe}
                        onChange={(e) => setData("sexe", e.target.value)}
                        required
                        autoComplete="sexe"
                    />

                    <InputError className="mt-2" message={errors.sexe} />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="E-mail" />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        required
                        autoComplete="email"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>

                <div>
                    <InputLabel htmlFor="birthdate" value="Date de naissance" />

                    <TextInput
                        id="birthdate"
                        type="date"
                        className="mt-1 block w-full"
                        value={data.birthdate}
                        onChange={(e) => setData("birthdate", e.target.value)}
                        required
                        autoComplete="birthdate"
                    />

                    <InputError className="mt-2" message={errors.birthdate} />
                </div>

                <div>
                    <InputLabel
                        htmlFor="profile_image"
                        value="Image de profil"
                    />

                    <input
                        id="profile_image"
                        type="file"
                        className="mt-1 block w-full"
                        onChange={(e) =>
                            setData("profile_image", e.target.files[0])
                        }
                        required
                        autoComplete="profile_image"
                    />

                    <InputError
                        className="mt-2"
                        message={errors.profile_image}
                    />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2 text-gray-800">
                            Votre adresse e-mail n'est pas vérifiée.
                            <Link
                                href={route("verification.send")}
                                method="post"
                                as="button"
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Cliquez ici pour renvoyer l'e-mail de
                                vérification.
                            </Link>
                        </p>

                        {status === "verification-link-sent" && (
                            <div className="mt-2 font-medium text-sm text-green-600">
                                Un nouveau lien de vérification a été envoyé à
                                votre adresse e-mail.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <PrimaryButton type="submit" disabled={processing}>
                        Sauvegarder
                    </PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Enregistré.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
