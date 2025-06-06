"use client"

import { Separator } from "@/components/ui/separator";
import services from "@/data/services";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => {
                        return <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                            <div className="w-full flex justify-between items-center">
                                <div className="text-5xl font-extrabold text-outline text-foreground group-hover:text-[#00ff99] transition-all duration-500">{service.num}</div>
                                <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-background group-hover:bg-[#00ff99] transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                                    <BsArrowDownRight className="text-primary text-3xl" />
                                </Link>
                            </div>
                            <h2 className="text-[42px] font-bold leading-none text-foreground group-hover:text-[#00ff99] transition-all duration-500">{service.title}</h2>
                            <p className="text-foreground/60">{service.description}</p>
                            <Separator className="border-b border-white/20 w-full" />
                        </div>
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
