import InvitationCard from "@/Pages/Invitations/InvitationCard";
import Header from "@/Components/partials/Header/Header";
import Sidebar from "@/Components/partials/Sidebar/Sidebar";
import Widgets from "@/Components/partials/Widgets/Widgets";
import Stories from "@/Components/partials/Feed/stories/Stories";
import InputBox from "@/Components/partials/Feed/InputBox";
import Login from "@/Pages/Login";

export default function UserLayout({ children }) {
    const handleAccept = () => {
        // Logique pour accepter l'invitation
    };

    const handleReject = () => {
        // Logique pour refuser l'invitation
    };
    return (
        <div className="min-h-screen bg-gray-100">
            <div className=" h-screen bg-gray-100 overflow-hidden">
                <Header />
                <main className="flex">
                    <Sidebar />
                    {/*Feed*/}
                    <div
                        className=" flex flex-grow h-screen pb-44 pt-6 mr-4
         overflow-y-auto scrollbar-hide "
                    >
                        <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl ">
                            {/*Stories*/}
                            <Stories />
                            {/*InputBox*/}
                            <InputBox />
                            <Login />
                            <div className=" pb-32 pt-8">
                                <InvitationCard
                                    senderName="John Doe"
                                    senderImage="https://placekitten.com/50/50"
                                    onAccept={handleAccept}
                                    onReject={handleReject}
                                />
                                {children}
                            </div>
                        </div>
                    </div>

                    <Widgets />
                </main>
            </div>
        </div>
    );
}
