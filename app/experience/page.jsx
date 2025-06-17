"use client";

import { useState } from "react";
import Navbar from "../_components/navbar";
import ImageModal from "../_components/image-modal";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const Experience = () => {
  const [modalImage, setModalImage] = useState(null);

  return (
    <>
      <Navbar />
      <main className="w-full px-6 py-28 pb-32 bg-gradient-to-b from-[#0f3d30] via-[#0f172a] to-[#0e1115] text-white min-h-screen">
        <div className="max-w-6xl mx-auto flex flex-col gap-20">
          {/* Organizational Experience */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-emerald-400 mb-8">
              Organizational Experience
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Head of UKF Badminton",
                  image: "/images/experience/badmin.jpeg",
                  description:
                    "I was responsible for leading the student badminton club, organising events and training sessions, and creating the training budget.",
                },
                {
                  title: "Head of Cadre Department",
                  image: "/images/experience/hmif.jpg",
                  description:
                    "The regeneration department should be led and coordinated by you, with you designing cadre activities, member training and recruitment.",
                },
                {
                  title: "Head of IT Days",
                  image: "/images/experience/IT Days.jpg",
                  description:
                    "Take the lead on the event, form and coordinate the committee, prepare the proposal and organise the event to ensure it runs smoothly.",
                },
              ].map((exp, index) => (
                <motion.div
                  key={index}
                  className="h-full"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-slate-700 text-white flex flex-col transition-transform duration-300 hover:scale-105 hover:bg-slate-600 hover:shadow-lg">
                    <div
                      className="relative w-full h-48 overflow-hidden group cursor-pointer"
                      onClick={() => setModalImage(exp.image)}
                    >
                      <Image
                        src={exp.image}
                        alt={`Organization ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{exp.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-sm text-slate-300">
                        {exp.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Work Experience */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold text-emerald-400 mb-8">
              Work Experience
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Web Developer | Kalurahan Pringombo",
                  image: "/images/experience/Magang.jpg",
                  description: [
                    "Developed an administrative letter management website using the Next.js framework.",
                    "Analyzed data and managed citizen database systems.",
                    "Simulated and trained office staff on the website interface.",
                  ],
                  link: "https://kalurahan-pringombo.vercel.app/",
                },
                {
                  title: "Assistant Lecture",
                  image: "/images/experience/Asistensi.jpg",
                  description: [
                    "Supported lecturers in delivering course material on physical networking and network operation simulations.",
                    "Assisted students with hands-on internet networking practices.",
                  ],
                },
              ].map((work, index) => (
                <motion.div
                  key={index}
                  className="h-full"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-slate-700 text-white flex flex-col rounded-2xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-105 hover:bg-slate-600 hover:shadow-lg">
                    <div
                      className="relative w-full h-48 overflow-hidden group cursor-pointer"
                      onClick={() => setModalImage(work.image)}
                    >
                      <Image
                        src={work.image}
                        alt={`Work ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{work.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="list-disc pl-6 text-sm text-slate-300">
                        {work.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                      {work.link && (
                        <Link href={work.link} target="_blank">
                          <Button className="mt-4 bg-emerald-500 hover:bg-emerald-600 text-white transition-colors">
                            View Web
                          </Button>
                        </Link>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>

      {/* Modal */}
      <ImageModal imageUrl={modalImage} onClose={() => setModalImage(null)} />
    </>
  );
};

export default Experience;
