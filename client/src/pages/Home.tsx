/**
 * VERIDIAN CARE — Luminous Clinical Observatory
 * This page pairs an obsidian clinical command surface with emerald live-status signals,
 * glass layers, clear price disclosure, and deliberate reassurance at every decision point.
 */
import { useState } from "react";
import { toast } from "sonner";
import {
  Activity,
  ArrowRight,
  Check,
  ChevronRight,
  Clock3,
  HeartPulse,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
  UserRoundCheck,
  UsersRound,
} from "lucide-react";

const specialties = [
  { id: "nursing", name: "Skilled Nursing", sub: "Clinical visit", icon: Stethoscope },
  { id: "therapy", name: "Physical Therapy", sub: "Recovery session", icon: Activity },
  { id: "postop", name: "Post-Op Care", sub: "At-home support", icon: HeartPulse },
  { id: "wellness", name: "Elder Wellness", sub: "Preventive visit", icon: UsersRound },
];

const services = [
  {
    title: "Skilled Nursing",
    copy: "Focused, clinically directed visits for complex care needs at home.",
    price: "₹2,400",
    icon: Stethoscope,
    items: ["Vitals and symptom assessment", "Medication reconciliation", "Care-plan update for family"],
  },
  {
    title: "Post-Op Recovery",
    copy: "A composed recovery check-in with clear surgical aftercare guidance.",
    price: "₹2,800",
    icon: HeartPulse,
    items: ["Incision and dressing review", "Mobility and pain check", "Recovery milestone briefing"],
  },
  {
    title: "Physical Therapy",
    copy: "Personalized mobility support designed around the spaces you live in.",
    price: "₹2,600",
    icon: Activity,
    items: ["Functional movement screen", "Guided therapeutic exercise", "Home-safety recommendations"],
  },
  {
    title: "Elder Wellness",
    copy: "A restorative wellness visit that brings reassurance to everyday care.",
    price: "₹1,900",
    icon: Sparkles,
    items: ["Wellness and hydration review", "Fall-risk observation", "Family caregiver guidance"],
  },
];

const careJourney = [
  { step: "01", kicker: "Care brief", title: "Tell us what matters now", copy: "Share the clinical need, preferred window, and any care-plan notes in under two minutes." },
  { step: "02", kicker: "Clinical match", title: "A licensed fit, not a generic handoff", copy: "Our dispatch team pairs your request with the right licensed clinician and verifies availability." },
  { step: "03", kicker: "At-home visit", title: "Care arrives prepared", copy: "Your clinician arrives with the necessary sterile supplies and a clear plan for the visit." },
  { step: "04", kicker: "Continued clarity", title: "A concise care summary follows", copy: "Receive an easy-to-review update, next-step guidance, and coordination for follow-on support." },
];

const timeSlots = ["Today · 3:30 PM", "Today · 5:15 PM", "Tomorrow · 9:00 AM"];

export default function Home() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("nursing");
  const [selectedTime, setSelectedTime] = useState(timeSlots[0]);

  const bookCare = () => {
    const chosen = specialties.find((item) => item.id === selectedSpecialty)?.name ?? "care visit";
    toast("Care request prepared", {
      description: `${chosen} · ${selectedTime}. This demonstration booking console is ready to connect to your intake workflow.`,
    });
  };

  const goToBooking = () => {
    document.getElementById("care-console")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="site-shell">
      <div className="aurora-hero" aria-hidden="true" />
      <div className="aurora-orb orb-one" aria-hidden="true" />
      <div className="aurora-orb orb-two" aria-hidden="true" />

      <div className="top-bar">
        <div className="top-bar-inner">
          <div className="status-line"><span className="live-dot" /><strong>Live dispatch radar</strong><span>Springfield clinical network online</span></div>
          <a className="hotline" href="tel:5550192834" aria-label="Call clinical support at 555 019 2834"><Phone size={12} /> Clinical support (555) 019-2834</a>
        </div>
      </div>

      <div className="page-frame">
        <div className="nav-wrap">
          <header className="nav-glass">
            <a className="brand" href="#top" aria-label="Veridian Care home">
              <img className="brand-mark" src="/manus-storage/veridian-logo_7e9a8104.png" alt="" />
              <span className="brand-copy"><b>VERIDIAN</b><span>CARE</span></span>
            </a>
            <nav className="nav-links" aria-label="Primary navigation">
              <a href="#services">Care services</a>
              <a href="#journey">How it works</a>
              <a href="#clinician">Our clinicians</a>
            </nav>
            <button className="shimmer-button" onClick={goToBooking}><span>Book Care</span><ArrowRight size={14} /></button>
          </header>
        </div>

        <main id="top">
          <section className="hero" aria-labelledby="hero-title">
            <div className="hero-grid">
              <div className="hero-intro">
                <div className="eyebrow fade-in"><span className="live-dot" /> State-licensed clinical care network <span>•</span> Springfield</div>
                <h1 id="hero-title" className="fade-in delay-1">Compassionate, Expert Healthcare <em>in the Comfort</em> of Your Home.</h1>
                <p className="hero-description fade-in delay-2">Private, clinically coordinated visits led by licensed professionals—so the people you love can receive focused care without leaving the places that restore them.</p>
              </div>
              <aside className="hero-aside fade-in delay-3" aria-label="Current dispatch availability">
                <span className="aside-label">Current dispatch window</span>
                <span className="aside-big">Today, from 3:30 PM</span>
                <p className="aside-caption">Live availability is verified by our clinical coordination desk.</p>
              </aside>
            </div>

            <section id="care-console" className="booking-console" aria-labelledby="booking-title">
              <div className="console-top">
                <div>
                  <p className="console-kicker">Direct booking console</p>
                  <h2 id="booking-title" className="console-title">Select the care your home needs today.</h2>
                </div>
                <div className="on-call"><span className="live-dot" /><span>12 clinicians on call</span><span>Updated now</span></div>
              </div>
              <div className="specialty-grid">
                {specialties.map((specialty) => {
                  const Icon = specialty.icon;
                  const active = selectedSpecialty === specialty.id;
                  return (
                    <button key={specialty.id} className={`specialty-card ${active ? "active" : ""}`} onClick={() => setSelectedSpecialty(specialty.id)} aria-pressed={active}>
                      <span className="specialty-icon"><Icon size={16} strokeWidth={1.8} /></span>
                      <span className="specialty-name">{specialty.name}</span>
                      <span className="specialty-sub">{specialty.sub}</span>
                      <Check className="selection-check" size={15} strokeWidth={2.5} />
                    </button>
                  );
                })}
              </div>
              <div className="console-bottom">
                <div className="time-list" aria-label="Available appointment times">
                  {timeSlots.map((time) => <button key={time} onClick={() => setSelectedTime(time)} className={`time-chip ${selectedTime === time ? "active" : ""}`} aria-pressed={selectedTime === time}>{time}</button>)}
                </div>
                <button className="shimmer-button book-button" onClick={bookCare}><span>Reserve a care slot</span><ArrowRight size={14} /></button>
              </div>
            </section>

            <div className="metrics-ribbon" aria-label="Veridian Care quality metrics">
              <div className="metric"><span className="metric-value">100% Licensed RNs</span><span className="metric-label">Clinically verified</span></div>
              <div className="metric"><span className="metric-value">4.98★ Quality Score</span><span className="metric-label">Care excellence</span></div>
              <div className="metric"><span className="metric-value">Same-Day Dispatch</span><span className="metric-label">When available</span></div>
              <div className="metric"><span className="metric-value">HIPAA Compliant</span><span className="metric-label">Privacy by design</span></div>
            </div>
          </section>

          <section id="clinician" className="clinician-section" aria-labelledby="clinician-title">
            <div className="clinician-layout">
              <div>
                <span className="section-kicker">The person behind the plan</span>
                <h2 id="clinician-title" className="section-heading">Human expertise, with the clinical rigor your care deserves.</h2>
                <p className="section-body">Every visit is shaped by real clinical judgment, respectful in-home conduct, and an exact record of what happens next. Your care is never an anonymous dispatch.</p>
                <div className="clinician-proof">
                  <span className="proof-chip"><ShieldCheck size={13} /> State license verified</span>
                  <span className="proof-chip"><Syringe size={13} /> Sterile kit certified</span>
                  <span className="proof-chip"><UserRoundCheck size={13} /> Identity checked</span>
                </div>
              </div>
              <div className="portrait-frame">
                <div className="portrait-glow" aria-hidden="true" />
                <div className="portrait-card">
                  <img className="portrait-image" src="/manus-storage/veridian-clinician-portrait_caf58436.jpg" alt="David Vance, a Veridian Care registered nurse" />
                  <div className="license-tag"><small>Verified profile</small><b>State Lic. #RN-88492</b></div>
                  <div className="profile-caption">
                    <div><p className="person-name">David Vance, RN</p><p className="person-meta">Lead clinician · Acute & post-op care</p></div>
                    <span className="verified-badge" aria-label="Verified clinician"><ShieldCheck size={18} /></span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="services" className="services-section" aria-labelledby="services-title">
            <div className="services-head">
              <div><span className="section-kicker">Concierge clinical services</span><h2 id="services-title" className="section-heading">Clear care, clear pricing, no hidden coordination fees.</h2></div>
              <p className="services-note">Every service includes a 60-minute in-home visit, clinically appropriate bedside care, and a concise follow-up record.</p>
            </div>
            <div className="service-grid">
              {services.map((service) => {
                const Icon = service.icon;
                return <article className="service-card" key={service.title}>
                  <span className="service-icon"><Icon size={20} strokeWidth={1.7} /></span>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-copy">{service.copy}</p>
                  <div className="price-row"><span className="duration-tag">60 Mins Visit</span><span className="price">{service.price} <small>upfront</small></span></div>
                  <ul className="care-list">{service.items.map((item) => <li key={item}><Check size={12} strokeWidth={2.5} />{item}</li>)}</ul>
                  <span className="card-trace" aria-hidden="true" />
                </article>;
              })}
            </div>
          </section>

          <section id="journey" className="journey-section" aria-labelledby="journey-title">
            <div className="journey-top">
              <div><span className="section-kicker">A care journey with continuity</span><h2 id="journey-title" className="section-heading">From the first call to the next calm step.</h2></div>
              <p className="journey-caption">A clear, clinician-led rhythm that gives families confidence without asking them to manage every detail.</p>
            </div>
            <div className="journey-track">
              {careJourney.map((item) => <article className="journey-item" key={item.step}>
                <span className="journey-number">{item.step}</span>
                <div className="journey-content"><span className="journey-step">{item.kicker}</span><h3 className="journey-title">{item.title}</h3><p className="journey-copy">{item.copy}</p></div>
              </article>)}
            </div>
          </section>

          <section className="care-detail" aria-labelledby="detail-title">
            <div className="care-detail-card">
              <div className="care-detail-photo" aria-hidden="true" />
              <div className="care-detail-content">
                <span className="section-kicker">The Veridian standard</span>
                <h3 id="detail-title">Clinical attention that respects the feeling of home.</h3>
                <p>We pair exacting clinical protocol with unhurried human presence—providing the information, hygiene, and continuity that make an at-home visit feel considered from arrival to follow-up.</p>
                <a className="care-detail-link" href="#care-console">See today’s available care <ChevronRight size={14} /></a>
              </div>
            </div>
          </section>
        </main>
      </div>

      <footer className="footer">
        <div className="emergency-banner"><div className="emergency-inner"><HeartPulse size={14} /> If you are experiencing a life-threatening emergency, call 911 immediately. Veridian Care is not an emergency response service.</div></div>
        <div className="footer-main">
          <div className="footer-grid">
            <div><a className="brand" href="#top"><img className="brand-mark" src="/manus-storage/veridian-logo_7e9a8104.png" alt="" /><span className="brand-copy"><b>VERIDIAN</b><span>CARE</span></span></a><p className="footer-about">Private, licensed in-home clinical care for the moments that deserve both expertise and attention.</p></div>
            <div><h3 className="footer-heading">Care access</h3><div className="footer-links"><a href="#care-console">Book a visit</a><a href="#services">Care services</a><a href="tel:5550192834">Clinical support</a></div></div>
            <div><h3 className="footer-heading">Patient portal</h3><div className="footer-links"><a href="#top" onClick={(event) => { event.preventDefault(); toast("Portal access", { description: "The patient portal is a demonstration link in this landing page." }); }}>Visit history</a><a href="#top" onClick={(event) => { event.preventDefault(); toast("Portal access", { description: "The care-plan portal is a demonstration link in this landing page." }); }}>Care plans</a><a href="#top" onClick={(event) => { event.preventDefault(); toast("Portal access", { description: "Secure messages are not connected in this landing page." }); }}>Secure messages</a></div></div>
            <div><h3 className="footer-heading">Policies</h3><div className="footer-links"><a href="#top" onClick={(event) => { event.preventDefault(); toast("Policy notice", { description: "Privacy and consent pages can be connected to your legal documentation." }); }}>Privacy & consent</a><a href="#top" onClick={(event) => { event.preventDefault(); toast("Policy notice", { description: "Accessibility documentation can be connected here." }); }}>Accessibility</a><a href="#top" onClick={(event) => { event.preventDefault(); toast("Policy notice", { description: "Terms can be connected to your legal documentation." }); }}>Terms of care</a></div></div>
          </div>
          <div className="footer-bottom"><span>© 2026 Veridian Care Network</span><div className="compliance-row"><span className="compliance-seal">HIPAA COMPLIANT</span><span className="compliance-seal">STATE LICENSED</span><span className="compliance-seal">CLINICAL OVERSIGHT</span></div></div>
        </div>
      </footer>
    </div>
  );
}

