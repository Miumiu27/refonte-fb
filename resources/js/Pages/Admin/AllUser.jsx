import AdminAuthenticatedLayout from "@/Layouts/AdminAuthenticatedLayout";
import { MdOutlineDashboard } from "react-icons/md";
import Card from "@/Components/partials/Card";
import { IoTrashBinOutline } from "react-icons/io5";
import { usePage, router } from "@inertiajs/react";

const AllUser = ({ auth }) => {
    const { props } = usePage();
    const handleDeleteUser = (userId) => {
        if (
            window.confirm(
                "Êtes-vous sûr de vouloir supprimer cet administrateur ?"
            )
        ) {
            const deleteUrl = route("user.delete", userId);
            //  console.log("URL de suppression : " + deleteUrl);
            router.delete(deleteUrl);
        }
    };
    return (
        <AdminAuthenticatedLayout
            user={auth.user}
            header={
                <div>
                    <span className="font-semibold text-xl text-gray-800 flex  ">
                        <MdOutlineDashboard />
                        <h2 className="ml-4">Tableau d' administration</h2>
                    </span>
                </div>
            }
        >
            <h4 className="mb-4  font-extrabold text-gray-900 dark:text-white my-6 text-center ">
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                    Liste de tous les utilisateurs
                </span>{" "}
            </h4>{" "}
            <Card>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg  ">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Profile
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Nom
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Prénom
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Date de naissance
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.users.map((user) => (
                                <tr
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                    key={user.id}
                                >
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        <img
                                            src={user.profile_image}
                                            alt="profile image"
                                            width={70}
                                            height={70}
                                            className="rounded-full cursor-pointer"
                                        />
                                    </th>
                                    <td className="px-6 py-4">{user.name}</td>
                                    <td className="px-6 py-4">
                                        {user.lastname}
                                    </td>
                                    <td className="px-6 py-4">{user.email}</td>
                                    <td className="px-6 py-4">
                                        {user.birthdate}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleDeleteUser(user.id)
                                            }
                                            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                        >
                                            <IoTrashBinOutline />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </AdminAuthenticatedLayout>
    );
};

export default AllUser;
