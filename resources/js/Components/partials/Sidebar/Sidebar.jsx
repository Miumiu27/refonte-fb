import { AiTwotoneShop, AiFillDownCircle } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import SidebarRow from "./SidebarRow";
import { MdGroups2 } from "react-icons/md";
import { PiVideo } from "react-icons/pi";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { CiClock2 } from "react-icons/ci";
import { usePage } from "@inertiajs/react";

const Sidebar = () => {
    const user = usePage().props.auth.user;
    return (
        <div className="p-2 mt-5 max-w[600px] xl:min-w-[300px]">
            <SidebarRow
                src={user.profile_image}
                title={user.lastname + " " + user.name}
            />
            <SidebarRow Icon={FaUserFriends} title="Amies" />
            <SidebarRow Icon={MdGroups2} title="Groupes" />
            <SidebarRow Icon={AiTwotoneShop} title="Marketplace" />
            <SidebarRow Icon={PiVideo} title="Vidéo" />
            <SidebarRow Icon={BsFillCalendarCheckFill} title="Evènements" />
            <SidebarRow Icon={CiClock2} title="Souvenir" />
            <SidebarRow Icon={AiFillDownCircle} title="Voir plus " />
        </div>
    );
};

export default Sidebar;
