import React from "react";
import { FaUsers, FaFile, FaBan } from "react-icons/fa";

const StatisticsCard = ({ icon, title, value }) => (
    <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center">
            <div className="p-3 bg-blue-500 text-white rounded-full">
                {icon}
            </div>
            <div className="ml-4">
                <p className="text-sm font-semibold text-gray-600">{title}</p>
                <p className="text-2xl font-semibold text-gray-800">{value}</p>
            </div>
        </div>
    </div>
);

const StatCard = ({ userCount, postCount }) => {
    return (
        <div className="flex justify-center items-center ">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <StatisticsCard
                    icon={<FaUsers />}
                    title="Utilisateurs"
                    value={userCount}
                />
                <StatisticsCard
                    icon={<FaFile />}
                    title="Publications"
                    value={postCount}
                />
                <StatisticsCard icon={<FaBan />} title="Bannis" value="789" />
            </div>
        </div>
    );
};

export default StatCard;
