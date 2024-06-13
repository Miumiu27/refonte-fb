import img1 from "../../../images/1.jpg";
import img2 from "../../../images/2.jpg";
import img3 from "../../../images/3.jpg";
import img4 from "../../../images/4.jpg";
import img5 from "../../../images/5.jpg";
import img6 from "../../../images/6.gif";
import img7 from "../../../images/7.gif";
import img8 from "../../../images/8.png";
import StoryCard from "./StoryCard";

const stories = [
    {
        name: "Mac Gyver",
        src: img1,
        profile: img2,
    },
    {
        name: "Riley",
        src: img3,
        profile: img4,
    },
    {
        name: "Murdoc",
        src: img5,
        profile: img6,
    },
    {
        name: "Bones",
        src: img7,
        profile: img8,
    },
    {
        name: "Bone",
        src: img4,
        profile: img1,
    },
];
const Stories = () => {
    return (
        <div className="flex justify-center  space-x-3 mx-auto">
            {stories.map((story) => (
                <StoryCard
                    key={story.src}
                    name={story.name}
                    src={story.src}
                    profile={story.profile}
                />
            ))}
        </div>
    );
};

export default Stories;
