const SidebarRow = ({ Icon, title, src }) => {
    return (
        <div className="flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer">
            {src && (
                <img
                    src={src}
                    className="rounded-full"
                    width={30}
                    height={30}
                    layout="fixed"
                />
            )}
            {Icon && <Icon className="h-7 w-7 text-[#AE928F]"></Icon>}
            <p className="hidden sm:inline-flex font-medium">{title}</p>
        </div>
    );
};

export default SidebarRow;
