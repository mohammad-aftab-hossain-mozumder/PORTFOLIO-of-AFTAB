// Projects Section - Dark Neon Glow Gradient Adjusted
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { X } from "lucide-react";

export default function ProjectsSection({id}) {
    const [activeProject, setActiveProject] = useState(null);
    const floatingRefs = useRef([]);
    useEffect(() => {
        floatingRefs.current.forEach((el, i) => {
            if (el) {
                // FLOAT + SWING + ROTATE Animations
                const tl = gsap.timeline({
                    repeat: -1,
                    yoyo: true,
                });

                tl.to(el, {
                    y: -15,
                    rotation: 2,
                    duration: 2 + i * 0.2,
                    ease: "sine.inOut",
                })
                    .to(el, {
                        y: 10,
                        rotation: -2,
                        duration: 2 + i * 0.2,
                        ease: "sine.inOut",
                    });

                // 3D continuous slow rotation
                gsap.to(el, {
                    rotateY: 8,
                    rotateX: 3,
                    duration: 6 + i,
                    repeat: -1,
                    yoyo: true,
                    ease: "power1.inOut",
                });

                // Hover — stop animation
                el.addEventListener("mouseenter", () => {
                    gsap.to(el, { rotateY: 0, rotateX: 0, rotation: 0, duration: 0.3 });
                    tl.pause();
                });

                // Leave — resume animation
                el.addEventListener("mouseleave", () => {
                    tl.resume();
                });
            }
        });
    }, []);


    useEffect(() => {
        floatingRefs.current.forEach((el, i) => {
            if (el) {
                gsap.to(el, {
                    y: -12,
                    duration: 1.8 + i * 0.2,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                });
            }
        });
    }, []);

    const projects = [
        {
            id: 1,
            title: "BookCourier – Multi-Role Library Delivery Management System ⭐⭐⭐",
            tech: ["React","MongoDB", "Firebase", "Stripe", "Tailwind"],
            image: "https://i.ibb.co.com/DgQbQZKh/image.png",
            emoji: "⚡",
            live: "https://assignment-11-bc60e.web.app/",
            client:"https://github.com/mohammad-aftab-hossain-mozumder/BOOK-COURIER-ASSIGNMENT-11.git",
            server:"https://github.com/mohammad-aftab-hossain-mozumder/ASSIGNMENT-11-BOOK-COURIER-SERVER.git",
            desc: `A production-ready MERN stack library-to-home book delivery system featuring a multi-role user architecture (User, Librarian, Admin), role-based dashboards, Stripe-powered secure payments, Firebase authentication, JWT-protected APIs, and a modern responsive UI.`,
            features: [
                "Multi-Role Library Delivery Platform, role-based dashboard (User, Librarian, Admin), protected routes📱",
                "Firebase JWT authentication 🔐",
                "Recharts-based rating charts 📊",
                " Stripe Payment Integration, secure server-side payment intent 💳",
                "Search + Sort + Filter 🔎",
                "Advanced CRUD operations ⚡",
                "Eye-catching UI, toast, sweetAlert2 , swiper etc ⭐ ",
            ],
        },
        {
            id: 2,
            tech: ["React", "Firebase", "Tailwind", "Express", "MongoDB"],
            title: "ARTIFY – A Creative Artwork Showcase Platform 🎨✨",
            image:
                "https://i.ibb.co.com/qFDjtDVh/BEC4245-A-0-CA3-4240-9-A3-F-7-F3-C436-C1-F6-C.png",
            emoji: "🎭",
            live: "https://dreamy-gelato-08b03c.netlify.app/",
            client:
                "https://github.com/mohammad-aftab-hossain-mozumder/ASSIGNMENT-10",
            server:
                "https://github.com/mohammad-aftab-hossain-mozumder/ASSIGNMENT-10-SERVER",
            desc: `Artify is a modern artwork sharing platform with CRUD operations, Firebase Auth, MongoDB, and smooth UI animations. Artists can upload, explore, filter, and manage artworks with full details. Includes Google Auth, Favorites, Search, Filters, Sorting, and a beautiful modern UI.`,
            features: [
                "Upload • Update • Delete artworks 🖼️",
                "Google + Email Auth 🔐",
                "Favorites System ❤️",
                "Search + Filter + Sort 🔎",
                "Featured Artworks • Top Artists ⭐",
                "Theme Toggle + SweetAlert + Toastify ⚙️",
            ],
        },
        {
            id: 3,
            tech: ["React", "Node.js", "MongoDB", "Tailwind"],
            title: "SkillSwap – Local Skill Exchange Platform 🤝🔥",
            image: "https://i.ibb.co.com/9mC8j7Nc/image.png",
            emoji: "🧠",
            live: "https://tubular-bonbon-3202ad.netlify.app/",
            client:
                "https://github.com/mohammad-aftab-hossain-mozumder/ASSIGNMENT-9.git",
            desc: `SkillSwap connects learners with skill providers. Includes Firebase Auth, Protected Routes, Booking Form, Searchable Skill List, Profile Update, and clean modern UI with Swiper + AOS animations.`,
            features: [
                "Skill Listings (image, price, rating) 📚",
                "Full Firebase Authentication 🔐",
                "Protected Routes ⚠️",
                "Booking Form + Toast Notifications 📩",
                "Profile Update 👤",
                "Hero Slider + Popular Skills + Top Rated ⭐",
            ],
        }
    ];

    return (
        <section
        id={id}
            className="py-20 my-30 text-white relative overflow-hidden"
            
        >
            <div
                className="absolute inset-0 opacity-40 animate-pulse"
                
            ></div>

            <motion.h2
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl font-extrabold text-center mb-16 drop-shadow-lg relative z-10 bg-gradient-to-r from-cyan-300 to-pink-400 bg-clip-text text-transparent"
            >
                ✨ My Creative Projects ✨
            </motion.h2> 

            <div className="max-w-6xl mb-20 mx-auto grid md:grid-cols-3 gap-10 px-6 relative z-10">
                {projects.map((p, i) => (
                    <motion.div
                        style={{ transformStyle: "preserve-3d", perspective: 100000 }}
                        key={p.id}
                        ref={(el) => (floatingRefs.current[i] = el)}
                        whileHover={{ scale: 1.08, rotate: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 shadow-[0_0_25px_rgba(0,255,255,0.3)] border border-white/20 cursor-pointer hover:bg-white/20 hover:shadow-[0_0_35px_rgba(255,0,200,0.6)] transition-all"
                        onClick={() => setActiveProject(p)}
                    >
                        <div className="relative w-full h-40 overflow-hidden rounded-xl">
                            <img src={p.image} className="w-full h-full object-cover" />
                            <span className="absolute top-2 right-2 text-4xl drop-shadow-xl">
                                {p.emoji}
                            </span>
                        </div>

                        <h3 className="text-2xl font-bold mt-4 leading-tight bg-gradient-to-r from-cyan-300 to-pink-400 bg-clip-text text-transparent">
                            {p.title}
                        </h3>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {activeProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/70 backdrop-blur-xl flex items-center justify-center z-[999] px-4"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="bg-[#0D0D0D] w-full max-w-4xl p-6 rounded-2xl shadow-2xl border border-white/10 max-h-[85vh] overflow-y-auto relative"
                        >
                            <button
                                onClick={() => setActiveProject(null)}
                                className="absolute text-red-800 top-4 right-4 p-2 bg-red-400 hover:bg-red-500 rounded-full"
                            >
                                <X size={22} />
                            </button>

                            <img
                                src={activeProject.image}
                                className="w-full h-72 object-cover rounded-xl mb-6"
                            />

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-300 to-pink-400 bg-clip-text text-transparent">
                                        {activeProject.title}
                                    </h3>
                                    <p className="opacity-80 mb-4">{activeProject.desc}</p>

                                    <h4 className="font-semibold mb-1 text-cyan-300">✨ Features:</h4>
                                    <ul className="list-disc ml-5 opacity-80">
                                        {activeProject.features.map((f, i) => (
                                            <li key={i}>{f}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold mb-1 text-pink-300">🛠 Tech Stack:</h4>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {activeProject.tech.map((t, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <h4 className="font-semibold mb-1 text-cyan-300">🔗 Links:</h4>
                                    <div className="flex flex-col gap-2">
                                        <a
                                            href={activeProject.live}
                                            target="_blank"
                                            className="text-blue-400 underline"
                                        >
                                            Live Website
                                        </a>
                                        <a
                                            href={activeProject.client}
                                            target="_blank"
                                            className="text-blue-400 underline"
                                        >
                                            Client Repo
                                        </a>
                                        {activeProject.server && (
                                            <a
                                                href={activeProject.server}
                                                target="_blank"
                                                className="text-blue-400 underline">
                                                Server Repo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}