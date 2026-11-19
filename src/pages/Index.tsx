import { ArrowDown, ArrowUpRight } from "lucide-react";
import "./studio.css";

const contact = "mailto:hello@domuslab.io";
const art = (name: string) => `${import.meta.env.BASE_URL}studio/${name}.webp`;

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
          </div>
          <a className="studio-contact" href={contact}>Get in touch <ArrowUpRight size={15} aria-hidden="true" /></a>
        </nav>
      </header>

      <main className="studio-wrap" id="main">
        <section className="studio-hero" aria-labelledby="hero-title">
          <div className="studio-hero-copy">
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
            <p>The products we own and the healthtech teams we partner with.</p>
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

        <section className="studio-about" id="studio" aria-labelledby="studio-title">
          <div>
            <p className="studio-label">The studio</p>
            <h2 id="studio-title">Building health<br /> products together.</h2>
          </div>
          <div>
            <p>Domuslab brings product, design and engineering together to build health technology. We develop our own products and work alongside partners who understand the day-to-day realities of care.</p>
            <a className="studio-button" href={contact}>Get in touch <ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
        </section>
      </main>

      <footer className="studio-wrap studio-footer">
        <a href="#top" aria-label="Domuslab home"><Wordmark /></a>
        <a href={contact}>hello@domuslab.io <ArrowUpRight size={15} aria-hidden="true" /></a>
      </footer>
    </div>
  );
}
