/* src/App.jsx */
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiDownload,
  FiCode,
  FiZap,
  FiSmartphone,
  FiUser,
} from "react-icons/fi";

import Skills from "./Skills";
import ProjectsSection from "./ProjectsSection";
import ContactFooterPage from "./ContactFooterPage";
import pdf from "./assets/aftabmainresume.pdf"

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const resumeUrl = "https://drive.google.com/file/d/1uEi7qlzy6-Khld1xTW0rzOoANC6RGfVz/view?usp=sharing";
  const avatarRemote = "https://avatars.githubusercontent.com/u/220020666?v=4";

  const titleRef = useRef(null);
  const iconsRef = useRef([]);
  const wordsRef = useRef([]);

  // Title + Icons + Passage Animation
  useEffect(() => {
    gsap.to(titleRef.current, {
      scale: 1.05,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });

    iconsRef.current.forEach((icon, i) => {
      gsap.to(icon, {
        y: -10,
        duration: 1.8 + i * 0.3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    wordsRef.current.forEach((word, i) => {
      gsap.to(word, {
        y: -8,
        duration: 0.8 + i * 0.1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, []);

  const passage = [
    "I",
    "love",
    "building",
    "fast,",
    "modern,",
    "and",
    "interactive",
    "web",
    "applications",
    "✨",
    "that",
    "engage",
    "users",
    "and",
    "solve",
    "real-world",
    "problems",
    "🚀",
  ];

  // Scroll Animations
  useEffect(() => {
    gsap.utils.toArray(".reveal").forEach((el) =>
      gsap.from(el, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      })
    );

    let lastY = window.scrollY;
    const nav = document.querySelector("nav");
    const onScroll = () => {
      const current = window.scrollY;
      if (current > lastY && current > 120) {
        nav?.classList.add("!-translate-y-24", "transition-transform", "duration-300");
      } else {
        nav?.classList.remove("!-translate-y-24");
      }
      lastY = current;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="min-h-screen text-white font-sans antialiased relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0A0F1F, #0F162A, #111827)",
      }}
    >
      {/* Neon glow overlays */}
      <div
        className="absolute inset-0 opacity-40 animate-pulse"

      ></div>

      {/* NAVBAR */}
      <nav className="fixed w-full bg-white/10 backdrop-blur-xl z-40 shadow-md border-b border-white/20">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4">
          <div className="flex items-center gap-3">
            <img
              src={avatarRemote}
              alt="Aftab"
              className="w-10 h-10 rounded-full border object-cover"
            />
            <div>
              <div className="text-sm font-bold">MD AFTAB HOSSAIN MOZUMDER</div>
              <div className="text-xs text-gray-400">
                MERN Stack Developer
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-[#00C8FF] transition">
              About
            </a>
            <a href="#skills" className="hover:text-[#00C8FF] transition">
              Skills
            </a>
            <a href="#projectsSection" className="hover:text-[#00C8FF] transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-[#00C8FF] transition">
              Contact
            </a>

            <a
              onClick={() => {
                const link = document.createElement("a");
                link.href = pdf;
                link.setAttribute("download", "AFTAB_HOSSAIN_RESUME.pdf");
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="inline-flex items-center gap-2 bg-[#00C8FF] text-black px-3 py-2 rounded-lg shadow hover:bg-[#39FF14] transition"
            >
              <FiDownload /> Resume
            </a>
          </div>

          <div className="md:hidden text-gray-300">{/* mobile menu */}</div>
        </div>
      </nav>

      {/* HERO */}
      <header className="pt-28 mb-10 md:pt-32 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
            >
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
                👋 Hi, I’m{" "}
                <span
                  className="bg-gradient-to-r from-[#00C8FF] via-[#7F00FF] to-[#FF3CAC] 
                text-transparent bg-clip-text"
                >
                  AFTAB HOSSAIN
                </span>
                <br /> a MERN Stack Developer 🚀
              </h1>

              <p className="mt-4 text-gray-400 text-lg">
                I build interactive, high-performance web apps using{" "}
                <strong className="text-[#00C8FF]">React</strong>, clean UI/UX
                and modern animations.
              </p>

              <div className="mt-6 flex gap-3">
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#00C8FF] text-black px-4 py-2 rounded-lg shadow hover:bg-[#39FF14] transition"
                >
                  <FiDownload /> View / Download Resume
                </a>

                <a
                  href="#projectsSection"
                  className="inline-flex items-center gap-2 border border-gray-600 px-4 py-2 rounded-lg hover:bg-gray-800 transition"
                >
                  View Projects ⭐
                </a>
              </div>


            </motion.div>

            {/* RIGHT Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <motion.div
                className="relative w-64 h-64 rounded-full flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <motion.div
                  className="absolute w-full h-full rounded-full p-1"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  style={{
                    background:
                      "conic-gradient(#00C8FF, #7F00FF, #FF3CAC, #00C8FF)",
                  }}
                >
                  <div className="w-full h-full rounded-full bg-[#0F162A]"></div>
                </motion.div>

                <div className="w-56 h-56 rounded-full overflow-hidden relative z-10 shadow-2xl border-4 border-[#00C8FF]">
                  <img
                    src={avatarRemote}
                    alt="Aftab"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* ABOUT */}

      <div id="about" className="">
        <section className="max-w-4xl p-20 mx-auto my-30 py-16 px-6 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl mb-8 font-extrabold flex items-center justify-center gap-3 drop-shadow-xl"
          >
            <FiUser className="text-[#00C8FF]" />
            <span className="bg-gradient-to-r from-cyan-300 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>

          {/* <motion.h2
          ref={titleRef}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-center drop-shadow-lg relative z-10 bg-gradient-to-r from-cyan-300 to-pink-400 bg-clip-text text-transparent"
        >
          <span> About Me</span>
        </motion.h2> */}

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg mb-10 leading-relaxed text-gray-300 max-w-2xl mx-auto"
          >
            I'm <span className="text-[#00C8FF] font-semibold">Aftab Hossain</span>, a passionate{" "}
            <strong className="text-[#FF3CAC]">MERN Stack Web Developer</strong> from Bangladesh.
          </motion.p>

          <p className="text-lg text-gray-300 flex flex-wrap justify-center gap-2 mt-8">
            {passage.map((word, i) => (
              <motion.span
                key={i}
                ref={(el) => (wordsRef.current[i] = el)}
                whileHover={{ scale: 1.3, color: "#00C8FF" }}
                transition={{ type: "spring", stiffness: 200 }}
                className="inline-block font-medium cursor-default"
              >
                {word}
              </motion.span>
            ))}
          </p>

          <div className="flex items-center justify-center gap-12 mt-14">
            {[FiCode, FiZap, FiSmartphone].map((Icon, i) => (
              <motion.div
                key={i}
                ref={(el) => (iconsRef.current[i] = el)}
                whileHover={{ scale: 1.25, rotate: 6 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="text-4xl p-5 rounded-2xl cursor-pointer bg-[#111827] text-[#00C8FF] shadow-lg hover:shadow-neon"
                style={{
                  boxShadow: "0 0 20px #00C8FF55",
                }}
              >
                <Icon />
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* SECTIONS */}
      <Skills id="skills" />
      <ProjectsSection id="projectsSection" />
      <ContactFooterPage id="contact" />
    </div>
  );
}
