import React, { useState, useEffect } from "react";
import { LuUserPlus2 } from "react-icons/lu";
import { ImUserPlus } from "react-icons/im";
import { useForm } from "@inertiajs/react";
import InputLabel from "@/Components/constants/InputLabel";
const AddUserModal = () => {
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => {
        setShowModal(false);
    };

    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        lastname: "",
        email: "",
        birthdate: "",
        password: "",
        profile_image: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("admin.create"));
        closeModal();

        if (errors) {
            //console.log(errors);
        }
        reset();
    };

    return (
        <>
            <button
                type="button"
                className=" my-4 flex text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2  mt-4 mb-5"
                onClick={() => setShowModal(true)}
            >
                <LuUserPlus2 className="mr-2" size={18} />
                Ajouter
            </button>

            {showModal ? (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="z-10 bg-white rounded-lg shadow-md w-full max-w-md p-4 relative">
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                            onClick={closeModal}
                        >
                            x
                        </button>
                        <form
                            name="createAdmin"
                            className="p-5"
                            onSubmit={submit}
                        >
                            <h6 className="pb-4 text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                                Ajout d' un nouvel administrateur{" "}
                            </h6>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Nom"
                                    name="name"
                                    id="name"
                                    className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700  dark:placeholder-gray-400 "
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    required
                                />
                            </div>

                            <input
                                type="text"
                                placeholder="Prénom"
                                name="lastname"
                                value={data.lastname}
                                onChange={(e) =>
                                    setData("lastname", e.target.value)
                                }
                                className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700  dark:placeholder-gray-400 "
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700  dark:placeholder-gray-400 "
                                required
                            />
                            <input
                                type="date"
                                placeholder="Date d' anniversaire"
                                name="birthdate"
                                value={data.birthdate}
                                onChange={(e) =>
                                    setData("birthdate", e.target.value)
                                }
                                className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700  dark:placeholder-gray-400 "
                                required
                            />
                            <input
                                type="password"
                                placeholder="Mot de passe"
                                name="password"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700  dark:placeholder-gray-400 "
                                minLength={8}
                                required
                            />
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
                                        setData(
                                            "profile_image",
                                            e.target.files[0]
                                        )
                                    }
                                    required
                                    className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700  dark:placeholder-gray-400 "
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full flex justify-center items-center text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2"
                                disabled={processing}
                            >
                                <ImUserPlus className="mr-2" size={18} />
                                Créer
                            </button>
                        </form>
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default AddUserModal;
