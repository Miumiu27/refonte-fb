// Comments.jsx
import React from "react";

const Comments = ({ comments }) => {
    return (
        <div>
            {comments &&
                comments.map(({ id, content, user }) => (
                    <div key={id} className="flex items-center space-x-2">
                        <img
                            className="h-6 w-6 rounded-full object-cover"
                            src={
                                user ? user.profile_image : "default_image_url"
                            }
                            alt={user ? user.name : "Unknown"}
                        />
                        <p className="text-gray-500 text-sm">
                            <span className="font-semibold">
                                {user ? user.name : "Unknown"}:{" "}
                            </span>
                            {content}
                        </p>
                    </div>
                ))}
        </div>
    );
};

export default Comments;
