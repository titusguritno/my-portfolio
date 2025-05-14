"use client";

import { useState } from "react";
import Navbar from "../_components/navbar";
import ImageModal from "../_components/image-modal";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { projectList } from "../_components/project-list";

const Projects = () => {
  const [modalImage, setModalImage] = useState(null);
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <>
      <Navbar />
      <main className="w-full px-6 py-28 bg-slate-800 text-white min-h-screen">
        <section className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-emerald-400 mb-8 text-center">
            Work Experience
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectList.map((project, index) => (
              <Card
                key={index}
                className="bg-slate-700 text-white rounded-2xl overflow-hidden shadow-md"
              >
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
                  <p className="text-[15px] text-slate-300 leading-relaxed mb-2">
                    {expanded[index] ? project.fullDesc : project.shortDesc}
                  </p>
                  <button
                    className="text-sm text-emerald-400 hover:underline"
                    onClick={() => toggleExpand(index)}
                  >
                    {expanded[index] ? "See less" : "See more"}
                  </button>

                  <div className="flex flex-wrap gap-2 mt-4 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`text-xs px-3 py-1 rounded-full font-medium tracking-wide ${project.tagColors[i]}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-4">
                    {project.webLink && (
                      <Link href={project.webLink} target="_blank">
                        <Button className="bg-emerald-500 hover:bg-emerald-600 text-white transition-colors">
                          View Web
                        </Button>
                      </Link>
                    )}
                    {project.githubLink && (
                      <Link href={project.githubLink} target="_blank">
                        <Button className="bg-emerald-500 hover:bg-emerald-600 text-white transition-colors">
                          View Github
                        </Button>
                      </Link>
                    )}
                    {project.youtubeLink && (
                      <Link href={project.youtubeLink} target="_blank">
                        <Button className="bg-emerald-500 hover:bg-emerald-600 text-white transition-colors">
                          Video
                        </Button>
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <ImageModal imageUrl={modalImage} onClose={() => setModalImage(null)} />
    </>
  );
};

export default Projects;
