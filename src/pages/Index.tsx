import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import "./studio.css";

const contact = "mailto:hello@domuslab.io";
const media = (name: string) => `${import.meta.env.BASE_URL}studio/${name}.webp`;

const navigation = [
  { title: "Portfolio", href: "#work" },
  { title: "Studio", href: "#studio" },
  { title: "Approach", href: "#approach" },
];

const projects = [
  {
    name: "TwinPath",
    relationship: "Domuslab product",
    description: "A daily companion that brings your health diary, care and learning together.",
    image: "daily-health",
    site: { domain: "twinpath.app", url: "https://twinpath.app/" },
  },
  {
    name: "Haily Health",
    relationship: "Domuslab product",
    description: "A health venture focused on helping people live longer, healthier lives.",
    image: "healthy-living",
    site: { domain: "hailyhealth.com", url: "https://hailyhealth.com/" },
  },
  {
    name: "Notrispace",
    relationship: "Studio partner",
    description: "A workspace for nutrition practitioners, from scheduling and meal plans to client follow-up.",
    image: "nutrition-practice",
    site: { domain: "notrispace.com", url: "https://notrispace.com/" },
  },
  {
    name: "Forma Health",
    relationship: "Upcoming studio partner",
    description: "More on this partnership soon.",
  },
];

const focusAreas = [
  { title: "Everyday health", description: "Give people a place to track their health, make sense of information and build routines they can keep." },
  { title: "Tools for care teams", description: "Bring the practical work of care together, from the first appointment through to planning and follow-up." },
  { title: "New health ventures", description: "Explore how technology can support healthier lives, through products we own and ventures we build with partners." },
];

const approach = [
  { title: "Start with the people", description: "Talk to the people who will use the product. Understand where their current tools get in the way and what would make a difference." },
  { title: "Test the core workflow", description: "Prototype the part that matters most. Bring design and engineering together early so the experience works in practice." },
  { title: "Keep learning after launch", description: "Use feedback from patients and care teams to decide what to improve and where the product should go next." },
];

function Wordmark() {
  return (
    <a className="studio-wordmark" href="#top" aria-label="Domuslab home">
      <span className="studio-mark" aria-hidden="true" />
      domuslab
    </a>
  );
}

export default function Index() {
  return (
    <div className="studio" id="top">
      <a className="studio-skip" href="#main">Skip to content</a>
      <header className="studio-wrap studio-header">
        <nav className="studio-nav" aria-label="Primary">
          <Wordmark />
          <div className="studio-nav-links">
            {navigation.map(({ title, href }) => <a href={href} key={href}>{title}</a>)}
          </div>
          <a className="studio-contact" href="#contact">Get in touch <ArrowUpRight size={16} aria-hidden="true" /></a>
        </nav>
      </header>

      <main id="main">
        <section className="studio-hero studio-wrap" aria-labelledby="hero-title">
          <div className="studio-hero-copy">
            <p className="studio-kicker"><span aria-hidden="true" /> Independent healthtech studio</p>
            <h1 id="hero-title">Health is<br />human.</h1>
            <p>We build health products and partner with teams making care easier to access, deliver and navigate.</p>
            <a className="studio-button" href="#work">Explore our portfolio <ArrowDown size={19} aria-hidden="true" /></a>
          </div>
          <img className="studio-hero-image" src={media("consultation")} alt="A clinician and patient look at a tablet together during a consultation" width="1024" height="1280" fetchPriority="high" />
        </section>

        <section className="studio-wrap studio-work" id="work" aria-labelledby="work-title">
          <div className="studio-section-heading">
            <div>
              <p className="studio-kicker">Portfolio</p>
              <h2 id="work-title">What we’re building.</h2>
            </div>
            <p>Products we own and partnerships that bring new ideas into health and care.</p>
          </div>
          <div className="studio-project-grid">
            {projects.map(({ name, relationship, description, image, site }) => (
              <article className="studio-project" key={name}>
                {image ? (
                  <div className="studio-project-visual">
                    <img src={media(image)} alt="" width="768" height="512" loading="lazy" />
                  </div>
                ) : (
                  <div className="studio-project-visual studio-project-visual--forma" aria-hidden="true">
                    <span>forma<span>.</span></span>
                  </div>
                )}
                <div className="studio-project-info">
                  <p className="studio-kicker">{relationship}</p>
                  <h3>{name}</h3>
                  <p>{description}</p>
                  {site && <a href={site.url} aria-label={`${site.domain} — Visit ${name}`}>{site.domain} <ArrowUpRight size={16} aria-hidden="true" /></a>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="studio-focus-band" id="studio" aria-labelledby="studio-title">
          <div className="studio-wrap studio-focus">
            <div className="studio-focus-intro">
              <p className="studio-kicker">The studio</p>
              <h2 id="studio-title">Health is the work.</h2>
              <p>Domuslab brings product, design and engineering together to build technology around the people who use it.</p>
            </div>
            <dl className="studio-focus-list">
              {focusAreas.map(({ title, description }) => (
                <div key={title}>
                  <dt>{title}</dt>
                  <dd>{description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="studio-wrap studio-approach" id="approach" aria-labelledby="approach-title">
          <div className="studio-section-heading">
            <div>
              <p className="studio-kicker">Approach</p>
              <h2 id="approach-title">How we build.</h2>
            </div>
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

        <section className="studio-wrap studio-invitation" id="contact" aria-labelledby="contact-title">
          <div>
            <p className="studio-kicker">Partnerships</p>
            <h2 id="contact-title">Let’s build together.</h2>
            <p>If you see a gap in care or want to work with one of our products, we’d like to hear from you.</p>
          </div>
          <a className="studio-button" href={contact}>Email Domuslab <ArrowRight size={19} aria-hidden="true" /></a>
        </section>
      </main>

      <footer className="studio-wrap studio-footer">
        <Wordmark />
        <p>Independent healthtech studio</p>
        <a href={contact}>hello@domuslab.io <ArrowUpRight size={15} aria-hidden="true" /></a>
      </footer>
    </div>
  );
}
