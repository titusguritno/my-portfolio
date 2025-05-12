"use client";

import Image from "next/image";
import Navbar from "../_components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full px-6 py-20 bg-[#0f172a] text-white min-h-screen">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Kiri: Teks */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm Titus Guritno! <br />
              <span className="text-emerald-400">Creative</span>{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 text-transparent bg-clip-text">
                Player
              </span>
            </h1>
            <p className="text-slate-300 mb-6 max-w-lg">
              I’m a passionate UI/UX designer with a mission to create
              delightful and intuitive digital experiences. With a strong
              foundation in design principles and a keen eye for detail, I
              specialize in translating complex ideas into user-friendly
              interfaces.
            </p>

            {/* Tombol ke Google Drive */}
            <a
              href="https://drive.google.com/file/d/1Q16jGP8nHUrSCN5Xdm-UDzij7SJJ3w86/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Download CV
            </a>
          </div>

          {/* Kanan: Gambar */}
          <div className="flex-1 relative">
            <div className="w-72 h-72 mx-auto relative z-10 rounded-full overflow-hidden border-4 border-emerald-400 rotate-12">
              <Image
                src="/images/profil.jpg"
                alt="Profile"
                width={300}
                height={300}
                className="object-cover w-full h-full -rotate-12"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
