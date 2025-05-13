import Navbar from "../_components/navbar";
import Image from "next/image";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <>
      <Navbar />
      <main className="w-full px-6 py-20 bg-slate-800 text-white min-h-screen">
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

            <p className="text-slate-300">
              <span className="font-semibold text-white">Education : </span>{" "}
              <p>Sanata Dharma University 2020 - 2024</p>
              <p>Bachelor's Degree of Informatics</p>
              <p>GPA: 3.30 </p>
            </p>
            <p className="text-slate-300">
              <span className="font-semibold text-white">Skills : </span>
              <p>• Programming Languages: Java, JavaScript, PHP, HTML, CSS.</p>•
              Databases: PostgreSQL, MySQL • Tools & Frameworks: Next.js,
              Socket.IO, OneSimulator, Prisma, GitHub, Wireshark
              <p>• UI Design: Figma, Canva, Framer, Tailwind CSS, Shadcn UI</p>•
              Networking: Network configuration, architecture, cryptography,
              Microsoft Office, LAN, troubleshooting, computer hardware{" "}
              <p>
                • Soft Skills: Adaptable, innovative, communicative,
                multitasker, critical thinker, and results-driven
              </p>
            </p>

            {/* Galeri dengan card */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-emerald-400 text-center">
                My Galery
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                {/* Card 1 */}
                <Card className="w-full bg-gray-700 rounded-lg overflow-hidden shadow-lg flex justify-center">
                  <div className="relative w-full h-48">
                    <Image
                      src="/images/galery/gal1.jpg"
                      alt="Project 1"
                      layout="fill"
                      className="object-cover w-full h-full rounded-t-lg"
                    />
                  </div>
                </Card>

                {/* Card 2 */}
                <Card className="w-full bg-gray-700 rounded-lg overflow-hidden shadow-lg">
                  <div className="relative w-full h-48">
                    <Image
                      src="/images/galery/gal2.jpg"
                      alt="Project 2"
                      layout="fill"
                      className="object-cover w-full h-full rounded-t-lg"
                    />
                  </div>
                </Card>

                {/* Card 3 */}
                <Card className="w-full bg-gray-700 rounded-lg overflow-hidden shadow-lg">
                  <div className="relative w-full h-48">
                    <Image
                      src="/images/galery/gal3.jpg"
                      alt="Project 3"
                      layout="fill"
                      className="object-cover w-full h-full rounded-t-lg"
                    />
                  </div>
                </Card>

                {/* Card 4 */}
                <Card className="w-full bg-gray-700 rounded-lg overflow-hidden shadow-lg">
                  <div className="relative w-full h-48">
                    <Image
                      src="/images/galery/gal4.jpg"
                      alt="Project 4"
                      layout="fill"
                      className="object-cover w-full h-full rounded-t-lg"
                    />
                  </div>
                </Card>

                {/* Card 5 */}
                <Card className="w-full bg-gray-700 rounded-lg overflow-hidden shadow-lg">
                  <div className="relative w-full h-48">
                    <Image
                      src="/images/galery/gal5.jpg"
                      alt="Project 5"
                      layout="fill"
                      className="object-cover w-full h-full rounded-t-lg"
                    />
                  </div>
                </Card>

                {/* Card 6 */}
                <Card className="w-full bg-gray-700 rounded-lg overflow-hidden shadow-lg flex justify-center">
                  <div className="relative w-full h-48">
                    <Image
                      src="/images/galery/gal6.jpg"
                      alt="Project 6"
                      layout="fill"
                      className="object-cover w-full h-full rounded-t-lg"
                    />
                  </div>
                </Card>

                {/* Card 7 */}
                <Card className="w-full bg-gray-700 rounded-lg overflow-hidden shadow-lg">
                  <div className="relative w-full h-48">
                    <Image
                      src="/images/galery/gal7.jpg"
                      alt="Project 6"
                      layout="fill"
                      className="object-cover w-full h-full rounded-t-lg"
                    />
                  </div>
                </Card>

                {/* Card 8 */}
                <Card className="w-full bg-gray-700 rounded-lg overflow-hidden shadow-lg">
                  <div className="relative w-full h-48">
                    <Image
                      src="/images/galery/gal8.jpg"
                      alt="Project 6"
                      layout="fill"
                      className="object-cover w-full h-full rounded-t-lg"
                    />
                  </div>
                </Card>

                {/* Card 9 */}
                <Card className="w-full bg-gray-700 rounded-lg overflow-hidden shadow-lg">
                  <div className="relative w-full h-48">
                    <Image
                      src="/images/galery/gal9.jpg"
                      alt="Project 6"
                      layout="fill"
                      className="object-cover w-full h-full rounded-t-lg"
                    />
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
