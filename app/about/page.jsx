import Navbar from "../_components/navbar";
import Image from "next/image";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <>
      <Navbar />
      <main className="w-full px-6 py-28 bg-slate-800 text-white min-h-screen">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
          {/* Biografi dan Galeri */}
          <div className="flex-1 text-left space-y-4">
            <h2 className="text-4xl font-bold text-emerald-400">About Me</h2>
            <p className="text-slate-300">
              Hello, I’m Titus Guritno, a recent Informatics graduate with a
              strong passion for technology development. I quickly adapt to new
              tools and environments and am motivated to deepen my skills in
              programming, hardware, and software. As a Front-End Developer, I
              focus on creating responsive websites that are visually appealing
              and function seamlessly across devices. I combine expertise in
              UI/UX design and web development with modern technologies like
              HTML, CSS, JavaScript, and Tailwind to craft intuitive user
              experiences. Additionally, I understand the infrastructure that
              supports the applications I build. I believe that good design and
              solid technical performance should go hand in hand. This drives me
              to create clean, functional, and user-friendly interfaces.
            </p>

            <div className="text-slate-300">
              <span className="font-semibold text-white">Education:</span>
              <p>Sanata Dharma University 2020 - 2024</p>
              <p>Bachelor's Degree in Informatics</p>
              <p>GPA: 3.30</p>
            </div>

            <div className="text-slate-300">
              <span className="font-semibold text-white">Skills:</span>
              <ul className="list-disc pl-6">
                <li>Programming Languages: Java, JavaScript, PHP, HTML, CSS</li>
                <li>Databases: PostgreSQL, MySQL</li>
                <li>
                  Tools & Frameworks: Next.js, Socket.IO, OneSimulator, Prisma,
                  GitHub, Wireshark
                </li>
                <li>
                  UI Design: Figma, Canva, Framer, Tailwind CSS, Shadcn UI
                </li>
                <li>
                  Networking: Network configuration, architecture, cryptography,
                  Microsoft Office, LAN, troubleshooting, computer hardware
                </li>
                <li>
                  Soft Skills: Adaptable, innovative, communicative,
                  multitasker, critical thinker, and results-driven
                </li>
              </ul>
            </div>

            {/* Galeri dengan card */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-emerald-400 text-center">
                My Gallery
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                {/* Gallery Cards */}
                {[...Array(9)].map((_, index) => (
                  <Card
                    key={index}
                    className="w-full bg-gray-700 rounded-lg overflow-hidden shadow-lg"
                  >
                    <div className="relative w-full h-48">
                      <Image
                        src={`/images/galery/gal${index + 1}.jpg`}
                        alt={`Project ${index + 1}`}
                        layout="fill"
                        className="object-cover w-full h-full rounded-t-lg"
                      />
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
