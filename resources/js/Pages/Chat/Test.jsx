import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { MdOutlineDashboard } from "react-icons/md";
import { useState } from "react";
import { FaUser, FaSearch } from "react-icons/fa";
import { FaComment, FaPhone, FaVideo } from "react-icons/fa";
import { FaStar, FaHeart } from "react-icons/fa";

const Chat = ({ auth }) => {
    const [selectedContact, setSelectedContact] = useState(null);

    const contacts = [
        { id: 1, name: "John Doe", image: "https://placekitten.com/50/50" },
        { id: 2, name: "Jane Doe", image: "https://placekitten.com/50/51" },
        // Add more contacts as needed
    ];

    const messages = [
        { id: 1, sender: "John Doe", content: "Hello! How are you?" },
        { id: 2, sender: "You", content: "Hi John! I'm good, thanks." },
        // Add more messages as needed
    ];

    const handleContactClick = (contact) => {
        setSelectedContact(contact);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div>
                    <span className="font-semibold text-xl text-gray-800 flex  ">
                        <MdOutlineDashboard />
                        <h2 className="ml-4">Chat app</h2>
                    </span>
                </div>
            }
        >
            <div className="flex h-screen bg-gray-800">
                {/* Sidebar */}
                <div className="w-1/4 bg-gray-700 p-4">
                    <div className="flex items-center justify-around mb-4">
                        <div className="flex flex-col items-center text-blue-400">
                            <FaComment className="text-3xl mb-1" />
                            <span>Messages</span>
                        </div>
                        <div className="flex flex-col items-center text-green-400">
                            <FaUser className="text-3xl mb-1" />
                            <span>Amis</span>
                        </div>
                        <div className="flex flex-col items-center text-yellow-400">
                            <FaHeart className="text-3xl mb-1" />
                            <span>Favoris</span>
                        </div>
                    </div>
                    <div className="flex items-center bg-purple-500 text-white text-xl font-semibold p-4 mb-4 rounded-md shadow-md">
                        <FaUser className="h-6 w-6 mr-2" />
                        Chat Contacts
                    </div>
                    <div className="space-y-2">
                        {/* Barre de recherche */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full p-2 rounded-full bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-500"
                            />
                            <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>

                        {/* Liste des contacts */}
                        {contacts.map((contact) => (
                            <div
                                key={contact.id}
                                onClick={() => handleContactClick(contact)}
                                className={`flex items-center p-2 rounded-lg cursor-pointer ${
                                    selectedContact &&
                                    selectedContact.id === contact.id
                                        ? "bg-gray-600"
                                        : ""
                                }`}
                            >
                                <img
                                    className="h-8 w-8 rounded-full object-cover mr-2"
                                    src={contact.image}
                                    alt={contact.name}
                                />
                                <span className="text-white">
                                    {contact.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Main Chat Area */}
                <div className="flex-1 flex flex-col bg-gray-900 p-4">
                    {selectedContact ? (
                        <>
                            {/* Chat Header */}
                            <div className="flex items-center bg-gray-800 text-white text-xl font-semibold p-4 mb-2 border-b-0 shadow-md justify-between">
                                <div className="flex items-center">
                                    <img
                                        className="h-8 w-8 rounded-full object-cover mr-2"
                                        src={selectedContact.image}
                                        alt={selectedContact.name}
                                    />
                                    <span>{selectedContact.name}</span>
                                </div>
                                <div className="flex items-center space-x-4 justify-end">
                                    <FaComment className="cursor-pointer" />
                                    <FaPhone className="cursor-pointer" />
                                    <FaVideo className="cursor-pointer" />
                                </div>
                            </div>

                            {/* Chat Messages */}
                            <div className="flex-1 overflow-y-auto">
                                {messages.map((message) => (
                                    <div
                                        key={message.id}
                                        className={`flex ${
                                            message.sender === "You"
                                                ? "justify-end"
                                                : "justify-start"
                                        } items-center mb-2`}
                                    >
                                        {message.sender !== "You" && (
                                            <img
                                                className="h-6 w-6 rounded-full object-cover mr-2"
                                                src={selectedContact.image}
                                                alt={selectedContact.name}
                                            />
                                        )}
                                        <div
                                            className={`p-3 rounded-lg ${
                                                message.sender === "You"
                                                    ? "bg-blue-500 text-white"
                                                    : "bg-gray-700 text-white"
                                            }`}
                                        >
                                            {message.content}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Chat Input */}
                            <div className="mt-4 flex items-center">
                                <input
                                    type="text"
                                    placeholder="Type a message..."
                                    className="flex-1 p-2 rounded-full outline-none text-white bg-gray-800"
                                />
                                <button className="ml-2 bg-blue-500 p-2 rounded-full text-white">
                                    Send
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className="text-xl text-white">
                            Select a contact to start chatting
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Chat;
