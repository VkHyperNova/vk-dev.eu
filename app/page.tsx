const EMAIL = "kiis.veikko@gmail.com"; // TODO: replace with your real email address

const services = [
  {
    icon: "◧",
    title: "Business websites",
    text: "A clear, professional site that explains what you do and makes it easy for customers to contact you.",
  },
  {
    icon: "✎",
    title: "Easy to edit",
    text: "You get a WordPress admin you can actually use. Change texts, images and pages yourself, no developer needed.",
  },
  {
    icon: "⚡",
    title: "Fast & mobile-first",
    text: "Lightweight builds that load quickly and look right on phones, tablets and desktops.",
  },
  {
    icon: "⌕",
    title: "SEO basics included",
    text: "Clean structure, proper titles and descriptions, so search engines understand your site from day one.",
  },
  {
    icon: "🛒",
    title: "Online shops",
    text: "Need to sell? WooCommerce stores with payments, shipping and product management set up for you.",
  },
  {
    icon: "⚙",
    title: "Care & maintenance",
    text: "Updates, backups and security checks, so your site stays safe and working after launch.",
  },
];

const steps = [
  {
    title: "Talk",
    text: "We discuss your business, goals and what the site needs to do. Free and without obligation.",
  },
  {
    title: "Plan & design",
    text: "I propose the structure and design direction. You give feedback before anything is built.",
  },
  {
    title: "Build",
    text: "I build the site in WordPress, add your content and test it on every screen size.",
  },
  {
    title: "Launch & support",
    text: "Your site goes live, I show you how to manage it, and I stay available afterwards.",
  },
];

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="wrap">
          <a href="#top" className="logo">
            <img src="/logo-white.png" alt="VK Dev" />
          </a>
          <nav className="nav">
            <a href="#services" className="hide-sm">
              Services
            </a>
            <a href="#process" className="hide-sm">
              Process
            </a>
            <a href={`mailto:${EMAIL}`} className="btn btn-primary">
              Get a quote
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap">
            <span className="eyebrow">WordPress web development</span>
            <h1>
              Websites that <em>work</em> for your business.
            </h1>
            <p className="lead">
              I build fast, clean and easy-to-manage WordPress websites for
              small businesses and freelancers. You focus on your customers,
              I take care of the website.
            </p>
            <div className="actions">
              <a href={`mailto:${EMAIL}?subject=Website%20project`} className="btn btn-primary">
                Start your project
              </a>
              <a href="#services" className="btn btn-ghost">
                See what I offer
              </a>
            </div>
            <div className="facts">
              <span>Custom design</span>
              <span>Mobile friendly</span>
              <span>Fixed, clear pricing</span>
            </div>
          </div>
        </section>

        <section className="block" id="services">
          <div className="wrap">
            <h2>What I do</h2>
            <p className="sub">
              Everything you need to get a website online and keep it running,
              from first idea to launch and beyond.
            </p>
            <div className="grid">
              {services.map((s) => (
                <div className="card" key={s.title}>
                  <div className="icon" aria-hidden="true">
                    {s.icon}
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="block" id="process">
          <div className="wrap">
            <h2>How it works</h2>
            <p className="sub">
              A simple process with no surprises. You always know what happens
              next.
            </p>
            <div className="steps">
              {steps.map((s) => (
                <div className="step" key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta" id="contact">
          <div className="wrap">
            <h2>Need a website? Let&apos;s talk.</h2>
            <p>
              Tell me about your project and I&apos;ll get back to you with a
              clear quote, usually within 24 hours.
            </p>
            <a href={`mailto:${EMAIL}?subject=Website%20project`} className="btn btn-primary">
              {EMAIL}
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <span>© {new Date().getFullYear()} VK Dev</span>
          <span>WordPress websites · Estonia</span>
        </div>
      </footer>
    </>
  );
}
