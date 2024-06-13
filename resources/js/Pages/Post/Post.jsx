// Post.jsx
import React from "react";
import UserLayout from "@/Layouts/UserLayout";
import PostCard from "./PostCard";
import { useForm, usePage } from "@inertiajs/react";

const Post = ({ auth }) => {
    const { posts } = usePage().props;

    return (
        <UserLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <div>
                {posts.map(
                    ({
                        id,
                        description,
                        post_image,
                        created_at,
                        user,
                        comments,
                    }) => (
                        <PostCard
                            key={id}
                            postId={id}
                            authorName={user ? user.name : "Unknown"}
                            authorLastName={user ? user.lastname : "Anonyme XD"}
                            authorImage={
                                user ? user.profile_image : "default_image_url"
                            }
                            content={description}
                            image={post_image}
                            createdAt={created_at}
                            comments={comments} // Passer les commentaires en tant que prop
                        />
                    )
                )}
            </div>
        </UserLayout>
    );
};

export default Post;
