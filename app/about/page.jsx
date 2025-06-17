"use client";

import Navbar from "../_components/navbar";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <Navbar />
      <main className="w-full px-6 py-28 pb-32 bg-gradient-to-b from-[#0f3d30] via-[#0f172a] to-[#0e1115] text-white min-h-screen flex justify-center overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          <motion.div
            className="flex-1 text-left space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-emerald-400">About Me</h2>
            <div className="space-y-10 text-slate-300 leading-relaxed">
              {/* Introduction */}
              <div className="space-y-4">
                <p>
                  👋 Hi, I’m <strong>Titus Guritno</strong> — an Informatics
                  graduate 🎓 passionate about crafting interactive and
                  beautiful digital experiences 💻✨.
                </p>
                <p>
                  As a <strong>Front-End Developer</strong>, I bring designs to
                  life using
                  <span className="font-medium"> HTML, CSS, JavaScript</span>,
                  and
                  <span className="font-medium"> Tailwind CSS</span>, blending
                  clean code with thoughtful
                  <span className="font-medium"> UI/UX design</span> 🎨. I enjoy
                  building websites that are responsive, accessible, and
                  user-friendly across all devices 📱💻.
                </p>
                <p>
                  I’m a fast learner 🚀, naturally curious, and always excited
                  to dive deeper into both software and hardware 🧠🔧. For me,
                  great design isn’t just how it looks — it’s about how it{" "}
                  <em>feels</em> and <em>functions</em>. That’s what drives me
                  to create smooth, intuitive, and high-performing interfaces
                  🔍🛠️.
                </p>
                <p>Let’s build something amazing together! 🌟</p>
              </div>

              {/* Education */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">
                  🎓 Education
                </h3>
                <p>
                  <strong>Sanata Dharma University</strong> (2020 – 2024)
                </p>
                <p>Bachelor's Degree in Informatics</p>
                <p>📈 GPA: 3.30</p>
              </div>

              {/* Skills */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">🛠️ Skills</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <strong>Programming Languages:</strong> Java, JavaScript,
                    PHP, HTML, CSS
                  </li>
                  <li>
                    <strong>Databases:</strong> PostgreSQL, MySQL
                  </li>
                  <li>
                    <strong>Tools & Frameworks:</strong> Next.js, Socket.IO,
                    Prisma, OneSimulator, GitHub, Wireshark
                  </li>
                  <li>
                    <strong>UI Design:</strong> Figma, Canva, Framer, Tailwind
                    CSS, Shadcn UI
                  </li>
                  <li>
                    <strong>Networking:</strong> Network configuration,
                    architecture, cryptography, LAN, troubleshooting, Microsoft
                    Office, computer hardware
                  </li>
                  <li>
                    <strong>Soft Skills:</strong> Adaptable, innovative,
                    communicative, multitasker, critical thinker, results-driven
                  </li>
                </ul>
              </div>
            </div>

            {/* Gallery Section */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-emerald-400 text-center">
                My Gallery
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                {[...Array(9)].map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="w-full bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-600">
                      <div className="relative w-full h-48 overflow-hidden group cursor-pointer">
                        <Image
                          src={`/images/galery/gal${index + 1}.jpg`}
                          alt={`Project ${index + 1}`}
                          layout="fill"
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default About;
