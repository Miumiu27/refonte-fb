// InvitationCard.jsx
import React from "react";

const InvitationCard = ({ senderName, senderImage, onAccept, onReject }) => {
    return (
        <div className="max-w-xs mx-auto bg-white rounded-md overflow-hidden shadow-md my-4">
            {/* Image de profil en grand plan */}
            <img
                className="w-full h-32 object-cover"
                src={senderImage}
                alt={senderName}
            />
            {/* Nom de l'utilisateur */}
            <div className="flex items-center p-2">
                <img
                    className="h-8 w-8 rounded-full object-cover border-full"
                    src={senderImage}
                    alt={senderName}
                />
                <p className="ml-2 font-semibold text-sm">{senderName}</p>
            </div>
            {/* Boutons d'interaction alignés verticalement avec w-full */}
            <div className="p-2 border-t flex flex-col">
                <button
                    onClick={onReject}
                    className="w-full text-red-500 px-2 py-1 rounded-md border border-red-500 mb-1"
                >
                    Supprimer
                </button>
                <button
                    onClick={onAccept}
                    className="w-full text-white bg-blue-500 px-2 py-1 rounded-md"
                >
                    Confirmer
                </button>
            </div>
        </div>
    );
};

export default InvitationCard;
