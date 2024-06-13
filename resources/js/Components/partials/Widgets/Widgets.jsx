import React from "react";

import img1 from "../../images/1.jpg";
import img2 from "../../images/2.jpg";
import img3 from "../../images/3.jpg";
import img4 from "../../images/4.jpg";
import img5 from "../../images/5.jpg";
import img6 from "../../images/6.gif";
import img7 from "../../images/7.gif";
import Contact from "./Contact";
import { RxDotsHorizontal } from "react-icons/rx";
import { AiTwotoneVideoCamera } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

const contacts = [
    { src: img1, name: "Kanto" },
    { src: img2, name: "Hardy" },
    { src: img3, name: "Claudia" },
    { src: img4, name: "Finoana" },
    { src: img5, name: "Mendrika" },
    { src: img6, name: "Miora" },
    { src: img7, name: "Test1" },
];

const Widgets = () => {
    return (
        <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
            <div className="flex justify-between items-center text-gray-500 mb-5">
                <h2 className="text-xl">Contacts</h2>
                <div className="flex space-x-2">
                    <AiTwotoneVideoCamera className="h-6" />
                    <BiSearch className="h-6" />
                    <RxDotsHorizontal className="h-6" />
                </div>
            </div>
            {contacts.map((contact) => (
                <Contact
                    key={contact.src}
                    src={contact.src}
                    name={contact.name}
                />
            ))}
        </div>
    );
};

export default Widgets;
