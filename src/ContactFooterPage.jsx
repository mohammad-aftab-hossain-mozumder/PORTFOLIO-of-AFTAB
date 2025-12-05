import { motion } from "framer-motion";
import { useEffect } from "react";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import gsap from "gsap";
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";


export default function ContactFooterPage({id}) {
  useEffect(() => {
    // TEXT ENTRY ANIMATION
    gsap.fromTo(
      ".animated-text",
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0, duration: 1.2, ease: "power3.out", stagger: 0.25 }
    );

    // CONTACT BOX POP ANIMATION
    gsap.fromTo(
      ".contact-box",
      { scale: 0.7, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "elastic.out(1,0.4)" }
    );

    // FLOATING EMOJIS
    gsap.to(".big-emoji", {
      y: -20,
      duration: 1.8,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: 0.2,
    });

    gsap.to(".footer-emoji", {
      y: -12,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: 0.25,
    });

    // FOOTER FLOAT WAVE
    gsap.to(".footer-box", {
      y: -10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // FOOTER GLOW PULSE
    gsap.to(".footer-box", {
      boxShadow: "0 0 25px rgba(0,255,255,0.4)",
      duration: 2,
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div
    id={id}
      className="
      w-full mt-28  text-white flex flex-col
      items-center justify-center
    "

    >
      {/* BACKGROUND GLOW EFFECTS */}
      <div
        className="absolute inset-0 opacity-40 animate-pulse"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, #00C8FF33, transparent 60%), radial-gradient(circle at 90% 80%, #FF3CAC33, transparent 60%)",
        }}
      ></div>

      {/* CONTACT SECTION */}
      <motion.div
        className="
        contact-box bg-white/10 backdrop-blur-xl rounded-2xl
        shadow-2xl p-10 w-full max-w-3xl border border-white/20
      "
      >
        <h1 className="animated-text text-4xl font-extrabold text-center mb-6 tracking-wide drop-shadow-xl bg-gradient-to-r from-cyan-300 to-pink-400 bg-clip-text text-transparent">
          🌟 Contact Me 🌟
        </h1>

        <div className="grid gap-6 text-lg">
          <div className="animated-text flex items-center gap-4 p-4 bg-white/10 rounded-xl border border-white/20">
            <FaEnvelope size={30} />
            <span className="font-semibold">aftab.112233.mz@gmail.com</span>
          </div>

          <div className="animated-text flex items-center gap-4 p-4 bg-white/10 rounded-xl border border-white/20">
            <FaPhone size={30} />
            <span className="font-semibold">+880 1301227199</span>
          </div>

          <div className="animated-text flex items-center gap-4 p-4 bg-white/10 rounded-xl border border-white/20">
            <FaWhatsapp size={30} />
            <span className="font-semibold">+880 1301227199</span>
          </div>
        </div>
      </motion.div>

      {/* FOOTER SECTION */}
      {/* FULL WIDTH FOOTER */}
      <footer className="w-screen mt-25 py-10 grid justify-center items-center  backdrop-blur-xl border-t border-white/20 shadow-inner">

        
        <div className="mt-6 flex items-center justify-center gap-4 text-[#00C8FF]">
          <a
            href="https://github.com/mohammad-aftab-hossain-mozumder"
            target="_blank"
          >
            <FiGithub size={35} />
          </a>
          <a href="https://www.linkedin.com/in/md-aftab-hossain-mazumdar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
            <FaLinkedin size={35} />
          </a>

        </div><br />
        <div className="max-w-5xl mx-auto text-center px-4">
          <p className="animated-text text-xl font-semibold">
            © 2025 MD AFTAB HOSSAIN MOZUMDER
          </p>

        </div>
      </footer>

    </div>
  );
}
