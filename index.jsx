import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Download, ExternalLink, Code2, GraduationCap, Briefcase, Award, User, Sparkles, ArrowRight, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AnimatedPortfolio() {
  const skills = useMemo(
    () => ["HTML5", "CSS3", "JavaScript", "PHP", "SQL", "VS Code"],
    []
  );

  const certifications = useMemo(
    () => [
      {
        title: "Oracle Programming with SQL",
        org: "Oracle Academy",
        desc: "Covered SQL queries, joins, subqueries, functions, and database concepts.",
      },
    ],
    []
  );

  const projects = useMemo(
    () => [
      {
        title: "Attendance Management System Using MAC Address",
        stack: ["PHP", "HTML", "CSS", "JavaScript", "SQL"],
        role: "Front-End Developer",
        points: [
          "Developed a web-based attendance system using device MAC address verification.",
          "Reduced proxy attendance and improved attendance accuracy through automated identification.",
          "Designed responsive user interfaces and added client-side form validation.",
        ],
        link: "#projects",
      },
    ],
    []
  );

  const experience = useMemo(
    () => [
      {
        role: "Web Development Intern",
        company: "Your Company Name",
        duration: "1 Month Internship",
        points: [
          "Worked on responsive web pages using HTML, CSS, JavaScript, and PHP.",
          "Assisted in improving UI sections and basic frontend validation for real-world pages.",
          "Collaborated on small web modules and gained practical industry workflow exposure.",
        ],
      },
    ],
    []
  );

  const socials = [
    { label: "Email", href: "mailto:sahilbhurkunde@gmail.com", icon: Mail },
    { label: "Phone", href: "tel:+917378774776", icon: Phone },
    { label: "Location", href: "https://maps.google.com/?q=Pune,Maharashtra", icon: MapPin },
    { label: "GitHub", href: "https://github.com/yourusername", icon: Github },
    { label: "LinkedIn", href: "https://linkedin.com/in/yourusername", icon: Linkedin },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const stagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.25),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.25),transparent_25%),linear-gradient(to_bottom,#020617,#0f172a,#020617)]" />
        <motion.div
          className="absolute top-20 left-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-xl font-bold"
          >
            <Sparkles className="h-5 w-5 text-cyan-400" />
            <span>Sahil Portfolio</span>
          </motion.div>

          <nav className="hidden gap-6 md:flex text-sm text-slate-200">
            <a href="#about" className="transition hover:text-cyan-400">About</a>
            <a href="#skills" className="transition hover:text-cyan-400">Skills</a>
            <a href="#experience" className="transition hover:text-cyan-400">Internship</a>
            <a href="#projects" className="transition hover:text-cyan-400">Projects</a>
            <a href="#contact" className="transition hover:text-cyan-400">Contact</a>
          </nav>

          <Button asChild className="rounded-full bg-cyan-500 text-slate-950 hover:bg-cyan-400">
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-4 w-4" /> Resume
            </a>
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6">
        <section className="grid min-h-[92vh] items-center gap-10 py-16 md:grid-cols-2">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="space-y-6"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              <Globe className="h-4 w-4" /> Web Developer Portfolio
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
              Hi, I’m <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">Sahil Bhurkunde</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="max-w-2xl text-lg leading-8 text-slate-300">
              Computer Engineering undergraduate focused on web development. I build responsive web applications using HTML, CSS, JavaScript, PHP, and SQL, and I enjoy turning ideas into practical projects.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full bg-white text-slate-950 hover:bg-slate-200">
                <a href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10">
                <a href="#contact">Contact Me</a>
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="grid gap-3 pt-4 sm:grid-cols-2">
              {socials.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.label === "Location" || item.label === "GitHub" || item.label === "LinkedIn" ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition hover:border-cyan-400/40 hover:bg-white/10"
                  >
                    <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">{item.label}</p>
                      <p className="text-sm font-medium text-white group-hover:text-cyan-300">
                        {item.label === "Email"
                          ? "sahilbhurkunde@gmail.com"
                          : item.label === "Phone"
                          ? "+91 7378774776"
                          : item.label === "Location"
                          ? "Pune, Maharashtra"
                          : item.label}
                      </p>
                    </div>
                  </a>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-cyan-500/30 to-fuchsia-500/30 blur-2xl" />
            <Card className="relative overflow-hidden rounded-[2rem] border-white/10 bg-white/10 shadow-2xl backdrop-blur-xl">
              <CardContent className="p-8">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-4xl font-bold text-slate-950"
                >
                  SB
                </motion.div>
                <div className="space-y-4 text-center">
                  <h2 className="text-2xl font-bold">Front-End & Web Developer</h2>
                  <p className="text-slate-300">
                    Passionate about modern UI, clean layouts, smooth animation, and practical web solutions.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4 text-left">
                    <div className="rounded-2xl bg-slate-900/70 p-4">
                      <p className="text-3xl font-black text-cyan-400">1+</p>
                      <p className="text-sm text-slate-300">Projects Built</p>
                    </div>
                    <div className="rounded-2xl bg-slate-900/70 p-4">
                      <p className="text-3xl font-black text-fuchsia-400">1 Mo</p>
                      <p className="text-sm text-slate-300">Internship</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <motion.section
          id="about"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="py-10"
        >
          <motion.div variants={fadeUp} className="mb-8 flex items-center gap-3">
            <User className="h-6 w-6 text-cyan-400" />
            <h2 className="text-3xl font-bold">About Me</h2>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Card className="rounded-3xl border-white/10 bg-white/5 backdrop-blur-xl">
              <CardContent className="p-8 text-slate-300 leading-8">
                I am a third-year Computer Engineering student at Pimpri Chinchwad College of Engineering & Research (PCCOE&amp;R), affiliated with Savitribai Phule Pune University. I am currently seeking opportunities in web development where I can apply my technical foundation, improve my development workflow, and contribute to real-world projects.
              </CardContent>
            </Card>
          </motion.div>
        </motion.section>

        <motion.section
          id="skills"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="py-10"
        >
          <motion.div variants={fadeUp} className="mb-8 flex items-center gap-3">
            <Code2 className="h-6 w-6 text-cyan-400" />
            <h2 className="text-3xl font-bold">Technical Skills</h2>
          </motion.div>

          <motion.div variants={fadeUp} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Card className="rounded-3xl border-white/10 bg-white/5 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/10">
                  <CardContent className="flex items-center justify-between p-6">
                    <span className="text-lg font-semibold">{skill}</span>
                    <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">Skill</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          id="experience"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="py-10"
        >
          <motion.div variants={fadeUp} className="mb-8 flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-cyan-400" />
            <h2 className="text-3xl font-bold">Internship Experience</h2>
          </motion.div>

          <div className="space-y-6">
            {experience.map((item, index) => (
              <motion.div key={index} variants={fadeUp}>
                <Card className="rounded-3xl border-white/10 bg-white/5 backdrop-blur-xl">
                  <CardContent className="p-8">
                    <div className="mb-4 flex flex-col justify-between gap-4 md:flex-row md:items-center">
                      <div>
                        <h3 className="text-2xl font-bold text-white">{item.role}</h3>
                        <p className="text-cyan-300">{item.company}</p>
                      </div>
                      <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                        {item.duration}
                      </span>
                    </div>
                    <ul className="space-y-3 text-slate-300">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="education"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="py-10"
        >
          <motion.div variants={fadeUp} className="mb-8 flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-cyan-400" />
            <h2 className="text-3xl font-bold">Education</h2>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Card className="rounded-3xl border-white/10 bg-white/5 backdrop-blur-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold">B.E. Computer Engineering</h3>
                <p className="mt-2 text-slate-300">Pimpri Chinchwad College of Engineering &amp; Research (PCCOE&amp;R)</p>
                <p className="text-slate-400">Savitribai Phule Pune University (SPPU)</p>
                <p className="mt-3 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm text-cyan-300">
                  Pursuing Third Year • Expected Graduation: 2027
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.section>

        <motion.section
          id="projects"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="py-10"
        >
          <motion.div variants={fadeUp} className="mb-8 flex items-center gap-3">
            <ExternalLink className="h-6 w-6 text-cyan-400" />
            <h2 className="text-3xl font-bold">Projects</h2>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-1">
            {projects.map((project) => (
              <motion.div key={project.title} variants={fadeUp}>
                <Card className="rounded-3xl border-white/10 bg-white/5 backdrop-blur-xl transition hover:bg-white/10">
                  <CardContent className="p-8">
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-2xl font-bold">{project.title}</h3>
                          <p className="mt-2 text-cyan-300">Role: {project.role}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <span key={tech} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-slate-200">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <ul className="space-y-3 text-slate-300">
                          {project.points.map((point) => (
                            <li key={point} className="flex gap-3">
                              <span className="mt-2 h-2 w-2 rounded-full bg-fuchsia-400" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="min-w-[220px] rounded-3xl border border-white/10 bg-slate-900/70 p-6"
                      >
                        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Highlight</p>
                        <h4 className="mt-3 text-xl font-bold text-white">Smart Attendance System</h4>
                        <p className="mt-3 text-slate-300">
                          A practical academic project focused on attendance authenticity and efficient record handling.
                        </p>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="certifications"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="py-10"
        >
          <motion.div variants={fadeUp} className="mb-8 flex items-center gap-3">
            <Award className="h-6 w-6 text-cyan-400" />
            <h2 className="text-3xl font-bold">Certifications</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {certifications.map((cert) => (
              <motion.div key={cert.title} variants={fadeUp}>
                <Card className="rounded-3xl border-white/10 bg-white/5 backdrop-blur-xl">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold">{cert.title}</h3>
                    <p className="mt-2 text-cyan-300">{cert.org}</p>
                    <p className="mt-3 leading-7 text-slate-300">{cert.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="contact"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="py-10 pb-20"
        >
          <motion.div variants={fadeUp} className="mb-8 flex items-center gap-3">
            <Mail className="h-6 w-6 text-cyan-400" />
            <h2 className="text-3xl font-bold">Contact</h2>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Card className="rounded-[2rem] border-white/10 bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 backdrop-blur-xl">
              <CardContent className="p-8 text-center">
                <h3 className="text-3xl font-bold">Let’s Build Something Great</h3>
                <p className="mx-auto mt-4 max-w-2xl text-slate-300 leading-8">
                  I am looking for web development opportunities where I can contribute, learn, and grow through real projects and teamwork.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" className="rounded-full bg-cyan-400 text-slate-950 hover:bg-cyan-300">
                    <a href="mailto:sahilbhurkunde@gmail.com">
                      <Mail className="mr-2 h-4 w-4" /> Email Me
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10">
                    <a href="tel:+917378774776">
                      <Phone className="mr-2 h-4 w-4" /> Call Me
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/60 py-6 text-center text-sm text-slate-400">
        © 2026 Sahil Bhurkunde • Built with React, Tailwind, shadcn/ui, and Framer Motion
      </footer>
    </div>
  );
}
