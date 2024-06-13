import { useEffect } from "react";
import Checkbox from "@/Components/constants/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/constants/InputError";
import InputLabel from "@/Components/constants/InputLabel";
import PrimaryButton from "@/Components/constants/PrimaryButton";
import TextInput from "@/Components/constants/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Adresse e-mail" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="block w-full py-2 px-3 border rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring focus:ring-grey-300 focus:ring-opacity-50"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Mot de passe" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="block w-full py-2 px-3 border rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring focus:ring-grey-300 focus:ring-opacity-50"
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                        />
                        <span className="ml-2 text-sm text-gray-600 my-3">
                            Se souvenir de moi
                        </span>
                    </label>
                </div>

                <PrimaryButton className="w-full" disabled={processing}>
                    Se connecter
                </PrimaryButton>
                {canResetPassword && (
                    <Link
                        href={route("password.request")}
                        className=" mt-2 underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-center"
                    >
                        Mot de passe oublié ?
                    </Link>
                )}
            </form>
            <hr className="my-6 mx-12" />

            <button
                type="button"
                className=" w-full text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2"
            >
                <Link href={route("register")}>S' enregistrer</Link>
            </button>
        </GuestLayout>
    );
}
