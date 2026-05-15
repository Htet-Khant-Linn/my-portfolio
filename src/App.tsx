import { motion } from "motion/react";
import Sidebar from "./components/Sidebar";
import Icon from "./components/Icon";
import { portfolioData } from "./portfolioData";

export default function App() {
  const { profile, experience, education, skills, interests, awards, volunteering, projects, blogs, interviews } = portfolioData;

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="flex flex-col lg:flex-row bg-[#fcfcfc] min-h-screen font-sans selection:bg-black selection:text-white">
      <Sidebar />

      <main className="flex-1 lg:ml-64 p-8 lg:p-24 space-y-32 max-w-6xl">
        {/* About Section */}
        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="pt-12 lg:pt-0 min-h-[70vh] flex flex-col justify-center"
        >
          <span className="text-[20px] uppercase tracking-[0.4em] text-gray-400 mb-6">Introduction</span>
          <h1 className="text-6xl lg:text-9xl font-bold text-black leading-tight tracking-tighter mb-8">
            {profile.firstName} <br />
            <span className="text-gray-600 opacity-90">{profile.lastName}</span>
          </h1>
          <div className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-10">
            <a href={`mailto:${profile.email}`} className="hover:text-black transition-colors underline underline-offset-8 decoration-gray-200">{profile.email}</a>
          </div>
          <p className="text-xl lg:text-2xl leading-relaxed text-gray-700 mb-12 max-w-2xl font-light">
            {profile.about}
          </p>
          <div className="flex gap-8">
            {profile.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-black transition-colors duration-300"
              >
                <Icon name={social.icon} size={18} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <section id="skills" className="pt-20">
          <span className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-12 block">Expertise</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-16 tracking-tight">Capabilities</h2>
          
          <div className="grid lg:grid-cols-4 gap-y-12 gap-x-8">
            {skills.tools.map((tool, idx) => (
              <div key={idx} className="flex flex-col group border-l border-gray-100 pl-6 py-4 hover:border-black transition-colors">
                <Icon name={tool.icon} size={24} strokeWidth={1} className="text-gray-300 group-hover:text-black transition-colors mb-4" />
                <span className="text-xs font-bold text-black uppercase tracking-widest">{tool.name}</span>
              </div>
            ))}
          </div>

          <div className="mt-24">
            <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-8">Languages</h3>
            <ul className="grid md:grid-cols-3 gap-4">
              {skills.languages.map((lang, idx) => (
                <li key={idx} className="flex items-center text-gray-700 font-light text-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-200 mr-4" />
                  {lang}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Projects Section */}
        {projects.length > 0 && (
          <section id="projects" className="pt-20">
            <span className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-12 block">Showcase</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-16 tracking-tight">Hands-on Projects</h2>
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              {projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="border border-gray-100 p-8 lg:p-12 hover:border-black transition-all duration-500 bg-white min-h-[320px] flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-8">
                        <h3 className="text-2xl font-bold text-black leading-tight">{project.title}</h3>
                        {project.url && (
                          <a href={project.url} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-black transition-colors">
                            <Icon name="external-link" size={20} strokeWidth={1.5} />
                          </a>
                        )}
                      </div>
                      <p className="text-gray-700 font-light leading-relaxed mb-8">
                        {project.description}
                      </p>
                    </div>
                    {project.tags && (
                      <div className="flex flex-wrap gap-3">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">#{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Education Section */}
        <section id="education" className="pt-20">
          <span className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-12 block">Academics</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-16 tracking-tight">Education</h2>
          <div className="space-y-16">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-12 gap-8 lg:gap-16"
              >
                <div className="lg:col-span-3 text-sm font-medium text-gray-400 uppercase tracking-widest pt-1">
                  {edu.period}
                </div>
                <div className="lg:col-span-9">
                  <h3 className="text-2xl font-bold text-black mb-1">{edu.institution}</h3>
                  <div className="text-sm text-gray-400 font-medium uppercase tracking-wider mb-2">
                    {edu.url ? (
                      <a href={edu.url} target="_blank" rel="noreferrer" className="hover:text-black transition-colors">{edu.degree}</a>
                    ) : edu.degree}
                  </div>
                  {edu.subDegree && <div className="text-gray-700 font-light">{edu.subDegree}</div>}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="pt-20">
          <span className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-12 block">Background</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-16 tracking-tight">Professional Experience</h2>
          <div className="space-y-24">
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="grid lg:grid-cols-12 gap-8 lg:gap-16"
              >
                <div className="lg:col-span-3 text-sm font-medium text-gray-400 uppercase tracking-widest pt-2">
                  {exp.period}
                </div>
                <div className="lg:col-span-9">
                  <h3 className="text-2xl font-bold text-black mb-1">{exp.role}</h3>
                  <div className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-6">
                    <a href={exp.companyUrl} target="_blank" rel="noreferrer" className="hover:text-black transition-colors">{exp.company}</a>
                  </div>
                  <ul className="space-y-3 text-gray-700 max-w-2xl">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="leading-relaxed font-light">{desc}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Volunteering & Community Section */}
        <section id="volunteering" className="pt-20">
          <span className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-12 block">Community</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-16 tracking-tight">Volunteering</h2>
          <div className="space-y-24">
            {volunteering.map((vol, idx) => (
              <div key={idx} className="grid lg:grid-cols-12 gap-8 lg:gap-16">
                <div className="lg:col-span-3 text-sm font-medium text-gray-400 uppercase tracking-widest">
                  {vol.period}
                </div>
                <div className="lg:col-span-9">
                  <h3 className="text-2xl font-bold text-black mb-1">{vol.role}</h3>
                  <div className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-6">
                    <a href={vol.url} target="_blank" rel="noreferrer" className="hover:text-black transition-colors">{vol.organization}</a>
                  </div>
                  <p className="text-gray-700 leading-relaxed font-light text-lg max-w-2xl">{vol.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Awards Section */}
        <section id="awards" className="pt-20">
          <span className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-12 block">Recognition</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-16 tracking-tight">Papers & Awards</h2>
          <ul className="space-y-10 group">
            {awards.map((award, idx) => (
              <li key={idx} className="max-w-3xl border-b border-gray-50 pb-8 hover:border-black transition-all duration-500">
                <span className="text-gray-700 text-xl font-light leading-relaxed">
                  {award.url ? (
                    <a href={award.url} target="_blank" rel="noreferrer" className="hover:text-black transition-colors inline-flex items-center">
                      {award.title}
                      <Icon name="link" size={12} className="ml-3 text-gray-200" />
                    </a>
                  ) : award.title}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Certifications Section */}
        {skills.certifications.length > 0 && (
          <section id="certifications" className="pt-20">
            <span className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-12 block">Validation</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-16 tracking-tight uppercase">Professional Certifications and Training</h2>
            <ul className="space-y-6 max-w-4xl">
              {skills.certifications.map((cert, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-start text-gray-700 font-light border-l border-gray-100 pl-6 py-2 hover:border-black transition-colors"
                >
                  {cert.url ? (
                    <a href={cert.url} target="_blank" rel="noreferrer" className="hover:text-black transition-colors flex items-center group/item">
                      <span className="text-lg">{cert.name}</span>
                      <Icon name="arrow-up-right" size={14} className="ml-2 text-gray-200 group-hover/item:text-black transition-colors" />
                    </a>
                  ) : <span className="text-lg">{cert.name}</span>}
                </motion.li>
              ))}
            </ul>
          </section>
        )}

        {/* Interests Section */}
        <section id="interests" className="pt-20">
          <span className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-12 block">Personal</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-16 tracking-tight">Interests</h2>
          <div className="max-w-3xl">
            <p className="text-xl leading-relaxed text-gray-700 font-light">
              {interests}
            </p>
          </div>
        </section>

        {/* Media Section */}
        {(blogs.length > 0 || interviews.length > 0) && (
          <div className="grid lg:grid-cols-2 gap-24 pt-20 border-t border-gray-100">
            {blogs.length > 0 && (
              <section id="blogs">
                <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-12 block">Writing</span>
                <h2 className="text-2xl font-bold text-black mb-12">Selected Blogs</h2>
                <ul className="space-y-8">
                  {blogs.map((blog, idx) => (
                    <li key={idx} className="group">
                      <a href={blog.url} target="_blank" rel="noreferrer" className="text-lg text-gray-400 hover:text-black transition-colors font-light leading-snug">
                        {blog.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {interviews.length > 0 && (
              <section id="interviews">
                <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-12 block">Press</span>
                <h2 className="text-2xl font-bold text-black mb-12">Interviews</h2>
                <ul className="space-y-8">
                  {interviews.map((interview, idx) => (
                    <li key={idx} className="group">
                      <a href={interview.url} target="_blank" rel="noreferrer" className="text-lg text-gray-400 hover:text-black transition-colors font-light leading-snug">
                        {interview.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        )}

        <footer className="pt-32 pb-16 text-[10px] uppercase tracking-[0.5em] text-gray-500 text-center lg:text-left">
          © {new Date().getFullYear()} {profile.firstName} {profile.lastName} — All rights reserved
        </footer>
      </main>
    </div>
  );
}
