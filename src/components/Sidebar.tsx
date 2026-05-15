import { motion } from "motion/react";
import * as LucideIcons from "lucide-react";
import { portfolioData } from "../portfolioData";

export default function Sidebar() {
  const { profile, projects, blogs, interviews } = portfolioData;

  const menuItems = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { ...(projects.length > 0 ? { name: "Projects", id: "projects" } : {}) },
    { name: "Education", id: "education" },
    { name: "Experience", id: "experience" },
    { name: "Volunteer", id: "volunteering" },
    { name: "Awards", id: "awards" },
    { name: "Certifications", id: "certifications" },
    { name: "Interests", id: "interests" },
    ...(blogs.length > 0 ? [{ name: "Blogs", id: "blogs" }] : []),
    ...(interviews.length > 0 ? [{ name: "Interviews", id: "interviews" }] : []),
  ].filter(item => item.id); // Filter out empty objects if projects is empty

  return (
    <nav className="lg:fixed lg:w-64 lg:h-screen bg-white border-r border-gray-100 flex flex-col pt-16 z-50">
      <div className="hidden lg:block mb-12 px-10">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          src={profile.profileImage}
          alt={profile.firstName}
          className="w-16 h-16 rounded-full grayscale hover:grayscale-0 transition-all duration-500 object-cover"
        />
        <div className="mt-4">
          <h2 className="text-sm font-bold tracking-tighter text-gray-900">{profile.firstName} {profile.lastName}</h2>
          <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">{profile.title}</p>
        </div>
      </div>
      
      <ul className="flex flex-wrap lg:flex-col items-center lg:items-start w-full px-6 lg:px-10 gap-x-4 lg:gap-y-1 justify-center lg:justify-start">
        {menuItems.map((item) => (
          <li key={item.id} className="w-auto lg:w-full">
            <a
              href={`#${item.id}`}
              className="block py-2 text-gray-400 hover:text-black uppercase font-medium text-[10px] tracking-[0.2em] transition-all duration-300"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
