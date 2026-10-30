
import { useState } from "react";
import {
  Routes,
  Route,
  Link,
  NavLink,
  useParams
} from "react-router-dom";

import {
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  ArrowDownToLine,
  Mail,
  Code2,
  Database,
  BrainCircuit,
  Globe,
  Layers,
  GraduationCap,
  BriefcaseBusiness,
  Menu,
  X,
  Sparkles,
  MapPin,
  ExternalLink,
  Camera
} from "lucide-react";

import "./App.css";

/* PERSONAL INFORMATION */
const profile = {
  name: "Allen Joseph",
  email: "YOUR_EMAIL@example.com",
  github: "https://github.com/Allen20077",
  linkedin: "https://www.linkedin.com/in/allen-j-343547342",
  instagram: "YOUR_INSTAGRAM_PROFILE_URL"
};

/* PROJECT INFORMATION */

const projects = [
  {
    id: "campusfind-ai",
    number: "01",
    name: "CampusFind AI",
    category: "AI / FULL STACK DEVELOPMENT",
    description:
      "An intelligent campus lost-and-found platform designed to help students report, discover and match lost items.",
    technologies: ["React", "Python", "FastAPI", "Supabase"],
    github: "https://github.com/Allen20077/CampusFind-AI",
    demo: "",
    image: "/projects/campusfind.png"
  },
  {
    id: "gofit-app",
    number: "02",
    name: "GoFit App",
    category: "FOOD TECH / APPLICATION DEVELOPMENT",
    description:
      "A food-box ordering application designed to make browsing products and placing orders simple and convenient.",
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Allen20077/GOFIT",
    demo: "https://gofit-sepia.vercel.app",
    image: "/projects/gofit.png"
  },
  {
    id: "clara-ai",
    number: "03",
    name: "Clara AI Assistant",
    category: "ARTIFICIAL INTELLIGENCE",
    description:
      "An experimental personal AI assistant exploring voice interaction, conversational AI and intelligent interfaces.",
    technologies: ["Python", "React", "FastAPI"],
    github: "https://github.com/Allen20077/CLARA_AI_Assistant",
    demo: "",
    image: "/projects/clara.png"
  },
  {
    id: "railway-management",
    number: "04",
    name: "Railway Management System",
    category: "SOFTWARE DEVELOPMENT",
    description:
      "A railway management application exploring train searches, booking workflows and database integration.",
    technologies: ["React", "Python", "MySQL"],
    github: "https://github.com/Allen20077/Railway_Management_System",
    demo: "",
    image: "/projects/railway.png"
  },
  {
    id: "berry-food-tracker",
    number: "05",
    name: "Berry Food Tracker",
    category: "APPLICATION DEVELOPMENT",
    description:
      "A food-tracking project. Explore the repository for its implementation and features.",
    technologies: [],
    github: "https://github.com/Allen20077/Berry-Food-Tracker",
    demo: "",
    image: "/projects/food_tracker.png"
  },
  {
    id: "8berries",
    number: "06",
    name: "8berries",
    category: "SOFTWARE DEVELOPMENT",
    description:
      "A development project showcasing practical implementation and experimentation.",
    technologies: [],
    github: "https://github.com/Allen20077/8berries",
    demo: "",
    image: "/projects/8berries.png"
  },
  {
    id: "future-ds-03",
    number: "07",
    name: "FUTURE DS 03",
    category: "DATA SCIENCE",
    description:
      "A data science project. Explore the repository for its dataset, methodology and implementation.",
    technologies: [],
    github: "https://github.com/Allen20077/FUTURE_DS_03",
    demo: "",
    image: "/projects/future-ds.png"
  },
  {
    id: "home-security-system",
    number: "08",
    name: "Home Security System",
    category: "HARDWARE / SECURITY",
    description:
      "A home security system project. Explore the repository for its hardware and software implementation.",
    technologies: [],
    github: "https://github.com/Allen20077/Home-Security-System",
    demo: "",
    image: "/projects/home-security.png"
  },
  {
    id: "attendance-dashboard-rfid",
    number: "09",
    name: "Attendance Dashboard using RFID",
    category: "DASHBOARD / IOT",
    description:
      "An RFID-based attendance dashboard project.",
    technologies: [],
    github: "https://github.com/Allen20077/Attendance_Dashboard_using_RFID",
    demo: "",
    image: "/projects/attendance.png"
  },
  {
    id: "fire-sensor-robot",
    number: "10",
    name: "Fire Sensor Robot",
    category: "ROBOTICS / EMBEDDED SYSTEMS",
    description:
      "A robotics project involving fire-sensor technology.",
    technologies: [],
    github: "https://github.com/Allen20077/Fire-Sensor-Robot",
    demo: "",
    image: "/projects/fire-robot.png"
  },
  {
    id: "obstacle-avoiding-robot",
    number: "11",
    name: "Obstacle Avoiding Robot",
    category: "ROBOTICS",
    description:
      "A robot development project focused on obstacle avoidance.",
    technologies: [],
    github: "https://github.com/Allen20077/Obstacle-Avoiding-Robot",
    demo: "",
    image: "/projects/obstacle-robot.png"
  },
  {
    id: "esp32-rc-car",
    number: "12",
    name: "ESP32 RC Car",
    category: "IOT / EMBEDDED SYSTEMS",
    description:
      "An RC car development project based on the ESP32 platform.",
    technologies: ["ESP32"],
    github: "https://github.com/Allen20077/ESP32-RC-Car",
    demo: "",
    image: "/projects/esp32-car.png"
  },
  {
    id: "invoice-fraud-detection",
    number: "13",
    name: "Invoice Fraud Detection",
    category: "DATA SCIENCE / AI",
    description:
      "A project focused on invoice fraud detection.",
    technologies: [],
    github: "https://github.com/Allen20077/Invoice-fraud-detection",
    demo: "",
    image: "/projects/invoice-fraud.png"
  },
  {
    id: "transport-delay-prediction",
    number: "14",
    name: "Real-Time Transport Delay Prediction",
    category: "DATA SCIENCE / PREDICTIVE ANALYTICS",
    description:
      "A transport delay prediction project. Explore the repository for its implementation.",
    technologies: [],
    github: "https://github.com/Allen20077/Real-Time-Transport-Delay-Prediction",
    demo: "",
    image: "/projects/transport-delay.png"
  }
];


/* SKILLS */

const skills = [
  {
    icon: Code2,
    number: "01",
    name: "Programming Languages",
    description:
      "Building programming fundamentals and developing logical solutions through practical coding.",
    technologies: ["Python", "Java", "JavaScript", "SQL"],
    focus: "Programming logic, problem solving and algorithms"
  },
  {
    icon: Globe,
    number: "02",
    name: "Web Development",
    description:
      "Creating responsive web applications with interactive interfaces and connected backend services.",
    technologies: ["HTML", "CSS", "React", "FastAPI", "REST APIs"],
    focus: "Frontend development, backend integration and responsive design"
  },
  {
    icon: Database,
    number: "03",
    name: "Database Management",
    description:
      "Working with relational databases, data organization and application-level database integration.",
    technologies: ["MySQL", "Supabase", "SQL", "Database Design"],
    focus: "Queries, CRUD operations, relationships and data management"
  },
  {
    icon: BrainCircuit,
    number: "04",
    name: "Data Science & Machine Learning",
    description:
      "Exploring data-driven solutions through data analysis, predictive modelling and machine learning concepts.",
    technologies: [
      "Data Analysis",
      "Data Visualization",
      "Machine Learning",
      "Predictive Analytics"
    ],
    focus: "Data exploration, model development and analytical problem solving"
  },
  {
    icon: Sparkles,
    number: "05",
    name: "Artificial Intelligence",
    description:
      "Exploring intelligent applications, conversational systems and AI-powered software experiences.",
    technologies: [
      "Conversational AI",
      "AI Integration",
      "Voice Interfaces",
      "Intelligent Applications"
    ],
    focus: "AI experimentation and intelligent application development"
  },
  {
    icon: Layers,
    number: "06",
    name: "Development Tools & Technologies",
    description:
      "Using development environments, version control and creative tools to build and manage projects.",
    technologies: [
      "Git",
      "GitHub",
      "VS Code",
      "Blender",
      "Unity"
    ],
    focus: "Version control, development workflows and 3D applications"
  }
];


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Expertise", path: "/skills" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header className="navbar navbar-advanced">

      <Link
        to="/"
        className="nav-brand"
        onClick={() => setMenuOpen(false)}
      >
        <img src="/logo.png" alt="AJ Logo" />
      </Link>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      <nav className={menuOpen ? "nav-links open" : "nav-links"}>

        <div className="nav-main-links">
          {links.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="nav-actions">

          <span className="nav-availability">
            <span className="nav-status-dot"></span>
            AVAILABLE
          </span>

          <Link
            to="/contact"
            className="nav-contact nav-contact-premium"
            onClick={() => setMenuOpen(false)}
          >
            Let's Collaborate
            <ArrowUpRight size={16} />
          </Link>

        </div>

      </nav>

    </header>
  );
}


/* FOOTER */

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <Link to="/" className="logo">
          AJ<span>.</span>
        </Link>

        <p>
          Building ideas. Exploring technology.
          Creating meaningful solutions.
        </p>

        <div className="social-links">

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Code2 />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <BriefcaseBusiness />
          </a>

          {profile.instagram && (
            <a
              href={profile.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Camera />
            </a>
          )}

        </div>

      </div>

    </footer>
  );
}

/* REUSABLE PAGE HEADING */

function PageHeading({ number, label, title, subtitle }) {
  return (
    <div className="page-heading">
      <span className="section-label">{number} / {label}</span>
      <h1 className="page-title">{title}</h1>
      <p className="page-subtitle">{subtitle}</p>
    </div>
  );
}

/* HOME PAGE */

function Home() {
  const [showCVPopup, setShowCVPopup] = useState(false);

  return (
    <>

      <section className="hero page-container">

        <div className="hero-content">

          <div className="availability">
            <span className="status-dot"></span>
            OPEN TO INTERNSHIPS & OPPORTUNITIES
          </div>

         
<p className="eyebrow">HELLO, I'M</p>

<h1>
  Allen
  <br />
  <span className="outline-text">Joseph.</span>
</h1>

<h2 className="hero-role">
  Data Science Student. Software Developer. AI Enthusiast.
</h2>

<p className="hero-description">
  I build practical software applications, develop
  full-stack solutions and explore artificial
  intelligence. My work focuses on programming,
  database systems, data science and turning
  technical ideas into functional applications.
</p>


<div className="hero-actions">

  <Link to="/projects" className="primary-button">
    Explore My Work <ArrowUpRight size={17} />
  </Link>

  <Link to="/about" className="secondary-button">
    Discover My Story <ArrowRight size={16} />
  </Link>

  <button
    className="secondary-button"
    onClick={() => setShowCVPopup(true)}
  >
    Download CV <ArrowDownToLine size={17} />
  </button>

</div>

        </div>

        <div className="hero-art">

          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>

          <div className="hero-orb">
            AJ
            <span className="orb-dot"></span>
          </div>

          <div className="floating-label label-one">
            <Sparkles size={15} /> CREATIVE THINKING
          </div>

          <div className="floating-label label-two">
            <Code2 size={15} /> BUILD WITH PURPOSE
          </div>

          <div className="orb-caption">
            LEARN / BUILD / INNOVATE
          </div>

        </div>
      </section>

      {showCVPopup && (
        <div className="cv-modal-overlay">
          <div className="cv-modal">

            <h2>Download My CV?</h2>

            <p>
              Would you like to download my latest resume?
            </p>

            <div className="cv-modal-actions">

              <a
                href="/resume.pdf"
                download="Allen_Joseph_CV.pdf"
                className="cv-confirm-button"
                onClick={() => setShowCVPopup(false)}
              >
                Yes, Download
              </a>

              <button
                className="cv-cancel-button"
                onClick={() => setShowCVPopup(false)}
              >
                No, Cancel
              </button>

            </div>

          </div>
        </div>
      )}

      <section className="intro-section">
        <div className="page-container intro-content">

          <span className="section-label">MY MINDSET</span>

<h2>
  I don't just follow technology.
  <span> I explore it, challenge it and turn ideas into reality.</span>
          </h2>

        </div>
      </section>

      <section className="page-container featured-section">

        <div className="section-heading-row">

          <div>
            <span className="section-label">SELECTED WORK</span>
            <h2 className="section-title">
              A glimpse of my <span>work.</span>
            </h2>
          </div>

          <Link to="/projects" className="view-all">
            All Projects <ArrowUpRight size={16} />
          </Link>

        </div>

        <div className="featured-grid">

          {projects.slice(0, 2).map((project) => (

            <Link
              to={`/projects/${project.id}`}
              className="featured-card"
              key={project.id}
            >

              <div className="featured-top">
                <span>{project.number} / {project.category}</span>
                <ArrowUpRight />
              </div>

              <Layers size={36} />

              <h3>{project.name}</h3>

              <p>{project.description}</p>

              <div className="technology-list">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

            </Link>

          ))}

        </div>

      </section>

    </>
  );
}

function About() {
  return (
    <section className="page-container inner-page about-page">

      <div className="about-grid">

        {/* LEFT SIDE */}
        <div className="about-left">

          <PageHeading
            number="01"
            label="ABOUT ME"
            title={<>The person behind <span>the projects.</span></>}
            subtitle="My background, interests and the direction I'm working towards."
          />

          <div className="about-story">


<h2>My journey</h2>

<p>
  I'm Allen Joseph, an engineering student interested in software
  development, data science and emerging technologies. I enjoy
  understanding how technology works and exploring how it can be
  used to solve real-world problems.
</p>

<p>
  I believe the best way to understand technology is by building
  with it. I enjoy exploring new tools, understanding technical
  problems and developing practical applications. Every project
  gives me an opportunity to experiment, learn something new and
  improve my problem-solving skills.
</p>

<p>
  My journey so far has involved working with programming,
  databases, web development and artificial intelligence.
  Through hands-on projects, I've been exploring how different
  technologies connect to create useful and intelligent systems.
</p>

<p>
  I'm particularly interested in artificial intelligence,
  machine learning and full-stack development. I enjoy taking
  an idea from its initial concept through design, development
  and implementation.
</p>

<p>
  My current focus is strengthening my programming fundamentals,
  improving my technical knowledge and developing real-world
  software projects that demonstrate both creativity and
  practical engineering skills.
</p>

<p>
  I see myself as a continuous learner who believes in
  experimenting, adapting and growing with technology.
  My goal is to keep building meaningful solutions and
  turn innovative ideas into working products.
</p>


<h2>What drives me</h2>

<p>
  Curiosity, problem-solving and the challenge of turning an
  idea into something useful are what motivate me.
  I enjoy exploring unfamiliar concepts, learning new
  technologies and finding better ways to approach problems.
</p>

<p>
  I believe progress comes from consistency, practical
  experience and the willingness to keep learning.
  Every challenge is an opportunity to improve, and
  every project is another step forward in my journey
  as an engineer and developer.
</p>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="about-side">

          <div className="about-photo">
            <img
              src="/allen-portrait.png"
              alt="Allen Joseph"
            />
          </div>

          <div className="about-cards">

            <article className="info-card">
              <GraduationCap />
              <h3>Education</h3>
              <p>Engineering — Data Science</p>
            </article>

            <article className="info-card">
              <BrainCircuit />
              <h3>Interests</h3>
              <p>Software, AI and Data Science</p>
            </article>

            <article className="info-card">
              <BriefcaseBusiness />
              <h3>Career Direction</h3>
              <p>Software and Data Science</p>
            </article>

            <article className="info-card">
              <Sparkles />
              <h3>Mindset</h3>
              <p>Continuous learning</p>
            </article>

          </div>
        </div>

      </div>

      <div className="about-quote">
        "The goal is not just to know more.
        The goal is to build better."
      </div>

      <Link to="/projects" className="primary-button">
        Explore My Projects ↗
      </Link>

    </section>
  );
}

/* PROJECTS PAGE */

function Projects() {
  return (
    <section className="page-container inner-page contact-page">

      <PageHeading
        number="02"
        label="SELECTED WORK"
        title={<>Ideas into <span>reality.</span></>}
        subtitle="Technical projects, experiments and applications built while exploring technology."
      />

      <div className="project-grid">

        {projects.map((project) => (

          <article className="project-card" key={project.id}>

            <div className="project-card-top">
              <span>{project.number} / PROJECT</span>
              <ArrowUpRight />
            </div>

           <div className="project-visual">
  {project.image ? (
    <img
      src={project.image}
      alt={`${project.name} screenshot`}
      className="project-image"
    />
  ) : (
    <Layers size={48} />
  )}
</div>

            <span className="project-category">
              {project.category}
            </span>

            <h2>{project.name}</h2>

            <p>{project.description}</p>

            <div className="technology-list">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="project-card-footer">

              <Link to={`/projects/${project.id}`}>
                View Project <ArrowUpRight size={16} />
              </Link>

              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">
                  <Code2 size={18} />
                </a>
              )}

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

/* INDIVIDUAL PROJECT PAGE */

function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <section className="page-container inner-page contact-page">
        <h1 className="page-title">Project not found.</h1>
        <Link to="/projects" className="primary-button">
          <ArrowLeft size={16} /> Back to Projects
        </Link>
      </section>
    );
  }

  return (
    <section className="page-container inner-page contact-page">

      <Link to="/projects" className="back-link">
        <ArrowLeft size={16} /> Back to Projects
      </Link>

      <PageHeading
        number={project.number}
        label="PROJECT CASE STUDY"
        title={`${project.name}.`}
        subtitle={project.category}
      />

  
<div className="project-detail-visual">
  {project.image ? (
    <img
      src={project.image}
      alt={`${project.name} project screenshot`}
      className="project-detail-image"
    />
  ) : (
    <Layers size={48} />
  )}
  <span>PROJECT SHOWCASE</span>
</div>


      <div className="project-detail-grid">

        <div>
          <h2>Project overview</h2>
          <p>{project.description}</p>

          <h2>Technologies used</h2>

          <div className="technology-list">
            {project.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>

          <h2>Development and implementation</h2>
          <p>
            We will add the actual problem statement,
            architecture, implementation details, challenges,
            screenshots and outcomes for this project.
          </p>
        </div>

        <aside className="project-detail-aside">
          <span>PROJECT LINKS</span>

          {project.github ? (
            <a href={project.github} target="_blank" rel="noreferrer">
              <Code2 size={17} /> GitHub <ExternalLink size={14} />
            </a>
          ) : (
            <p>GitHub repository coming soon.</p>
          )}

          {project.demo ? (
            <a href={project.demo} target="_blank" rel="noreferrer">
              Live Demo <ExternalLink size={14} />
            </a>
          ) : (
            <p>Live demo coming soon.</p>
          )}
        </aside>

      </div>

    </section>
  );
}

/* SKILLS PAGE */

function Skills() {
  return (
    <section className="page-container inner-page skills-page">

      <PageHeading
        number="03"
        label="TECHNICAL TOOLKIT"
        title={<>Skills that turn <span>ideas into reality.</span></>}
        subtitle="My technical capabilities, development tools and areas of continuous learning."
      />

      <div className="skills-intro">
        <div>
          <span className="section-label">WHAT I WORK WITH</span>
          <h2>My technical <span>expertise.</span></h2>
        </div>

        <p>
          From programming and web development to data science
          and artificial intelligence, I continuously explore
          technologies and apply them through practical projects.
        </p>
      </div>

      <div className="skills-grid">

        {skills.map(({ icon: Icon, number, name, description, technologies, focus }) => (

          <article className="skill-card" key={number}>

            <div className="skill-top">
              <Icon size={32} />
              <span>{number}</span>
            </div>

            <h2>{name}</h2>

            <p>{description}</p>

            <div className="skill-technologies">
              {technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="skill-focus">
              <span>AREAS OF FOCUS</span>
              <p>{focus}</p>
            </div>

          </article>

        ))}

      </div>

      <section className="skills-bottom">

        <span className="section-label">ALWAYS EVOLVING</span>

        <h2>
          Learning today.
          <span> Building tomorrow.</span>
        </h2>

        <p>
          I believe technical skills grow through experimentation,
          consistent learning and solving real-world problems.
          My goal is to keep expanding my knowledge and turn
          technical concepts into useful applications.
        </p>

      </section>

      <Link to="/projects" className="primary-button">
        Explore My Projects <ArrowUpRight size={17} />
      </Link>

    </section>
  );
}


/* EXPERIENCE PAGE */

function Experience() {
  const experiences = [
    {
      number: "01",
      type: "EDUCATION",
      title: "Engineering — Data Science",
      description:
        "Building a strong foundation in programming, data structures, databases and analytical thinking.",
      tags: ["Programming", "DBMS", "Data Structures"],
      icon: GraduationCap,
      status: "CURRENT JOURNEY"
    },
    {
      number: "02",
      type: "PROJECT DEVELOPMENT",
      title: "Turning Ideas into Applications",
      description:
        "Exploring software development, artificial intelligence and practical solutions through independent projects.",
      tags: ["React", "Python", "FastAPI", "AI"],
      icon: Code2,
      status: "HANDS-ON LEARNING"
    },
    {
      number: "03",
      type: "TECHNICAL EXPLORATION",
      title: "Exploring Emerging Technology",
      description:
        "Expanding technical knowledge through experimentation with data science, intelligent systems and interactive technologies.",
      tags: ["Machine Learning", "Blender", "Unity"],
      icon: BrainCircuit,
      status: "CONTINUOUS LEARNING"
    },
    {
      number: "04",
      type: "FUTURE DIRECTION",
      title: "Professional Opportunities",
      description:
        "Looking forward to applying technical knowledge in real-world environments through internships and meaningful collaborations.",
      tags: ["Internships", "Collaboration", "Innovation"],
      icon: BriefcaseBusiness,
      status: "LOOKING AHEAD"
    }
  ];

  return (
    <section className="page-container inner-page experience-page">

      <PageHeading
        number="04"
        label="MY JOURNEY"
        title={<>Learning. Building. <span>Becoming.</span></>}
        subtitle="A journey shaped by curiosity, experimentation and the ambition to create meaningful technology."
      />

      <div className="journey-intro">
        <span className="section-label">THE ROAD SO FAR</span>
        <h2>
          Every project is a step.
          <span> Every challenge is progress.</span>
        </h2>
        <p>
          My journey is about continuously learning,
          exploring new technologies and turning
          knowledge into practical experience.
        </p>
      </div>

      <div className="experience-timeline">

        {experiences.map((item) => {
          const Icon = item.icon;

          return (
            <article className="experience-card" key={item.number}>

              <div className="experience-number">
                {item.number}
              </div>

              <div className="experience-icon">
                <Icon size={27} />
              </div>

              <div className="experience-content">

                <div className="experience-meta">
                  <span>{item.type}</span>
                  <small>{item.status}</small>
                </div>

                <h2>{item.title}</h2>

                <p>{item.description}</p>

                <div className="experience-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

              </div>

              <div className="experience-arrow">
                <ArrowUpRight size={23} />
              </div>

            </article>
          );
        })}

      </div>

      <div className="experience-ending">
        <span className="section-label">WHAT COMES NEXT?</span>
        <h2>
          The journey is still
          <span> being written.</span>
        </h2>
        <p>
          Focused on learning, building and discovering
          opportunities to make a meaningful impact
          through technology.
        </p>

        <Link to="/contact" className="primary-button">
          Let's Connect <ArrowUpRight size={17} />
        </Link>
      </div>

    </section>
  );
}


/* CONTACT PAGE */

function Contact() {
const socials = [
  { name: "GitHub", url: profile.github, icon: Code2 },
  { name: "LinkedIn", url: profile.linkedin, icon: BriefcaseBusiness },
  { name: "Instagram", url: profile.instagram, icon: Camera }
];

  return (
    <section className="page-container inner-page contact-page">

      <PageHeading
        number="05"
        label="GET IN TOUCH"
        title={<>Let's connect and <span>create.</span></>}
        subtitle="Interested in opportunities, collaborations or technology? Let's connect."
      />

      <div className="contact-grid">

        <div className="contact-card">
          <Mail size={35} />

          <h2>Have something in mind?</h2>

          <p>
            For professional opportunities, internships,
            collaborations and other enquiries, reach out by email.
          </p>

          <a href={`mailto:${profile.email}`} className="primary-button">
            Email Me <ArrowUpRight size={17} />
          </a>

        </div>

        <div className="contact-social">

          <h2>Let's connect and stay in touch.</h2>

<p className="social-description">
  I'm always happy to meet new people, exchange ideas,
  explore opportunities and connect with others who
  share an interest in technology and innovation.
</p>

          {socials.map(({ name, url, icon: Icon }) => (

            <div className="social-row" key={name}>

              <Icon size={22} />
              <span>{name}</span>

              {url ? (
                <a href={url} target="_blank" rel="noreferrer">
                  Visit <ArrowUpRight size={15} />
                </a>
              ) : (
                <small>Coming soon</small>
              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

/* 404 PAGE */

function NotFound() {
  return (
    <section className="page-container inner-page contact-page">
      <h1 className="page-title">Page not found<span>.</span></h1>
      <Link to="/" className="primary-button">Back Home ↗</Link>
    </section>
  );
}

/* MAIN APPLICATION */

export default function App() {
  return (
    <div className="portfolio" id="top">

      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />

    </div>
  );
}
