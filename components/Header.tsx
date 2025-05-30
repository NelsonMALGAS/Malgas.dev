import Link from "next/link";
import { Button } from "./ui/button";

// Components
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import { Separator } from "./ui/separator";
import { ModeToggle } from "./ModeToggle";


const Header = () => {
    return (
        <>
            <header className="py-8 px-4 xl:py-12 text-foreground">
                <div className="container mx-auto flex justify-between items-center gap-12">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            Nelson<span className="text-[#00ff99]">.</span>
                        </h1>
                    </Link>
                    {/* {desktop nav} */}
                    <div className="hidden xl:flex items-center gap-8">
                        <Navbar />
                        <Link href="/contact">
                            <Button>Hire Me</Button>
                        </Link>
                        <ModeToggle />
                    </div>

                    {/* mobile Nav */}

                    <div className="xl:hidden flex">
                        <MobileNav />
                        <ModeToggle />
                    </div>
                </div>
            </header>
            <Separator className="text-[#00ff99]" />
        </>
    );
};

export default Header;
