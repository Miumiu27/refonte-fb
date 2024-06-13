import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "@inertiajs/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "./slider.css";

import { FreeMode, Pagination } from "swiper/modules";

import { RxArrowRight } from "react-icons/rx";
import { Slider1, Slider2 } from "../constants";
const HomeSlider = () => {
    return (
        <div className="h-sreen flex flex-col md:flex-row gap-5 items-center justify-center bg-black text-white p-4 shadow-2xl">
            <div className="flex flex-col gap-3">
                <h1 className="text-white text-[50px] font-semibold">
                    Bienvenue !!!
                    <p className="text-[16px] max-w-[400px] text-gray-200 md:text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                </h1>
            </div>
            <div className="w-[70%] md:w-[40%]">
                <Swiper
                    breakpoints={{
                        340: {
                            slidesPerView: 1,
                            spaceBetween: 15,
                        },
                        700: {
                            slidesPerView: 1,
                            spaceBetween: 15,
                        },
                    }}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="pagination-container"
                >
                    <SwiperSlide className="mb-14">
                        <div className="grid grid-cols-2 gap-4 px-10">
                            {Slider1.map((image) => (
                                <div className="relative group" key={image.src}>
                                    <img
                                        src={image.src}
                                        alt="purple image"
                                        className="rounded-md h-[240px] w-[240px] object-cover"
                                    />
                                    <div className="cursor-pointer absolute inset-0 bg-gradient-to-r max-w-[240px] rounded-md from-purple-800 via-pink-500 to-purple-800 opacity-0 group-hover:opacity-70" />
                                    <div className="absolute text-white inset-0 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-all">
                                        Se connecter
                                        <RxArrowRight className="ml-2 w-[24px] h-[24px]" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="mb-14">
                        <div className="grid grid-cols-2 gap-4 px-10">
                            {Slider2.map((image) => (
                                <div className="relative group" key={image.src}>
                                    <img
                                        src={image.src}
                                        alt="purple image"
                                        className="rounded-md h-[240px] w-[240px] object-cover"
                                    />
                                    <div className="cursor-pointer absolute inset-0 max-w-[240px] rounded-md bg-gradient-to-r from-purple-900 via-orange-500 to-purple-900 opacity-0 group-hover:opacity-70" />
                                    <div className="absolute text-white inset-0 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-all">
                                        <Link href={route("login")}>
                                            Se connecter
                                        </Link>
                                        <RxArrowRight className="ml-2 w-[24px] h-[24px]" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default HomeSlider;
