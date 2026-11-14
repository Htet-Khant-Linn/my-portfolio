import { MotionConfig, motion } from "motion/react";
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
    <MotionConfig reducedMotion="user">
      <div className="flex flex-col lg:flex-row bg-canvas min-h-screen font-sans text-body selection:bg-accent selection:text-white">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Sidebar />

        <main id="main-content" tabIndex={-1} className="min-w-0 flex-1 lg:ml-64 px-6 py-10 sm:px-10 lg:px-12 xl:px-20 lg:py-16 space-y-20 lg:space-y-24 max-w-6xl">
          {/* About Section */}
          <motion.section
            id="about"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="pt-6 lg:pt-0 min-h-[65vh] flex flex-col justify-center"
          >
            <span className="section-eyebrow mb-6">Introduction</span>
            <h1 className="text-5xl sm:text-6xl xl:text-8xl font-bold text-heading leading-tight tracking-tighter mb-8">
              {profile.firstName} <br />
              <span className="text-accent">{profile.lastName}</span>
            </h1>
            <p className="text-lg sm:text-xl font-semibold text-accent mb-5">{profile.title}</p>
            <div className="text-sm font-medium text-muted tracking-wide mb-8">
              <a href={`mailto:${profile.email}`} className="text-link break-all">{profile.email}</a>
            </div>
            <p className="text-lg sm:text-xl leading-relaxed text-body mb-12 max-w-2xl font-normal">
              {profile.about}
            </p>
            <div className="flex gap-3">
              {profile.socials.map((social) => social.url ? (
                <a
                  key={social.name}
                  href={social.url}
                  aria-label={`Visit ${social.name} (opens in a new tab)`}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                >
                  <Icon name={social.icon} size={18} strokeWidth={1.75} aria-hidden="true" />
                </a>
              ) : (
                <span
                  key={social.name}
                  role="img"
                  aria-label={`${social.name} (link unavailable)`}
                  className="social-link"
                >
                  <Icon name={social.icon} size={18} strokeWidth={1.75} aria-hidden="true" />
                </span>
              ))}
            </div>
          </motion.section>

          {/* Skills Section */}
          <section id="skills" className="portfolio-section">
            <span className="section-eyebrow">Expertise</span>
            <h2 className="section-heading">Capabilities</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {skills.tools.map((tool, idx) => (
                <div key={idx} className="skill-card group">
                  <Icon name={tool.icon} size={24} strokeWidth={1.75} className="text-accent group-hover:text-accent-strong transition-colors mb-4" />
                  <span className="text-xs font-bold text-heading uppercase tracking-widest">{tool.name}</span>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-xs font-bold text-muted uppercase tracking-[0.3em] mb-8">Languages</h3>
              <ul className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {skills.languages.map((lang, idx) => (
                  <li key={idx} className="flex items-center text-body font-normal text-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mr-4" />
                    {lang}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Projects Section */}
          {projects.length > 0 && (
            <section id="projects" className="portfolio-section">
              <span className="section-eyebrow">Showcase</span>
              <h2 className="section-heading">Hands-on Projects</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
                {projects.map((project, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group min-w-0"
                  >
                    <div className="portfolio-card h-full p-6 sm:p-8 min-h-[320px] flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start gap-4 mb-6">
                          <h3 className="text-2xl font-bold text-heading leading-tight">{project.title}</h3>
                          {project.url && (
                            <a href={project.url} aria-label={`View ${project.title.trim()} (opens in a new tab)`} target="_blank" rel="noreferrer" className="icon-link">
                              <Icon name="external-link" size={20} strokeWidth={1.75} aria-hidden="true" />
                            </a>
                          )}
                        </div>
                        <p className="text-body font-normal leading-relaxed mb-8">
                          {project.description}
                        </p>
                      </div>
                      {project.tags && (
                        <div className="flex flex-wrap gap-3">
                          {project.tags.map((tag) => (
                            <span key={tag} className="rounded bg-accent-soft px-2.5 py-1 text-xs text-accent font-medium">#{tag}</span>
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
          <section id="education" className="portfolio-section">
            <span className="section-eyebrow">Academics</span>
            <h2 className="section-heading">Education</h2>
            <div className="space-y-5">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="portfolio-card grid xl:grid-cols-12 gap-5 xl:gap-8 p-6 sm:p-8"
                >
                  <div className="xl:col-span-3 text-sm font-medium text-muted uppercase tracking-widest pt-1">
                    {edu.period}
                  </div>
                  <div className="xl:col-span-9">
                    <h3 className="text-2xl font-bold text-heading mb-1">{edu.institution}</h3>
                    <div className="text-sm text-muted font-medium uppercase tracking-wider mb-2">
                      {edu.url ? (
                        <a href={edu.url} target="_blank" rel="noreferrer" className="text-link">{edu.degree}</a>
                      ) : edu.degree}
                    </div>
                    {edu.subDegree && <div className="text-body font-normal">{edu.subDegree}</div>}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="portfolio-section">
            <span className="section-eyebrow">Background</span>
            <h2 className="section-heading">Professional Experience</h2>
            <div className="space-y-6">
              {experience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="portfolio-card grid xl:grid-cols-12 gap-5 xl:gap-8 p-6 sm:p-8"
                >
                  <div className="xl:col-span-3 text-sm font-medium text-muted uppercase tracking-widest pt-2">
                    {exp.period}
                  </div>
                  <div className="xl:col-span-9">
                    <h3 className="text-2xl font-bold text-heading mb-1">{exp.role}</h3>
                    <div className="text-sm font-medium text-muted uppercase tracking-wider mb-6">
                      {exp.companyUrl ? (
                        <a href={exp.companyUrl} target="_blank" rel="noreferrer" className="text-link">{exp.company}</a>
                      ) : <span>{exp.company}</span>}
                    </div>
                    <ul className="space-y-3 text-body max-w-2xl list-disc pl-5 marker:text-accent">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="leading-relaxed font-normal">{desc}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Volunteering & Community Section */}
          <section id="volunteering" className="portfolio-section">
            <span className="section-eyebrow">Community</span>
            <h2 className="section-heading">Volunteering</h2>
            <div className="space-y-6">
              {volunteering.map((vol, idx) => (
                <div key={idx} className="portfolio-card grid xl:grid-cols-12 gap-5 xl:gap-8 p-6 sm:p-8">
                  <div className="xl:col-span-3 text-sm font-medium text-muted uppercase tracking-widest">
                    {vol.period}
                  </div>
                  <div className="xl:col-span-9">
                    <h3 className="text-2xl font-bold text-heading mb-1">{vol.role}</h3>
                    <div className="text-sm font-medium text-muted uppercase tracking-wider mb-6">
                      {vol.url ? (
                        <a href={vol.url} target="_blank" rel="noreferrer" className="text-link">{vol.organization}</a>
                      ) : <span>{vol.organization}</span>}
                    </div>
                    <p className="text-body leading-relaxed font-normal text-lg max-w-2xl">{vol.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Awards Section */}
          <section id="awards" className="portfolio-section">
            <span className="section-eyebrow">Recognition</span>
            <h2 className="section-heading">Papers & Awards</h2>
            <ul className="space-y-5">
              {awards.map((award, idx) => (
                <li key={idx} className="max-w-3xl border-b border-line pb-5">
                  <span className="text-body text-xl font-normal leading-relaxed">
                    {award.url ? (
                      <a href={award.url} target="_blank" rel="noreferrer" className="text-link inline-flex items-center">
                        {award.title}
                        <Icon name="link" size={12} className="ml-3 shrink-0 text-accent" />
                      </a>
                    ) : award.title}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Certifications Section */}
          {skills.certifications.length > 0 && (
            <section id="certifications" className="portfolio-section">
              <span className="section-eyebrow">Validation</span>
              <h2 className="section-heading">Professional Certifications and Training</h2>
              <ul className="space-y-3 max-w-4xl">
                {skills.certifications.map((cert, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="portfolio-card flex items-start text-body font-normal border-l-2 border-l-accent"
                  >
                    {cert.url ? (
                      <a href={cert.url} target="_blank" rel="noreferrer" className="certificate-link group/item">
                        <span className="text-base leading-relaxed">{cert.name}</span>
                        <Icon name="arrow-up-right" size={14} className="mt-1 shrink-0 text-accent group-hover/item:text-heading transition-colors" />
                      </a>
                    ) : (
                      <span className="flex items-start gap-2 p-5 sm:p-6">
                        <span className="text-base leading-relaxed">{cert.name}</span>
                        <Icon name="arrow-up-right" size={14} aria-hidden="true" className="mt-1 shrink-0 text-accent group-hover/item:text-heading transition-colors" />
                      </span>
                    )}
                  </motion.li>
                ))}
              </ul>
            </section>
          )}

          {/* Interests Section */}
          <section id="interests" className="portfolio-section">
            <span className="section-eyebrow">Personal</span>
            <h2 className="section-heading">Interests</h2>
            <div className="max-w-3xl">
              <p className="text-xl leading-relaxed text-body font-normal">
                {interests}
              </p>
            </div>
          </section>

          {/* Media Section */}
          {(blogs.length > 0 || interviews.length > 0) && (
            <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-line">
              {blogs.length > 0 && (
                <section id="blogs">
                  <span className="section-eyebrow">Writing</span>
                  <h2 className="text-2xl font-bold text-heading mb-12">Selected Blogs</h2>
                  <ul className="space-y-8">
                    {blogs.map((blog, idx) => (
                      <li key={idx} className="group">
                        <a href={blog.url} target="_blank" rel="noreferrer" className="text-link text-lg leading-relaxed">
                          {blog.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {interviews.length > 0 && (
                <section id="interviews">
                  <span className="section-eyebrow">Press</span>
                  <h2 className="text-2xl font-bold text-heading mb-12">Interviews</h2>
                  <ul className="space-y-8">
                    {interviews.map((interview, idx) => (
                      <li key={idx} className="group">
                        <a href={interview.url} target="_blank" rel="noreferrer" className="text-link text-lg leading-relaxed">
                          {interview.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>
          )}

          <footer className="pt-12 pb-6 text-xs uppercase tracking-[0.18em] text-muted text-center lg:text-left">
            © {new Date().getFullYear()} {profile.firstName} {profile.lastName} — All rights reserved
          </footer>
        </main>
      </div>
    </MotionConfig>
  );
}
