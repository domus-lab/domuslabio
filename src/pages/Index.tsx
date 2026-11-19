import { ArrowDown, ArrowUpRight, Layers3, HeartPulse, Workflow } from "lucide-react";
import "./studio.css";

const contact = "mailto:hello@domuslab.io";
const art = (name: string) => `${import.meta.env.BASE_URL}studio/${name}.webp`;

const focusAreas = [
  { title: "Personal health", description: "Tools that help people keep track of their health, make sense of information and build everyday routines.", icon: HeartPulse },
  { title: "Care workflows", description: "Workspaces that connect the practical steps of delivering care, from scheduling and planning to the follow-up.", icon: Workflow },
  { title: "Health ventures", description: "New products and partnerships that explore how technology can support healthier lives.", icon: Layers3 },
];

const approach = [
  { title: "Understand the problem", description: "Start with the people doing the work or living with the problem. Find out where the current experience breaks down." },
  { title: "Build around real use", description: "Prototype the critical workflow early, then bring product design and engineering together to make it work in practice." },
  { title: "Learn after launch", description: "Keep refining the product as people use it and as the needs of care teams and patients change." },
];

const projects = [
  {
    name: "TwinPath",
    relationship: "Domuslab product",
    description: "A daily companion that brings your health diary, care and learning together.",
    image: "twinpath",
    url: "https://twinpath.app/",
  },
  {
    name: "Haily Health",
    relationship: "Domuslab product",
    description: "A health venture focused on helping people live longer, healthier lives.",
    image: "haily",
    url: "https://hailyhealth.com/",
  },
  {
    name: "Notrispace",
    relationship: "Studio partner",
    description: "A workspace for nutrition practices, from client scheduling to meal planning and follow-up.",
    image: "notri",
    url: "https://notrispace.com/",
  },
  {
    name: "Forma Health",
    relationship: "Upcoming partnership",
    description: "Coming soon.",
    image: "forma",
  },
];

function Wordmark() {
  return <span className="studio-wordmark"><span className="studio-mark" aria-hidden="true" />domuslab</span>;
}

export default function Index() {
  return (
    <div className="studio" id="top">
      <a className="studio-skip" href="#main">Skip to content</a>
      <header className="studio-wrap studio-header">
        <nav className="studio-nav" aria-label="Primary">
          <a href="#top" aria-label="Domuslab home"><Wordmark /></a>
          <div className="studio-nav-links">
            <a href="#work">Work</a>
            <a href="#studio">Studio</a>
            <a href="#approach">Approach</a>
          </div>
          <a className="studio-contact" href={contact}>Get in touch <ArrowUpRight size={15} aria-hidden="true" /></a>
        </nav>
      </header>

      <main className="studio-wrap" id="main">
        <section className="studio-hero" aria-labelledby="hero-title">
          <div className="studio-hero-copy studio-glass">
            <p className="studio-label"><span className="studio-dot" /> Independent healthtech studio</p>
            <h1 id="hero-title">We build for<br /> <em>better health.</em></h1>
            <p className="studio-intro">We create our own health products and partner with teams making care easier to access, deliver and navigate.</p>
            <a className="studio-button" href="#work">Explore our work <ArrowDown size={17} aria-hidden="true" /></a>
          </div>
          <div className="studio-hero-image">
            <img src={art("hero")} alt="" width="1536" height="1024" fetchPriority="high" />
          </div>
        </section>

        <section className="studio-work" id="work" aria-labelledby="work-title">
          <div className="studio-heading">
            <div>
              <p className="studio-label">Our portfolio</p>
              <h2 id="work-title">Selected work.</h2>
            </div>
            <p>Products built by Domuslab and collaborations with other healthtech teams.</p>
          </div>
          <div className="studio-grid">
            {projects.map((project) => (
              <article className="studio-project" key={project.name}>
                <div className={`studio-project-image studio-project-image--${project.image}`}>
                  <img src={art(project.image)} alt="" width="768" height="512" loading="lazy" />
                </div>
                <div className="studio-project-copy">
                  <p className="studio-label">{project.relationship}</p>
                  <h3>
                    {project.url ? (
                      <a className="studio-project-link" href={project.url}>
                        {project.name}
                        <span className="studio-project-arrow"><ArrowUpRight size={21} aria-hidden="true" /></span>
                      </a>
                    ) : project.name}
                  </h3>
                  <p>{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="studio-section" id="studio" aria-labelledby="studio-title">
          <div className="studio-heading">
            <div>
              <p className="studio-label">The studio</p>
              <h2 id="studio-title">Where we work.</h2>
            </div>
            <p>We bring product, design and engineering together across three areas of health technology.</p>
          </div>
          <div className="studio-focus">
            {focusAreas.map(({ title, description, icon: Icon }) => (
              <article className="studio-focus-card studio-glass" key={title}>
                <span className="studio-focus-icon"><Icon size={24} strokeWidth={1.5} aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="studio-about studio-glass" id="approach" aria-labelledby="approach-title">
          <div>
            <p className="studio-label">Our approach</p>
            <h2 id="approach-title">How we build.</h2>
          </div>
          <ol className="studio-steps">
            {approach.map(({ title, description }) => (
              <li key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="studio-section studio-partnerships" aria-labelledby="partner-title">
          <div className="studio-heading">
            <div>
              <p className="studio-label">Partnerships</p>
              <h2 id="partner-title">Build with us.</h2>
            </div>
            <p>We work with healthtech teams who bring firsthand knowledge of care, patients or clinical practice.</p>
          </div>
          <div className="studio-partner-grid">
            <article className="studio-focus-card studio-glass">
              <h3>Develop a product</h3>
              <p>If you’ve identified a gap in care or an everyday workflow that could work better, we can explore what a product would need to do and how to build it together.</p>
            </article>
            <article className="studio-focus-card studio-glass">
              <h3>Work with our products</h3>
              <p>If TwinPath or Haily Health connects with work you’re doing, get in touch to discuss where our products could fit and what we could learn together.</p>
            </article>
          </div>
          <a className="studio-button" href={contact}>Get in touch <ArrowUpRight size={17} aria-hidden="true" /></a>
        </section>
      </main>

      <footer className="studio-wrap studio-footer">
        <a href="#top" aria-label="Domuslab home"><Wordmark /></a>
        <a href={contact}>hello@domuslab.io <ArrowUpRight size={15} aria-hidden="true" /></a>
      </footer>
    </div>
  );
}
