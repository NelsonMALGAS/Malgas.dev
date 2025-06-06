import { motion } from "framer-motion";

const stairsAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};

const reversedIndex = (index: number) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
};

const Stairs = () => {
    return (
        <>
            {Array.from({ length: 6 }, (_, index) => (
                <motion.div
                    key={index}
                    variants={stairsAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                        delay: reversedIndex(index) * 0.1,
                    }}
                    className="h-full w-full bg-foreground relative"
                />
            ))}
        </>
    );
};

export default Stairs;
