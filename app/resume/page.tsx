"use client";
import { useState } from "react";
import {
    FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaGithub, FaGitAlt,
} from "react-icons/fa";
import {
    SiTailwindcss, SiNextdotjs, SiTypescript, SiFirebase, SiMongodb, SiMaterialdesign,
} from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";
import {
    Tabs, TabsContent, TabsList, TabsTrigger,
} from "../../components/ui/tabs";
import {
    Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { AnimatePresence, motion } from "framer-motion";
import { about, education, experience } from "@/data/resumeInfo";

const skills = {
    title: "My Skills",
    description:
        "I specialize in modern web development, combining skills in front-end technologies like HTML, CSS, JavaScript, and frameworks like React and Next.js, with back-end expertise in Node.js, Firebase, and MongoDB. With experience in design tools like Figma and styling libraries like Tailwind CSS, I create responsive, user-friendly, and visually appealing web applications.",
    skillList: [
        { icon: <FaHtml5 />, name: "HTML 5" },
        { icon: <FaCss3 />, name: "CSS 3" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <SiMaterialdesign />, name: "Material UI" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <FaReact />, name: "React.JS" },
        { icon: <SiNextdotjs />, name: "Next.JS" },
        { icon: <SiFirebase />, name: "Firebase" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <FaFigma />, name: "Figma" },
        { icon: <FaNodeJs />, name: "Node.JS" },
        { icon: <FaGithub />, name: "Github" },
        { icon: <TbBrandVite />, name: "Vite" },
        { icon: <FaGitAlt />, name: "Git" },
    ],
};

const Resume = () => {
    const [activeTab, setActiveTab] = useState("experience");

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 mt-4"
        >
            <div className="container mx-auto w-full">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About Me</TabsTrigger>
                    </TabsList>

                    <div className="w-full min-h-[650px] flex">
                        <AnimatePresence mode="wait">
                            {activeTab === "experience" && (
                                <motion.div
                                    key="experience"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full"
                                >
                                    <TabsContent value="experience" className="w-full">
                                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                            <h3 className="text-4xl font-bold text-primary">{experience.title}</h3>
                                            <p className="max-w-[600px] text-foreground/60 xl:mx-0 mx-auto">
                                                {experience.description}
                                            </p>
                                            <ScrollArea className="overflow-visible">
                                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                                    {experience.items.map((exp, index) => (
                                                        <li key={index} className="bg-card shadow-md hover:shadow-xl transition-shadow duration-300 border border-border h-[200px] p-6 flex flex-col justify-between rounded-2xl">
                                                            <span className="text-[#00ff99] font-medium text-sm">{exp.duration}</span>
                                                            <h3 className="text-xl font-semibold">{exp.position}</h3>
                                                            <div className="flex items-center gap-2 text-sm text-foreground/60">
                                                                <span className="w-[6px] h-[6px] rounded-full bg-[#00ff99]" />
                                                                {exp.company}
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </ScrollArea>
                                        </div>
                                    </TabsContent>
                                </motion.div>
                            )}

                            {activeTab === "education" && (
                                <motion.div
                                    key="education"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full"
                                >
                                    <TabsContent value="education" className="w-full">
                                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                            <h3 className="text-4xl font-bold text-primary">{education.title}</h3>
                                            <p className="max-w-[600px] text-foreground/60 xl:mx-0 mx-auto">
                                                {education.description}
                                            </p>
                                            <ScrollArea className="overflow-visible">
                                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                                    {education.items.map((item, index) => (
                                                        <li key={index} className="bg-card shadow-md hover:shadow-xl transition-shadow duration-300 border border-border h-[200px] p-6 flex flex-col justify-between rounded-2xl">
                                                            <span className="text-[#00ff99] font-medium text-sm">{item.duration}</span>
                                                            <h3 className="text-xl font-semibold">{item.degree}</h3>
                                                            <div className="flex items-center gap-2 text-sm text-foreground/60">
                                                                <span className="w-[6px] h-[6px] rounded-full bg-[#00ff99]" />
                                                                {item.institution}
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </ScrollArea>
                                        </div>
                                    </TabsContent>
                                </motion.div>
                            )}

                            {activeTab === "skills" && (
                                <motion.div
                                    key="skills"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full"
                                >
                                    <TabsContent value="skills" className="w-full">
                                        <div className="flex flex-col gap-[30px]">
                                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                                <h3 className="text-4xl font-bold text-primary">{skills.title}</h3>
                                                <p className="text-foreground/60 max-w-[700px] mx-auto xl:mx-0">
                                                    {skills.description}
                                                </p>
                                            </div>
                                            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                                                {skills.skillList.map((skill, index) => (
                                                    <li key={index}>
                                                        <TooltipProvider delayDuration={100}>
                                                            <Tooltip>
                                                                <TooltipTrigger className="w-full h-[150px] bg-card shadow-md hover:shadow-xl transition-all duration-300 rounded-xl flex justify-center items-center group">
                                                                    <div className="text-6xl group-hover:text-[#00ff99] transition-colors duration-300">
                                                                        {skill.icon}
                                                                    </div>
                                                                </TooltipTrigger>
                                                                <TooltipContent>
                                                                    <p className="capitalize">{skill.name}</p>
                                                                </TooltipContent>
                                                            </Tooltip>
                                                        </TooltipProvider>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </TabsContent>
                                </motion.div>
                            )}

                            {activeTab === "about" && (
                                <motion.div
                                    key="about"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full"
                                >
                                    <TabsContent value="about" className="w-full text-center xl:text-left">
                                        <div className="flex flex-col gap-[30px]">
                                            <h3 className="text-4xl font-bold text-primary">{about.title}</h3>
                                            <p className="max-w-[600px] text-foreground/60 mx-auto xl:mx-0">
                                                {about.description}
                                            </p>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 min-w-[650px] w-full mx-auto xl:mx-0">
                                                {about.info.map((item, index) => (
                                                    <motion.div
                                                        key={index}
                                                        initial={{ opacity: 0, y: 10 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                                        className="bg-card border border-border rounded-xl px-6 py-4 flex justify-between items-center hover:shadow-md w-full min-w-[300px] min-h-[120px]"
                                                    >
                                                        <span className="text-foreground/60 text-sm font-medium">{item.fieldName}</span>
                                                        <span className="flex flex-col flex-wrap text-right font-semibold text-base text-foreground">{item.fieldValue}</span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </TabsContent>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
