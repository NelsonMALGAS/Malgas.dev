"use client";

import { motion } from "framer-motion";
import { Project, freelanceProjects } from "@/data/projects";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa"
import Image from "next/image";


const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.5,
            ease: "easeOut",
        },
    }),
};

const Projects = () => {

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 0.3, duration: 0.6, ease: "easeInOut" },
            }}
            className="container py-12 space-y-10"
        >
            <div className="text-center">
                <h2 className="text-4xl font-bold tracking-tight">Projects</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
                    A showcase of real-world applications I've built using modern web technologies.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {freelanceProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        custom={index}
                    >
                        <Card className="h-[500px] w-full flex flex-col justify-between">
                            <CardHeader>
                                <div className="flex justify-between items-center text-muted-foreground text-sm">
                                    <span className="text-primary font-bold">{project.num}</span>
                                    <CardTitle><span>{project.title}</span></CardTitle>
                                </div>
                            </CardHeader>

                            <CardContent className="flex-1 flex flex-col">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="rounded-lg object-cover w-full h-[180px] mb-4"
                                />
                                <CardDescription className="text-sm text-muted-foreground truncate">
                                    {project.description}
                                </CardDescription>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <span className="truncate cursor-help">
                                                Show More
                                            </span>
                                        </TooltipTrigger>
                                        <TooltipContent className="max-w-[500px] max-h-[600px] flex items-center justify-center">
                                            <p>{project.description}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                <ul className="flex flex-wrap mt-3 gap-2 text-xs text-foreground">
                                    {project.stack.map((tech, i) => (
                                        <Badge key={i} className="px-2 py-1 rounded-full">
                                            {tech.name}
                                        </Badge>
                                    ))}
                                </ul>
                            </CardContent>

                            <CardFooter className="mt-4 flex gap-2 group">
                                <Button asChild variant="outline" size="sm" className="w-1/2 border border-[#00ff99]">
                                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="w-4 h-4 mr-1 group-hover:text-[#00ff99]" />
                                        <span className="group-hover:text-[#00ff99]">Live</span>
                                    </a>
                                </Button>
                                <Button asChild variant="ghost" size="sm" className="w-1/2 bg-[#00ff99] group hover:border border-[#00ff99] hover:bg-[#00ff99]/90">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaGithub className="w-4 h-4 mr-1 text-foreground group-hover:text-[#00ff99]" />
                                        <span className="text-foreground group-hover:text-[#00ff99]">GitHub</span>
                                    </a>
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </div>

        </motion.section>
    );
};

export default Projects;
