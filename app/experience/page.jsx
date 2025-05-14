"use client";

import { useState } from "react";
import Navbar from "../_components/navbar";
import ImageModal from "../_components/image-modal";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Experience = () => {
  const [modalImage, setModalImage] = useState(null);

  return (
    <>
      <Navbar />
      <main className="w-full px-6 py-28 bg-slate-800 text-white min-h-screen">
        {/* Organizational Experience */}
        <section className="max-w-6xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-emerald-400 mb-8">
            Organizational Experience
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-slate-700 text-white">
              <div
                className="relative w-full h-48 overflow-hidden group cursor-pointer"
                onClick={() => setModalImage("/images/experience/badmin.jpeg")}
              >
                <Image
                  src="/images/experience/badmin.jpeg"
                  alt="Organization 1"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle>Head of UKF Badminton</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-300">
                  I was responsible for leading the student badminton club,
                  organising events and training sessions, and creating the
                  training budget.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 text-white">
              <div
                className="relative w-full h-48 overflow-hidden group cursor-pointer"
                onClick={() => setModalImage("/images/experience/HMIF.jpg")}
              >
                <Image
                  src="/images/experience/hmif.jpg"
                  alt="Organization 2"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle>Head of Cadre Department</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-300">
                  The regeneration department should be led and coordinated by
                  you, with you designing cadre activities, member training and
                  recruitment.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-700 text-white">
              <div
                className="relative w-full h-48 overflow-hidden group cursor-pointer"
                onClick={() => setModalImage("/images/experience/IT Days.jpg")}
              >
                <Image
                  src="/images/experience/IT Days.jpg"
                  alt="Organization 3"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle>Head of IT Days</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-300">
                  Take the lead on the event, form and coordinate the committee,
                  prepare the proposal and organise the event to ensure it runs
                  smoothly.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Work Experience */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-emerald-400 mb-8">
            Work Experience
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-700 text-white rounded-2xl overflow-hidden shadow-md">
              <div
                className="relative w-full h-48 overflow-hidden group cursor-pointer"
                onClick={() => setModalImage("/images/experience/Magang.jpg")}
              >
                <Image
                  src="/images/experience/Magang.jpg"
                  alt="work-1"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">
                  Web Developer | Kalurahan Pringombo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 text-sm text-slate-300">
                  <li>
                    Developed an administrative letter management website using
                    the Next.js framework.
                  </li>
                  <li>Analyzed data and managed citizen database systems.</li>
                  <li>
                    Simulated and trained office staff on the website interface.
                  </li>
                </ul>
                <Link
                  href="https://kalurahan-pringombo.vercel.app/"
                  target="_blank"
                >
                  <Button className="mt-4 bg-emerald-500 hover:bg-emerald-600 text-white transition-colors">
                    View Web
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 text-white rounded-2xl overflow-hidden shadow-md">
              <div
                className="relative w-full h-48 overflow-hidden group cursor-pointer"
                onClick={() =>
                  setModalImage("/images/experience/Asistensi.jpg")
                }
              >
                <Image
                  src="/images/experience/Asistensi.jpg"
                  alt="work-2"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Asistant Lecture</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 text-sm text-slate-300">
                  <li>
                    Supported lecturers in delivering course material on
                    physical networking and network operation simulations.
                  </li>
                  <li>
                    Assisted students with hands-on internet networking
                    practices.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Modal */}
      <ImageModal imageUrl={modalImage} onClose={() => setModalImage(null)} />
    </>
  );
};

export default Experience;
