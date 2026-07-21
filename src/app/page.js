"use client";

import { useState } from "react";
import Edge from "@/components/sections/Edge";
import Cat from "@/components/sections/Cat";
import HowItWorks from "@/components/sections/HowItWorks";
import Faq from "@/components/sections/Faq";
import Testimonials from "@/components/sections/Testimonials";
import CtaBanner from "@/components/sections/CtaBanner";
import EnquireModal from "@/components/common/EnquireModal";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Clients from "@/components/sections/Clients";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main>
      <Hero onEnquireClick={openModal}/>
      <Stats />
      <Clients />
      <Edge />
      <Cat />
      <HowItWorks />
      <Faq onEnquireClick={openModal} />
      
      <Testimonials />
      <CtaBanner onContactClick={openModal} />
      <EnquireModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
}