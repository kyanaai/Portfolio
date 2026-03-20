import Projects from "./components/Projects"
import useActiveSection from "./hooks/useActiveSection"
import NavDot from "./components/ui/NavDot"
import SkillCard from "./components/ui/SkillCard"
import OutlineButton from "./components/ui/OutlineButton"
import {
  SECTIONS,
  NAV_LINKS,
  SKILL_CATEGORIES,
  CONTACT_DETAILS,
} from "./constants/portfolio"

export default function App() {
  const activeSection = useActiveSection(SECTIONS)

  return (
    <div className="min-h-screen bg-[#161A30] text-[#F0ECE5]">

      {/* Navigation Dots */}
      <div className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-4 md:flex">
        {SECTIONS.map((id) => (
          <NavDot key={id} sectionId={id} isActive={activeSection === id} />
        ))}
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b border-white/5 bg-[#161A30]/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <span className="text-2xl font-bold tracking-[0.2em] text-[#F0ECE5]">K.N</span>

          <nav className="hidden gap-8 text-sm font-medium text-[#B6BBC4] md:flex">
            {NAV_LINKS.map(({ id, label }) => (
              <a key={id} href={`#${id}`} className="transition hover:text-[#F0ECE5]">
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center"
      >
        <div className="pointer-events-none absolute bottom-8 left-0 w-full overflow-hidden">
          <div className="animate-marquee whitespace-nowrap text-[88px] font-bold leading-none text-[#B6BBC4]/10 md:text-[150px]">
            Software Developer / Full-Stack Developer
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl">
          <h1 className="text-[56px] font-bold tracking-tight text-[#B6BBC4] md:text-[72px]">
            Hello, I&apos;m <span className="text-[#F0ECE5]">Kiana Yazdi</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-[#B6BBC4] md:text-2xl">
            Software Developer / Full-Stack Developer
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md border border-[#B6BBC4] px-6 py-2.5 text-sm font-medium text-[#F0ECE5] transition hover:bg-[#B6BBC4]/10"
            >
              View My Work <span className="text-[#B6BBC4]">↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="flex min-h-screen items-center bg-[#31304D] px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-4xl font-bold text-[#F0ECE5]">About Me</h2>

            <p className="mb-6 leading-relaxed text-[#B6BBC4]">
              I am a Software Developer and Computer Programming student at George Brown College
              with a strong interest in building scalable web, mobile, and backend applications.
              My experience includes full-stack development using technologies such as React,
              Node.js, Java, Python, C#, and modern databases.
            </p>

            <p className="mb-8 leading-relaxed text-[#B6BBC4]">
              I maintain a GPA of 3.9 and have ranked in the top performers in programming
              competitions such as IEEE Xtreme. Alongside my studies, I work as a tutor and
              teaching assistant helping students strengthen their programming and problem-solving
              skills.
            </p>

            <div className="flex gap-4">
              <OutlineButton href="/resume.pdf">Resume</OutlineButton>
              <OutlineButton href="/coverletter.pdf">Cover Letter</OutlineButton>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/profile.jpg"
              alt="Kiana Yazdi"
              className="w-[360px] rounded-xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Career Goal */}
      <section id="career" className="min-h-screen bg-[#161A30] px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-4xl font-bold text-[#F0ECE5] md:text-5xl">Career Goal</h2>

          <p className="mb-8 italic text-[#B6BBC4]">
            &ldquo;When something is important enough, you do it even if the odds are not in your favor.&rdquo;
            <br />— Elon Musk
          </p>

          <p className="mb-6 leading-8 text-[#B6BBC4]">
            I believe that software development is not only about writing code, but about solving
            real-world problems and creating meaningful impact. My goal is to continuously grow as
            a developer by building scalable, efficient, and user-focused applications. I am
            motivated by challenges that require critical thinking and creativity, and I enjoy
            transforming ideas into functional solutions.
          </p>

          <p className="leading-8 text-[#B6BBC4]">
            Through my academic journey and hands-on projects, I have developed a strong foundation
            in full-stack development and problem-solving. Looking ahead, I aim to contribute to
            innovative teams, expand my technical expertise, and build systems that improve
            everyday experiences while continuously evolving as a software engineer.
          </p>
        </div>
      </section>

      {/* Academic Credentials */}
      <section id="academic" className="bg-[#31304D] px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-10 text-3xl font-bold text-[#F0ECE5] md:text-4xl">
            Academic Credentials
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://drive.google.com/drive/folders/1i_L-SwXgY97Cqfl-HLoYYX3qOLaL3XcO?usp=share_link"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-[#B6BBC4]/30 bg-[#161A30]/40 px-6 py-4 text-[#B6BBC4] transition hover:bg-[#161A30]/70 hover:text-[#F0ECE5]"
            >
              Dean&apos;s List Award
            </a>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="min-h-screen bg-[#161A30] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-14 text-center text-4xl font-bold text-[#F0ECE5] md:text-5xl">
            Skills
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {SKILL_CATEGORIES.map((category) => (
              <SkillCard key={category.title} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <div id="projects" className="bg-[#161A30]">
        <Projects />
      </div>

      {/* Contact */}
      <section id="contact" className="min-h-screen bg-[#161A30] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-center text-4xl font-bold text-[#F0ECE5] md:text-5xl">
            Contact
          </h2>

          <p className="mx-auto mb-14 max-w-2xl text-center text-lg leading-8 text-[#B6BBC4]">
            I&apos;m open to internship and entry-level software development opportunities.
            Feel free to reach out if you&apos;d like to connect, collaborate, or discuss a project.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Get in touch */}
            <div className="rounded-2xl border border-[#B6BBC4]/20 bg-[#161A30]/40 p-8">
              <h3 className="mb-4 text-2xl font-semibold text-[#F0ECE5]">Get in touch</h3>
              <div className="space-y-4 text-[#B6BBC4]">
                {CONTACT_DETAILS.map(({ label, value }) => (
                  <p key={label}>
                    <span className="font-medium text-[#F0ECE5]">{label}:</span>{" "}
                    {value}
                  </p>
                ))}
              </div>
            </div>

            {/* Let's connect */}
            <div className="rounded-2xl border border-[#B6BBC4]/20 bg-[#161A30]/40 p-8">
              <h3 className="mb-4 text-2xl font-semibold text-[#F0ECE5]">Let&apos;s connect</h3>
              <p className="mb-6 leading-8 text-[#B6BBC4]">
                Whether it&apos;s a job opportunity, a freelance idea, or a coding project,
                I&apos;d be happy to hear from you.
              </p>

              <div className="flex flex-wrap gap-4">
                <OutlineButton href="mailto:kiananezafat6.kn@gmail.com">
                  Email Me
                </OutlineButton>
                <OutlineButton href="https://www.linkedin.com/in/kiana-ny" external>
                  LinkedIn
                </OutlineButton>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}