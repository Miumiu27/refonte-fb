import { Link, Head } from "@inertiajs/react";
import HomeSlider from "@/Components/home/HomeSlider";

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <div
                className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-black  dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white"
                style={{ overflow: "hidden" }}
            >
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
                    {auth.user ? (
                        <Link
                            href={route("home")}
                            className="font-semibold text-gray-600 hover:text-white dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="font-semibold text-gray-600 hover:text-gray-300 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="ml-4 font-semibold text-gray-600 hover:text-gray-300 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
                <Link href={route("login")}>
                    <HomeSlider />
                </Link>
            </div>
        </>
    );
}
