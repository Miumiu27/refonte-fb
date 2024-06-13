const StoryCard = ({ name, src, profile }) => {
    return (
        <div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-hidden p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse">
            {/* L'image du profil */}
            <div className="absolute top-1 left-1 z-10 rounded-full bg-white p-1">
                <img
                    className="rounded-full"
                    src={profile}
                    alt={name}
                    width={40}
                    height={40}
                    style={{ objectFit: "cover" }}
                />
            </div>

            {/* L'image de la story */}
            <img
                className="object-cover w-full h-full filter brightness-75 rounded-full lg:rounded-3xl"
                src={src}
                alt={name}
            />

            {/* Le nom de l'utilisateur */}
            <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 lg:opacity-100 w-5/6 text-white  text-sm font-bold truncate p-4">
                {name}
            </p>
        </div>
    );
};

export default StoryCard;
