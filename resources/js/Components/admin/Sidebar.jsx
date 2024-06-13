import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { TbDeviceAnalytics } from "react-icons/tb";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoImages } from "react-icons/io5";
import { IoMdCompass } from "react-icons/io";
import { HiMiniUserGroup } from "react-icons/hi2";
import { Link } from "@inertiajs/react";
import { useState } from "react";

const Sidebar = () => {
    const menu = [
        { name: "Statistique", link: "/home", icon: TbDeviceAnalytics },

        {
            name: "Utilisateur",
            link: route("all.user"),
            icon: HiMiniUserGroup,
            margin: true,
        },
        { name: "Publication", link: route("all.post"), icon: IoImages },
        { name: "Paramètre", link: "/", icon: IoMdCompass },
    ];
    const [open, setOpen] = useState(true);
    return (
        <div
            className={`bg-[#0e0e0e] min-h-screen ${
                open ? "w-72" : "w-16"
            } duration-500  text-gray-100 px-4`}
        >
            <div className="py-3 flex justify-end">
                <HiMenuAlt3
                    size={26}
                    className="cursor-pointer"
                    onClick={() => setOpen(!open)}
                />
            </div>
            <div className="mt-4 flex flex-col gap-4 relative">
                {menu?.map((menu, i) => (
                    <Link
                        href={menu?.link}
                        key={i}
                        className={`${
                            menu?.margin && "mt-5"
                        }group  flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800  rounded-gray-800`}
                    >
                        <div>
                            {" "}
                            {React.createElement(menu?.icon, {
                                size: "20",
                            })}
                        </div>
                        <h2
                            style={{
                                transitionDelay: `${i + 3}00ms`,
                            }}
                            className={`whitespace-pre duration-500  ${
                                !open &&
                                "opacity-0 translate-x-28 overflow-hidden"
                            } `}
                        >
                            {menu?.name}
                        </h2>
                        <h2
                            className={`   ${
                                open && "hidden"
                            } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900  rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover;duration-300 group-hover:w-fit`}
                        >
                            {menu?.name}
                        </h2>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
