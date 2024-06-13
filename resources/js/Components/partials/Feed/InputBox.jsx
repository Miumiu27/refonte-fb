import React, { useState } from "react";
import { FaVideo } from "react-icons/fa";
import { IoHappyOutline } from "react-icons/io5";
import { BsFillCameraFill } from "react-icons/bs";
import { usePage, useForm } from "@inertiajs/react";
import Modal from "@/Components/constants/Modal";
import TextInput from "@/Components/constants/TextInput";
import InputLabel from "@/Components/constants/InputLabel";

const InputBox = () => {
    const user = usePage().props.auth.user;
    const { posts } = usePage().props;
    //console.log(user);
    const [modal, setModal] = useState(false);
    const openModal = () => {
        setModal(true);
    };
    const closeModal = () => {
        setModal(false);
    };
    const sendPost = (e) => {
        e.preventDefault();
    };

    const { data, setData, errors, post, progress, reset } = useForm({
        description: "",
        post_image: null,
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("post.upload.store"));
        reset();
        closeModal();
    };
    return (
        <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
            <div className="flex space-x-4 p-4 items-center">
                <img
                    src={user.profile_image}
                    className="rounded-full"
                    width={40}
                    height={40}
                    layout="fixed"
                />
                <form className="flex flex-1" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder={`A quoi tu penses ${user.lastname}`}
                        className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
                        name="description"
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                    />
                    <button hidden type="submit" onClick={() => handleSubmit()}>
                        {" "}
                        Submit
                    </button>
                </form>
                <div
                    className="flex flex-col filter hover:brightness-110
                transition duration-150 transform  hover:scale-105 cursor-pointer"
                >
                    <img
                        src={user.profile_image}
                        className="h-10 object-contain"
                        alt=""
                    />
                    <p className="text-xs text-red-500 text-center">Remove</p>
                </div>
            </div>
            <div className="flex justify-evenly p-3 border-t">
                <div className="inputIcon">
                    <FaVideo className=" h-7 text-red-500" />
                    <p className="text-xs sm:text-sm xl:text-base">
                        Live Video
                    </p>
                </div>

                <div className="inputIcon" onClick={() => openModal()}>
                    <BsFillCameraFill className=" h-7 text-yellow-300" />
                    <p className="text-xs sm:text-sm xl:text-base">
                        Photo/Video
                    </p>
                </div>

                <div className="inputIcon">
                    <IoHappyOutline className=" h-7 text-green-400" />
                    <p className="text-xs sm:text-sm xl:text-base">
                        Feeling activity
                    </p>
                </div>
            </div>
            {/*
             * Modal
             */}

            <Modal show={modal}>
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                    onClick={closeModal}
                >
                    x
                </button>
                <h1
                    className=" text-center mt-4 text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
                    style={{ fontSize: "23px" }}
                >
                    Créer une publication
                </h1>
                <form className="p-6" onSubmit={handleSubmit}>
                    <div className="flex my-4">
                        <img
                            src={user.profile_image}
                            alt="profile_image"
                            width={50}
                            height={50}
                            className="rounded-full
                        mx-2"
                        />
                        <p>{user.lastname + "   " + user.name}</p>
                    </div>
                    <input
                        type="text"
                        placeholder={`Quoi de neuf  ${user.lastname} ?`}
                        className=" w-full rounded-lg h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
                        name="description"
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                    />
                    <div>
                        <InputLabel
                            htmlFor="email"
                            value="Ajouter des photos /vidéos ici "
                            className="my-2 mt-8"
                        />
                        {/* <IoImage /> */}
                    </div>
                    <TextInput
                        type="file"
                        className="block w-full py-2 mb-4 px-3 border rounded-full text-gray-700 placeholder-gray-500 focus:outline-none focus:ring focus:ring-grey-300 focus:ring-opacity-50 mb-6"
                        autoComplete="username"
                        isFocused={true}
                        name="post_image"
                        onChange={(e) =>
                            setData("post_image", e.target.files[0])
                        }
                    />

                    <button
                        type="submit"
                        className=" mt-6 w-full flex justify-center items-center text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-4 text-center mr-2 mb-2"
                    >
                        Publier
                    </button>
                </form>
            </Modal>
        </div>
    );
};

export default InputBox;
