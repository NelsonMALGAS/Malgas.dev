"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@radix-ui/react-tooltip";
import "swiper/css";
import Link from "next/link";
import Image from "next/image";
import { projects } from "../../data/projects";
import WorkSliderButtons from "@/components/WorkSliderButtons";

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper: { activeIndex: number }) => {
        const currentIndex = swiper.activeIndex;

        setProject(projects[currentIndex]);
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex flex-col justify-centerpy-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className=" xl:w-[50%] h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            <h2 className="text-[42px] font-bold leading-none text-foreground group-hover:text-[#00ff99] transition-all duration-500 capitalize">
                                {project.category} project
                            </h2>
                            <p className="text-foreground/60">{project.description}</p>
                            <ul className="flex flex-wrap gap-4">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className="text-xl text-[#00ff99]">
                                            {item.name}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    );
                                })}
                            </ul>
                            <div className="border border-white/20"></div>
                            {/*Buttons */}
                            <div className="flex items-center gap-4">
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-foreground/5 flex flex-col justify-center items-center group">
                                                <BsArrowUpRight className="text-foreground text-3xl group-hover:text-[#00ff99]" />
                                                <TooltipContent>
                                                    <p>Live project</p>
                                                </TooltipContent>
                                            </TooltipTrigger>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-foreground/5 flex flex-col justify-center items-center group">
                                                <BsGithub className="text-foreground text-3xl group-hover:text-[#00ff99]" />
                                                <TooltipContent>
                                                    <p>Github repo</p>
                                                </TooltipContent>
                                            </TooltipTrigger>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((item, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-background/10 z-10"></div>
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={item.image}
                                                    fill
                                                    className="object-cover"
                                                    alt="Image"
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                            <WorkSliderButtons
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max "
                                btnStyles="bg-[#00ff99] hover:bg-[#00ff99]/50 text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                                iconStyles=""
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Work;
