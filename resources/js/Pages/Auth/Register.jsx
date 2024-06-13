import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/constants/InputError";
import InputLabel from "@/Components/constants/InputLabel";
import PrimaryButton from "@/Components/constants/PrimaryButton";
import TextInput from "@/Components/constants/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        lastname: "",
        birthdate: "",
        email: "",
        sexe: "",
        password: "",
        password_confirmation: "",
        profile_image: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div className="mt-4">
                    <InputLabel htmlFor="name" value="Nom" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>
                <div className="mt-4">
                    <InputLabel htmlFor="lastname" value="Prénom" />

                    <TextInput
                        id="lastname"
                        name="lastname"
                        value={data.lastname}
                        className="mt-1 block w-full"
                        autoComplete="lastname"
                        isFocused={true}
                        onChange={(e) => setData("lastname", e.target.value)}
                        required
                    />

                    <InputError message={errors.lastname} className="mt-2" />
                </div>
                <div className="mt-4">
                    <InputLabel htmlFor="sexe" value="Sexe" />

                    <TextInput
                        id="sexe"
                        name="sexe"
                        value={data.sexe}
                        className="mt-1 block w-full"
                        autoComplete="sexe"
                        isFocused={true}
                        onChange={(e) => setData("sexe", e.target.value)}
                        required
                    />

                    <InputError message={errors.sexe} className="mt-2" />
                </div>
                <div className="mt-4">
                    <InputLabel htmlFor="birthdate" value="Date de naissance" />
                    <TextInput
                        id="birthdate"
                        name="birthdate"
                        type="date"
                        value={data.birthdate}
                        className="mt-1 block w-full"
                        autoComplete="birthdate"
                        isFocused={true}
                        onChange={(e) => setData("birthdate", e.target.value)}
                        required
                    />

                    <InputError message={errors.birthdate} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Adresse e-mail" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Mot de passe " />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData("password", e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirmer mot de passe "
                    />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="profile_image"
                        value="Veuillez insérer votre photo de profil ici"
                    />

                    <input
                        id="profile_image"
                        type="file"
                        name="profile_image"
                        onChange={(e) =>
                            setData("profile_image", e.target.files[0])
                        }
                        required
                    />

                    <InputError
                        message={errors.profile_image}
                        className="mt-2"
                    />
                </div>

                <div className="flex items-center justify-end mt-8 ">
                    <Link
                        href={route("login")}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Avez vous déja un compte ?
                    </Link>

                    <PrimaryButton className="ml-4 " disabled={processing}>
                        S' inscrire
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
