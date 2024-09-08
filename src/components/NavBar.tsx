'use client'

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from 'next/link'
import Image from "next/image";
const NavBar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            
            <Menu setActive={setActive} >
            <Image height={20} width={100} alt="Logo Image" src={"https://alrightsolution.in/wp-content/uploads/2024/09/cropped-WhatsApp_Image_2024-08-27_at_21.33.03_9651146d-removebg-preview-1-145x35.png"} />
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active} item="Home">

                    </MenuItem>
                </Link>
                <MenuItem setActive={setActive} active={active} item="Services">
                    <div className=" flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/web-dev">Loan</HoveredLink>
                        <HoveredLink href="/web-dev">Share Market</HoveredLink>
                        <HoveredLink href="/web-dev">Work From Home</HoveredLink>
                    </div>
                </MenuItem>
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active} item="About">

                    </MenuItem>
                </Link>
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active} item="Contact us">

                    </MenuItem>
                </Link>
            </Menu>
        </div>
    )
}

export default NavBar
