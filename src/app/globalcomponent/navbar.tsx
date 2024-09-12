'user client'
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { logo } from "../../../public";
import Image from "next/image";


export default function NavbarHome(){
    return (
        <Navbar shouldHideOnScroll className="justify-between mx-auto"> 
            <NavbarBrand>
                <Image src={logo} alt="logo portofolio" width={56} height={60} className="" />
                <p className="font-bold text-inherit">Asep permadi</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex md:flex gap-4" justify="center">
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
                <Button>Login</Button>
            </NavbarContent>
            
            
        </Navbar>
    )
}


