import Navbar from "../_components/navbar";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Navbar />
      <main className="w-full px-6 py-20 bg-slate-800 text-white min-h-screen">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Kiri: Gambar */}
          <div className="flex-1 relative">
            <div className="w-72 h-72 mx-auto relative z-10 rounded-xl overflow-hidden border-8 border-gradient-to-r from-emerald-400 to-teal-500 shadow-lg shadow-teal-300/50 transform hover:scale-105 transition-all duration-300">
              <Image
                src="/images/bio.jpg"
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
};

export default About;
