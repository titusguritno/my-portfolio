"use client";

import Image from "next/image";
import Navbar from "../_components/navbar";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full px-6 py-20 bg-slate-800 text-white min-h-screen">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Kiri: Teks */}
          <div className="flex-1">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-2">
              Hi, I'm <span className="text-emerald-400">Titus Guritno</span>
            </h1>
            <p className="text-lg md:text-xl font-semibold text-emerald-400 mb-6">
              Front End Developer <span className="text-white">|</span> Web
              Designer | IT Network
            </p>
            <p className="text-slate-300 mb-6 max-w-lg">
              I'm an experienced Front-End Developer specialising in UI/UX
              design and responsive web application development. I transform
              complex ideas into intuitive and engaging interfaces, focusing on
              optimal user experience. I also have a strong understanding of
              network management and support web applications with reliable,
              secure and efficient infrastructure.
            </p>

            {/* Tombol ke Google Drive */}
            <a
              href="https://drive.google.com/file/d/1Q16jGP8nHUrSCN5Xdm-UDzij7SJJ3w86/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors mb-6"
            >
              Get CV
            </a>

            {/* Media Sosial */}
            <div className="flex items-center gap-4 text-slate-300">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="guritnotitus@gmail.com"
                className="hover:text-red-400 transition-colors"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://github.com/titusguritno"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/titus-guritno-03201228b"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Kanan: Gambar */}
          <div className="flex-1 relative">
            <div className="w-72 h-72 mx-auto relative z-10 rounded-xl overflow-hidden border-8 border-gradient-to-r from-emerald-400 to-teal-500 shadow-lg shadow-teal-300/50 transform hover:scale-105 transition-all duration-300">
              <Image
                src="/images/profil.jpg"
                alt="Profile"
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
