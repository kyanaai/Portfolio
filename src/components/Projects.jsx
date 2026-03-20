import "./projects.css"

import wellder        from "../assets/wellder.png"
import weather        from "../assets/weather.png"
import gomoku         from "../assets/gomoku.png"
import rnPayroll      from "../assets/rnPayroll.png"
import kotlinPayroll  from "../assets/kotlinPayroll.png"
import payrollSystem  from "../assets/payrollSystem.png"
import employee       from "../assets/employee.png"
import chat           from "../assets/chat.png"
import inventory      from "../assets/inventory.png"
import voting         from "../assets/voting.png"
import flight         from "../assets/flight.png"

// ─── Data ─────────────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    title:      "WELLder Capstone",
    image:      wellder,
    github:     "https://github.com/kalllak17/capstone",
    drive:      "https://drive.google.com/drive/folders/1uIyf_0lf5i1hLKP51EwtoYYtVaZo4vlN?usp=share_link",
    isCapstone: true,
  },
  { title: "Gomoku Game",                  image: gomoku,         github: "https://github.com/kyanaai/Gomoku_game"                        },
  { title: "Chat Application",             image: chat,           github: "https://github.com/kyanaai/Chat-App"                           },
  { title: "Employee Management System",   image: employee,       github: "https://github.com/kyanaai/Full-Stack-Employee-Management-System" },
  { title: "Weather Application",          image: weather,        github: "https://github.com/kyanaai/Weather-Application"                },
  { title: "RN Payroll Assistant",         image: rnPayroll,      github: "https://github.com/kyanaai/RN_Payroll_Assistant"               },
  { title: "Payroll Assistant",            image: kotlinPayroll,  github: "https://github.com/kyanaai/Payroll-Assistant"                  },
  { title: "Payroll Management System",    image: payrollSystem,  github: "https://github.com/kyanaai/payroll-management-system"          },
  { title: "Smart Inventory Management",   image: inventory,      github: "https://github.com/kyanaai/SmartInventoryManagementSystem"     },
  { title: "Voting Application",           image: voting,         github: "https://github.com/kyanaai/Voting-Application"                 },
  { title: "Flight Reservation System",    image: flight,         github: "https://github.com/kyanaai/Flight-Reservation-System"         },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function CapstoneCard({ title, image, github, drive }) {
  return (
    <div className="project-card capstone">
      <div className="project-title">{title}</div>
      <div className="capstone-badge">Capstone</div>
      <img src={image} alt={title} />
      <div className="project-overlay">
        <a href={github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={drive}  target="_blank" rel="noreferrer">WELLder Info</a>
      </div>
    </div>
  )
}

function ProjectCard({ title, image, github }) {
  return (
    <a href={github} target="_blank" rel="noreferrer" className="project-card">
      <div className="project-title">{title}</div>
      <img src={image} alt={title} />
    </a>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-container">
        {PROJECTS.map((project) =>
          project.isCapstone ? (
            <CapstoneCard key={project.title} {...project} />
          ) : (
            <ProjectCard key={project.title} {...project} />
          )
        )}
      </div>
    </section>
  )
}