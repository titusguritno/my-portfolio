"use client";

import { useState } from "react";
import Navbar from "../_components/navbar";
import ImageModal from "../_components/image-modal";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { projectList } from "../_components/project-list";
import { motion } from "framer-motion";

const Projects = () => {
  const [modalImage, setModalImage] = useState(null);
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <>
      <Navbar />
      <main className="w-full px-6 py-28 bg-gradient-to-b from-[#0f3d30] via-[#0f172a] to-[#0e1115] text-white min-h-screen">
        <section className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-emerald-400 mb-8 text-center">
            My Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectList.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="bg-slate-700 text-white rounded-2xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-105 hover:bg-slate-600 hover:shadow-lg">
                  <div
                    className="relative w-full h-48 overflow-hidden group cursor-pointer"
                    onClick={() => setModalImage(project.image)}
                  >
                    <Image
                      src={project.image}
                      alt={`project-${index}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p
                      className="text-[15px] text-slate-300 leading-relaxed mb-2 cursor-pointer"
                      onClick={() => toggleExpand(index)}
                    >
                      {expanded[index] ? project.fullDesc : project.shortDesc}
                    </p>
                    <span
                      className="text-sm text-emerald-400 hover:underline cursor-pointer"
                      onClick={() => toggleExpand(index)}
                    >
                      {expanded[index] ? "See less" : "See more"}
                    </span>

                    <div className="flex flex-wrap gap-2 mt-4 mb-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className={`text-xs px-3 py-1 rounded-full font-medium tracking-wide cursor-pointer select-none transition transform duration-300 ease-in-out ${project.tagColors[i]} hover:scale-110 hover:bg-opacity-90 hover:shadow-lg`}
                          title={tag}
                          aria-label={`Tag: ${tag}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 mt-4">
                      {project.webLink && (
                        <Link href={project.webLink} target="_blank">
                          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white transition-colors duration-300">
                            View Web
                          </Button>
                        </Link>
                      )}
                      {project.githubLink && (
                        <Link href={project.githubLink} target="_blank">
                          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white transition-colors duration-300">
                            View Github
                          </Button>
                        </Link>
                      )}
                      {project.youtubeLink && (
                        <Link href={project.youtubeLink} target="_blank">
                          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white transition-colors duration-300">
                            Video
                          </Button>
                        </Link>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <ImageModal imageUrl={modalImage} onClose={() => setModalImage(null)} />
    </>
  );
};

export default Projects;
