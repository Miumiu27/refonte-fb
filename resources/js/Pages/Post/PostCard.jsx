// PostCard.jsx
import React from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale"; // Importez la locale française
import { RiSendPlaneFill } from "react-icons/ri";
import { AiTwotoneLike, AiOutlineComment } from "react-icons/ai";
import { PiShareFat } from "react-icons/pi";
import { useForm, usePage } from "@inertiajs/react";
import Comments from "../Comments/Comments";

const PostCard = ({
    postId,
    authorName,
    authorLastName,
    authorImage,
    content,
    image,
    createdAt,
    comments,
}) => {
    const { data, setData, post } = useForm({
        post_id: postId,
        content: "",
    });

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        post(route("comments.store"), {
            data,
            onSuccess: () => {
                setData("content", "");
            },
        });
    };

    const formattedDate = format(
        new Date(createdAt),
        "EEEE dd MMMM yyyy 'à' HH:mm",
        {
            locale: fr, // Utilisez la locale française
        }
    );

    const user = usePage().props.auth.user;

    return (
        <div className="flex-1 mx-auto bg-white rounded-md overflow-hidden shadow-md my-4">
            {/* Author Section */}
            <div className="flex items-center p-4 border-b">
                <img
                    className="h-10 w-10 rounded-full object-cover border-full"
                    src={authorImage}
                    alt={authorName}
                />
                <p className="ml-2 font-semibold">
                    {authorLastName && `${authorLastName}  `}
                    {authorName} <br />
                    <span className="p-4 text-gray-500 text-xs">
                        {formattedDate}
                    </span>
                </p>
            </div>
            {/* Content Section */}
            <div className="p-4">
                <div className="mb-4">
                    <p>{content}</p>
                    {image && (
                        <img
                            className="w-full rounded"
                            src={image}
                            alt="Post"
                        />
                    )}
                </div>
            </div>
            {/* Icons Section */}
            <div className="flex justify-between p-4 border-b">
                <div className="flex items-center space-x-4">
                    <AiTwotoneLike className="text-blue-500" />
                    <p>Like</p>
                </div>

                <div className="flex items-center space-x-4">
                    <AiOutlineComment className="text-gray-500" />
                    <p>Comment</p>
                </div>

                <div className="flex items-center space-x-4">
                    <PiShareFat className="text-green-500" />
                    <p>Share</p>
                </div>
            </div>
            {/* Comments Section */}
            <Comments comments={comments} />
            {/* Comment Input */}
            <form
                onSubmit={handleCommentSubmit}
                className="flex items-center space-x-2 p-4 border-t border-b-2"
            >
                <img
                    className="h-10 w-10 rounded-full object-cover border-full"
                    src={user.profile_image}
                    alt={user.name}
                />
                <input
                    type="text"
                    value={data.content}
                    onChange={(e) => setData("content", e.target.value)}
                    placeholder="Add a comment..."
                    className="flex-grow border-2 border-gray-300 focus:outline-none focus:border-blue-500 rounded-full p-2"
                />
                <button type="submit" className="text-red px-2 py-1 rounded">
                    <RiSendPlaneFill />
                </button>
            </form>
        </div>
    );
};

export default PostCard;
