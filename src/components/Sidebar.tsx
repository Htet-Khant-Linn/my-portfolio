import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { portfolioData } from "../portfolioData";

const { profile, skills, projects, blogs, interviews } = portfolioData;

const menuItems = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  ...(projects.length > 0 ? [{ name: "Projects", id: "projects" }] : []),
  { name: "Education", id: "education" },
  { name: "Experience", id: "experience" },
  { name: "Volunteer", id: "volunteering" },
  { name: "Awards", id: "awards" },
  ...(skills.certifications.length > 0 ? [{ name: "Certifications", id: "certifications" }] : []),
  { name: "Interests", id: "interests" },
  ...(blogs.length > 0 ? [{ name: "Blogs", id: "blogs" }] : []),
  ...(interviews.length > 0 ? [{ name: "Interviews", id: "interviews" }] : []),
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    let frame: number | undefined;
    const sections = menuItems.map(({ id }) => document.getElementById(id));

    const updateActiveSection = () => {
      frame = undefined;
      let current = menuItems[0].id;

      for (const section of sections) {
        if (section && section.getBoundingClientRect().top <= window.innerHeight * 0.3) {
          current = section.id;
        }
      }

      // Short final sections may never reach the upper part of the viewport.
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        current = menuItems[menuItems.length - 1].id;
      }

      setActiveSection(current);
    };

    const scheduleUpdate = () => {
      if (frame === undefined) frame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frame !== undefined) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <nav aria-label="Portfolio sections" className="lg:fixed lg:w-64 lg:h-screen lg:overflow-y-auto bg-white border-b lg:border-b-0 lg:border-r border-line flex flex-col py-6 lg:py-10 z-50">
      <div className="hidden lg:block mb-8 px-8">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          src={profile.profileImage}
          alt={profile.firstName}
          width={64}
          height={64}
          className="w-16 h-16 rounded-full border border-line ring-4 ring-accent-soft grayscale hover:grayscale-0 transition-all duration-500 object-cover"
        />
        <div className="mt-4">
          <h2 className="text-base font-bold tracking-tight text-heading">{profile.firstName} {profile.lastName}</h2>
          <p className="text-xs font-medium uppercase tracking-widest text-accent mt-2">{profile.title}</p>
        </div>
      </div>

      <ul className="flex flex-wrap lg:flex-col items-center lg:items-start w-full px-4 lg:px-5 gap-1 justify-center lg:justify-start">
        {menuItems.map((item) => (
          <li key={item.id} className="w-auto lg:w-full">
            <a
              href={`#${item.id}`}
              aria-current={activeSection === item.id ? "location" : undefined}
              className="nav-link"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
