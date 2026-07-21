"use client";

import { useState } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import EnquireModal from "@/components/common/EnquireModal";

export default function ClientLayout({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex min-h-screen flex-col font-sans antialiased">
      <Navbar onEnquireClick={openModal} />
      <main className="flex-1">
        {children}
      </main>

      <Footer onEnquireClick={openModal} />
      <EnquireModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}