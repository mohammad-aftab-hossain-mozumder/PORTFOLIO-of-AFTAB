// Updated Skills Page with Dark Neon Glow Gradient
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiFirebase,
  SiPostman,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { FiCode } from "react-icons/fi";

export default function Skills({ id }) {
  const iconRefs = useRef([]);

  useEffect(() => {
    const targets = iconRefs.current.filter(Boolean);
    targets.forEach((el, index) => {
      gsap.to(el, {
        y: -12,
        duration: 1.4 + index * 0.08,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => {
      gsap.killTweensOf(targets);
    };
  }, []);

  const skillsData = [
    { category: "Languages", emoji: "📝", icons: [SiJavascript] },
    {
      category: "Frontend",
      emoji: "🎨",
      icons: [SiHtml5, SiCss3, SiTailwindcss, SiReact, SiNextdotjs],
    },
    { category: "Backend", emoji: "⚡", icons: [SiNodedotjs, SiExpress] },
    { category: "Database", emoji: "🗄️", icons: [SiMongodb] },
    { category: "Tools", emoji: "🛠️", icons: [SiGit, SiGithub, SiPostman] },
    { category: "Platforms", emoji: "💻", icons: [SiFirebase, VscCode] },
  ];

  let refIndex = 0;

  return (
    <section
      id={id}
      className="py-16 min-h-screen w-full text-white font-sans antialiased relative overflow-hidden"
      
    >
      {/* Glow Background */}
      <div
        className="absolute inset-0 opacity-40 animate-pulse"
        
      ></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-extrabold mb-12 flex items-center justify-center gap-3 drop-shadow-xl"
        >
          <FiCode className="text-cyan-300 animate-pulse" />
          <span className="bg-gradient-to-r from-cyan-300 to-pink-400 bg-clip-text text-transparent">
            My Skills
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {skillsData.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 + i * 0.15 }}
              viewport={{ once: false }}
              className="p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,0,200,0.5)] transition-all"
            >
              <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-2 drop-shadow-lg bg-gradient-to-r from-cyan-300 to-pink-400 bg-clip-text text-transparent">
                {skill.emoji} {skill.category}
              </h3>

              <div className="flex flex-wrap justify-center gap-6 mt-4">
                {skill.icons.map((IconOrComp, j) => {
                  const idx = refIndex++;
                  return (
                    <motion.div
                      key={j}
                      ref={(el) => {
                        iconRefs.current[idx] = el;
                      }}
                      whileHover={{ scale: 1.5, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="p-4 bg-white/10 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-[0_0_20px_rgba(0,255,255,0.6)]"
                    >
                      <IconOrComp size={40} />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-12 text-cyan-200 text-lg italic drop-shadow-xl"
        >
          “Building modern, interactive, and visually engaging web applications 💻✨”
        </motion.p>
      </div>
    </section>
  );
}
