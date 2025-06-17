"use client";

import Image from "next/image";
import Navbar from "../_components/navbar";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full px-6 py-28 pb-32 bg-gradient-to-b from-[#0f3d30] via-[#0f172a] to-[#0e1115] text-white min-h-screen flex justify-center overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Left Side: Text with Animation */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
              Hi, I'm <span className="text-emerald-400">Titus Guritno</span>
            </h1>
            <p className="text-lg md:text-2xl font-semibold text-emerald-400 mb-6">
              Front-End Developer <span className="text-white">|</span> Web
              Designer | IT Network Specialist
            </p>

            {/* CV Button */}
            <motion.a
              href="https://drive.google.com/file/d/1Q16jGP8nHUrSCN5Xdm-UDzij7SJJ3w86/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors mb-8 transform hover:scale-105"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Get CV
            </motion.a>

            {/* Social Media Links */}
            <div className="flex justify-center md:justify-start items-center gap-6 text-slate-300">
              <p className="text-lg">Follow me:</p>
              <motion.a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <FaInstagram size={28} />
              </motion.a>
              <motion.a
                href="mailto:guritnotitus@gmail.com"
                className="hover:text-red-400 transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <Mail size={28} />
              </motion.a>
              <motion.a
                href="https://github.com/titusguritno"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <FaGithub size={28} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/titus-guritno-03201228b"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <FaLinkedin size={28} />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Side: Profile Image with Animation */}
          <motion.div
            className="flex-1 w-full max-w-xs mx-auto relative group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="w-[320px] h-[320px] p-[3px] bg-gradient-to-br from-emerald-400 via-cyan-400 to-teal-500 rounded-xl shadow-2xl transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-slate-900 rounded-lg overflow-hidden relative">
                <Image
                  src="/images/bio.jpg"
                  alt="Profile"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-emerald-500/10 to-transparent animate-pulse" />
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
