"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import links from "@/data/links";

const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className=" container mx-auto flex gap-8">
            {links.map((link, index) => {
                return (
                    <Link href={link.path} key={index} className={`${link.path === pathname && "text-[#00ff99] border-b-2 border-[#00ff99]"} capitalize font-medium hover:text-[#00ff99] transition-all`}>
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Navbar;
