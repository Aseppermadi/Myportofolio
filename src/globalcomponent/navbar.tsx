'user client'
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { logo } from "../../public";
import Image from "next/image";
import ThemeSwitcher from './ThemeSwitcher'


export default function NavbarHome(){
    return (
        <Navbar shouldHideOnScroll> 
            <NavbarBrand>
                <Image src={logo} alt="logo portofolio" width={56} height={60} />
                <p className="font-bold text-inherit">Asep permadi</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">Home</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">About</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">Project</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">Converter</Link>
                </NavbarItem>
                <ThemeSwitcher/>
            </NavbarContent>
            
            
        </Navbar>
    )
}


