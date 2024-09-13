import React from "react";
import NavbarHome from "../globalcomponent/navbar";
import { Hero } from "./user/landingpage/hero";



  export default function Home() {
    return (
      <main> 
      <NavbarHome />
      <Hero />
    </main>
  );
}
