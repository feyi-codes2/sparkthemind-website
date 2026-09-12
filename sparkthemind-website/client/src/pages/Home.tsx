import { useState } from "react";
import { ArrowUpRight, Menu, X, MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Sparkles, BookOpen, HeartHandshake, UsersRound, Play, Check } from "lucide-react";

const heroImage = "/assets/sparkthemind-hero.png";
const outreachImage = "/assets/sparkthemind-outreach.png";
const eventImage = "/assets/sparkthemind-event.png";
const sparkMark = "/assets/sparkthemind-spark-mark.png";

const programmes = [
  { number: "01", icon: BookOpen, title: "School outreach", text: "We meet girls in their learning environments through conversations, educational activities, awareness programmes, and encouragement that keeps curiosity alive." },
  { number: "02", icon: HeartHandshake, title: "Education support", text: "We help girls overcome barriers that can interrupt their education, including scholarships, examination-fee support, and practical assistance where resources allow." },
  { number: "03", icon: UsersRound, title: "Confidence & goals", text: "We create room for girls to recognise their abilities, express their aspirations, set meaningful goals, and imagine a future shaped by their own voice." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); closeMenu(); };

  return (
    <div className="site-shell">
      <div className="topline"><div className="container topline-inner"><span>Osun State, Nigeria</span><span className="topline-dot" /><span>For every girl with a future worth investing in.</span></div></div>
      <header className="site-header">
        <div className="container header-inner">
          <button className="brand" onClick={() => scrollTo("home")} aria-label="SparkTheMind home">
            <span className="brand-mark"><img src={sparkMark} alt="" /></span><span className="brand-name"><span>Spark</span>TheMind</span>
          </button>
          <nav className={menuOpen ? "main-nav open" : "main-nav"} aria-label="Main navigation">
            <button onClick={() => scrollTo("about")}>About</button><button onClick={() => scrollTo("programmes")}>Programmes</button><button onClick={() => scrollTo("impact")}>Our impact</button><button onClick={() => scrollTo("team")}>Team</button><button onClick={() => scrollTo("contact")}>Contact</button>
            <button className="nav-cta" onClick={() => scrollTo("contact")}>Support our mission <ArrowUpRight size={15} /></button>
          </nav>
          <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-grid container">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-line" />Girls’ education, expanded</div>
              <h1>Empowering girls.<br /><em>Inspiring futures.</em></h1>
              <p className="hero-lede">Every girl deserves the opportunity to learn, grow, dream, and reach her full potential.</p>
              <p className="hero-body">SparkTheMind supports girl students in Nigeria through school outreach, education support, scholarships, and assistance with examination fees.</p>
              <div className="hero-actions"><button className="button button-primary" onClick={() => scrollTo("about")}>Discover SparkTheMind <ArrowUpRight size={17} /></button><button className="text-link" onClick={() => scrollTo("impact")}>See our impact <span>↗</span></button></div>
              <div className="hero-note"><span className="note-check"><Check size={13} /></span><span>Learning is a right. Confidence is a catalyst.</span></div>
            </div>
            <div className="hero-visual">
              <div className="hero-image-wrap"><img src={heroImage} alt="Girl students learning together in a bright classroom" /><div className="image-caption"><span>01 / 05</span><span>Learning together, growing together</span></div></div>
              <div className="hero-stamp"><span>Made for</span><strong>her<br />future.</strong><Sparkles size={18} /></div>
              <div className="hero-vertical">SPARKTHEMIND / 2026</div>
            </div>
          </div>
          <div className="scroll-cue"><span>Scroll to explore</span><span className="scroll-line" /></div>
        </section>

        <section id="about" className="mission-section section-pad">
          <div className="container mission-grid"><div className="section-rail"><span>Why we’re here</span><div className="rail-line" /></div><div className="mission-main"><div className="mission-kicker">Our mission, in practice</div><h2>Every girl has a future <em>worth investing in.</em></h2><div className="mission-columns"><p>Education can open doors, strengthen confidence, and help girls make informed choices about their lives. SparkTheMind works to ensure that girl students are seen, supported, encouraged, and given meaningful opportunities to succeed.</p><p>Through school outreach and education-focused support, we meet girls in their learning environments and encourage them to stay in school, believe in themselves, and pursue their goals.</p></div><button className="button button-outline" onClick={() => scrollTo("programmes")}>How we work <ArrowUpRight size={16} /></button></div><div className="mission-aside"><div className="aside-star"><img src={sparkMark} alt="" /></div><p>“Her voice matters.<br />Her education matters.<br />Her dreams matter.”</p><span>— SparkTheMind Organisation</span></div></div>
        </section>

        <section id="programmes" className="programme-section section-pad">
          <div className="container"><div className="section-heading-row"><div><div className="eyebrow"><span className="eyebrow-line" />What we do</div><h2>Turning encouragement<br /><em>into opportunity.</em></h2></div><p>We combine direct school engagement with practical education support to help girls stay connected to learning, strengthen their confidence, and see greater possibilities for their futures.</p></div><div className="programme-grid">{programmes.map((item) => { const Icon = item.icon; return <article className="programme-card" key={item.number}><div className="card-top"><span className="card-number">{item.number}</span><Icon size={28} strokeWidth={1.5} /></div><h3>{item.title}</h3><p>{item.text}</p><button className="card-link" onClick={() => scrollTo("contact")}>Learn more <ArrowUpRight size={15} /></button></article>; })}</div><div className="programme-foot"><span>Three ways we move the needle</span><button className="text-link" onClick={() => scrollTo("contact")}>Invite us to your school <span>↗</span></button></div></div>
        </section>

        <section id="impact" className="impact-section"><div className="impact-image"><img src={eventImage} alt="Girl students participating in a SparkTheMind learning event" /><div className="impact-play"><Play fill="currentColor" size={18} /></div></div><div className="impact-copy"><div className="eyebrow light"><span className="eyebrow-line" />Our impact</div><h2>Small moments.<br /><em>Lasting momentum.</em></h2><p>Every school visit, conversation, scholarship, and act of encouragement contributes to a wider movement for girls’ education.</p><div className="impact-stat"><strong>500<span>+</span></strong><div><b>girl students reached</b><small>Across Osun State, Nigeria</small></div></div><button className="button button-light" onClick={() => scrollTo("contact")}>Explore our impact <ArrowUpRight size={17} /></button></div></section>

        <section className="event-section section-pad"><div className="container event-grid"><div className="event-copy"><div className="eyebrow"><span className="eyebrow-line" />A story in motion</div><h2>Where confidence<br /><em>begins to grow.</em></h2><p>From SparkTheMind 1.0 to 2.0, each gathering creates a space for girls to ask questions, share experiences, and imagine what’s next.</p><div className="event-meta"><span>SPARKTHEMIND 2.0</span><span>2026 / OSUN STATE</span></div><button className="text-link" onClick={() => scrollTo("contact")}>View the story <span>↗</span></button></div><div className="event-photo"><img src={outreachImage} alt="Facilitator speaking with girl students during a school outreach" /><div className="photo-tag">Listen · Encourage · Support</div></div></div></section>

        <section id="team" className="team-section section-pad"><div className="container team-grid"><div className="team-image"><div className="team-image-pattern" /><div className="team-card"><span>Our people</span><strong>Hope needs<br />a human face.</strong></div></div><div className="team-copy"><div className="eyebrow"><span className="eyebrow-line" />The people behind the work</div><h2>Led by belief.<br /><em>Built by community.</em></h2><p>SparkTheMind is driven by people who believe that every girl deserves encouragement, opportunity, and the chance to shape her future.</p><div className="founder"><div className="founder-avatar">AG</div><div><strong>Ariyo Ayomide Gloria</strong><span>Founder, SparkTheMind Organisation</span></div><ArrowUpRight size={17} /></div><button className="button button-outline" onClick={() => scrollTo("contact")}>Work with us <ArrowUpRight size={16} /></button></div></div></section>

        <section id="contact" className="contact-section section-pad"><div className="container contact-grid"><div className="contact-intro"><div className="eyebrow light"><span className="eyebrow-line" />Let’s make room for more</div><h2>Help us reach<br /><em>more girls.</em></h2><p>Schools, community organisations, businesses, donors, volunteers, and individuals can all play a role in empowering the girl child.</p><div className="contact-details"><div><Phone size={17} /><span>+234 811 426 6127</span></div><div><MapPin size={17} /><span>Osun State, Nigeria</span></div><div><Mail size={17} /><span>hello@sparkthemind.org</span></div></div></div><form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}><div className="form-kicker">Start a conversation</div>{submitted ? <div className="form-success"><div className="success-icon"><Check /></div><h3>Thank you for reaching out.</h3><p>We’ve received your message and will be in touch soon.</p><button type="button" className="text-link" onClick={() => setSubmitted(false)}>Send another message <span>↗</span></button></div> : <><div className="form-row"><label>Full name<input required placeholder="Your name" /></label><label>Email address<input required type="email" placeholder="you@example.com" /></label></div><label>How would you like to help?<select defaultValue=""><option value="" disabled>Select an option</option><option>Partner with SparkTheMind</option><option>Invite us to a school</option><option>Volunteer</option><option>Support girls’ education</option></select></label><label>Message<textarea required placeholder="Tell us a little about your idea..." rows={4} /></label><button className="button button-light submit-button" type="submit">Send message <ArrowUpRight size={17} /></button></>}</form></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-top"><div><button className="brand footer-brand" onClick={() => scrollTo("home")}><span className="brand-mark"><img src={sparkMark} alt="" /></span><span className="brand-name"><span>Spark</span>TheMind</span></button><p>Empowering the girl child<br />through education, outreach, and support.</p></div><div className="footer-links"><span className="footer-label">Explore</span><button onClick={() => scrollTo("about")}>About us</button><button onClick={() => scrollTo("programmes")}>Programmes</button><button onClick={() => scrollTo("impact")}>Our impact</button><button onClick={() => scrollTo("contact")}>Contact</button></div><div className="footer-links"><span className="footer-label">Connect</span><a href="tel:+2348114266127">Call us</a><a href="mailto:hello@sparkthemind.org">Email us</a><div className="socials"><a href="#contact" aria-label="Instagram"><Instagram size={18} /></a><a href="#contact" aria-label="Facebook"><Facebook size={18} /></a><a href="#contact" aria-label="LinkedIn"><Linkedin size={18} /></a></div></div></div><div className="container footer-bottom"><span>© 2026 SparkTheMind Organisation</span><span>Built for every girl with a future worth investing in.</span></div></footer>
    </div>
  );
}
