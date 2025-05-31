"use client";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import links from "@/data/links";

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center cursor-pointer">
                <CiMenuFries className="text-[32px] text-[#00ff99]" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
                <div className="mt-32 mb-40 text-center text-2xl ">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            Nelson<span className="text-[#00ff99]">.</span>
                        </h1>
                    </Link>
                </div>
                <nav className="flex flex-col justify-center items-center gap-2">
                    {links.map((link, index) => {
                        return (
                            <Link href={link.path} key={index} className={`${link.path === pathname && "text-[#00ff99] border-b-2 border-[#00ff99]"} capitalize font-medium hover:#00ff99 transition-all`}>
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
