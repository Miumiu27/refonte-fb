import img from "../../images/pi.svg";
import Dropdown from "@/Components/constants/Dropdown";
import { usePage, Link } from "@inertiajs/react";
import HeaderIcon from "./HeaderIcon";
import { PiVideoFill } from "react-icons/pi";
import { AiTwotoneHome, AiOutlineShop } from "react-icons/ai";
import { HiMiniMagnifyingGlass, HiUserGroup } from "react-icons/hi2";
import { IoGameController, IoLogOutSharp } from "react-icons/io5";
import { LuPackage } from "react-icons/lu";
import { BsChatFill, BsFillBellFill, BsPersonFillGear } from "react-icons/bs";

const Header = () => {
    const user = usePage().props.auth.user;
    //console.log(user);
    return (
        <div className=" sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
            {/* Left*/}
            <div className=" flex items-center">
                <img src={img} alt="" width={40} height={40} layout="fixed" />
                <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                    <HiMiniMagnifyingGlass className="h-6 text-gray-600 " />
                    <input
                        className=" hidden md:inline-flex ml-2 items-center bg-transparent  outline-none
                        placeholder-gray-500 flex-shrink"
                        type="text"
                        placeholder="Rechercher ..."
                    />
                </div>
            </div>

            {/* Center*/}
            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 md:space-x-2">
                    <HeaderIcon active Icon={AiTwotoneHome} />
                    <HeaderIcon Icon={PiVideoFill} />
                    <HeaderIcon Icon={AiOutlineShop} />
                    <HeaderIcon Icon={HiUserGroup} />
                    <HeaderIcon Icon={IoGameController} />
                </div>
            </div>

            {/* Right*/}
            <div className="flex items-center sm:space-x-2 justify-end">
                {/* Profile  pic*/}

                <LuPackage className="icon" />
                <Link href={route("chat")}>
                    <BsChatFill className="icon" size={20} />
                </Link>

                <BsFillBellFill className="icon" size={20} />

                <div className="hidden sm:flex sm:items-center sm:ml-6">
                    <div className="ml-3 relative">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <img
                                    src={user.profile_image}
                                    alt=""
                                    width={40}
                                    height={40}
                                    layout="fixed"
                                    className="rounded-full cursor-pointer"
                                    // onClick={signOut}
                                />
                            </Dropdown.Trigger>

                            <Dropdown.Content>
                                <Dropdown.Link href={route("profile.edit")}>
                                    <div className="flex">
                                        <BsPersonFillGear className="text-xl mx-4" />
                                        Profile
                                    </div>
                                </Dropdown.Link>
                                <Dropdown.Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                >
                                    <div className="flex ">
                                        <IoLogOutSharp className="text-xl mx-4" />
                                        Se déconnecter
                                    </div>
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
