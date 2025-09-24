import React from "react";
import Hero from "../components/Hero";
import Cities from "../components/Cities";
import HowWeWork from "../components/HowWeWork";
import Developers from "../components/Developers";
import Explore from "../components/Explore";

export default function Home() {
  return (
    <div >
      <Hero/>
      <Cities/>
      <Developers/>
      <Explore/>
      <HowWeWork/>
    </div>
  );
}
