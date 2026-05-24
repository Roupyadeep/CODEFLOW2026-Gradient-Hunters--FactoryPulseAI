import { Link } from "react-router-dom";

function Home() {
  // Check if user is logged in
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const userData = JSON.parse(localStorage.getItem("currentUser") || "{}");

  return (
    <div style={styles.container}>
      {/* NAVBAR */}
      <nav style={styles.navbar}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img
            src="/logo.jpeg"
            alt="FactoryPULSE AI Logo"
            style={styles.logoImage}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/40x40?text=🏭";
            }}
          />
          <h2 style={styles.logo}>
            FactoryPULSE AI
          </h2>
        </div>

        <div style={styles.navLinks}>
          <Link to="/about" style={styles.link}>About</Link>
          <Link to="/contact" style={styles.link}>Contact</Link>
          
          {isLoggedIn ? (
            <>
              <span style={styles.userName}>👋 {userData.name?.split(' ')[0] || 'User'}</span>
              <Link to="/dashboard" style={styles.dashboardBtn}>
                Dashboard
              </Link>
              <button 
                onClick={() => {
                  localStorage.removeItem("isLoggedIn");
                  localStorage.removeItem("currentUser");
                  window.location.href = "/";
                }} 
                style={styles.logoutBtn}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" style={styles.loginBtn}>
                Login
              </Link>
              <Link to="/register" style={styles.registerBtn}>
                Register
              </Link>
            </>
          )}
        </div>
      </nav>

      {/* HERO SECTION */}
      <section style={styles.hero}>
        <div style={styles.heroInner}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>
              AI-Powered Manufacturing Analytics
            </h1>
            <p style={styles.heroSubtitle}>
              Monitor equipment in real-time, predict failures before they happen, and optimize
              production with actionable, explainable AI insights tailored for factories.
            </p>

            <div style={{ display: "flex", gap: 12, marginTop: 18 }}>
              {isLoggedIn ? (
                <Link to="/dashboard">
                  <button style={styles.primaryButton}>Open Dashboard</button>
                </Link>
              ) : (
                <Link to="/login">
                  <button style={styles.primaryButton}>Sign in</button>
                </Link>
              )}
              <a href="#about" style={styles.secondaryButton}>Learn more</a>
            </div>
          </div>

          <div style={styles.heroVisual}>
            <img src="/src/assets/hero.png" alt="factory-visual" style={styles.heroImageFallback} onError={(e)=>{e.target.src = '/src/assets/hero.png'}} />
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section style={styles.statsSection}>
        <div style={styles.statCard}>
          <h1 style={styles.statNumber}>500+</h1>
          <p style={styles.statText}>Machines Connected</p>
        </div>
        <div style={styles.statCard}>
          <h1 style={styles.statNumber}>95%</h1>
          <p style={styles.statText}>Efficiency Rate</p>
        </div>
        <div style={styles.statCard}>
          <h1 style={styles.statNumber}>24/7</h1>
          <p style={styles.statText}>AI Monitoring</p>
        </div>
        <div style={styles.statCard}>
          <h1 style={styles.statNumber}>100+</h1>
          <p style={styles.statText}>Factories Supported</p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" style={styles.section}>
        <h2 style={styles.sectionTitle}>About FactoryPULSE AI</h2>
        <p style={styles.sectionText}>
          FactoryPULSE AI helps industries monitor machines,
          analyze production data, reduce downtime,
          optimize energy usage, and improve operational efficiency.
          Our platform leverages cutting-edge artificial intelligence
          to provide real-time insights and predictive analytics.
        </p>
      </section>

      {/* FEATURES SECTION */}
      <section style={styles.featuresSection}>
        <h2 style={styles.sectionTitle}>What We Offer</h2>
        <div style={styles.featuresGrid}>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>⚠️</div>
            <h3 style={styles.featureTitle}>Predictive Alerts</h3>
            <p style={styles.featureText}>Detect early signs of failure and schedule interventions before downtime occurs.</p>
          </div>

          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>📈</div>
            <h3 style={styles.featureTitle}>Production Forecasting</h3>
            <p style={styles.featureText}>Use historical and live data to forecast throughput and plan capacity.</p>
          </div>

          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🔧</div>
            <h3 style={styles.featureTitle}>Maintenance Scheduling</h3>
            <p style={styles.featureText}>Prioritize maintenance using risk scores and asset health metrics.</p>
          </div>

          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>📊</div>
            <h3 style={styles.featureTitle}>Real-time Analytics</h3>
            <p style={styles.featureText}>Interactive dashboards for KPIs, energy, and quality monitoring.</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={styles.ctaSection}>
        <div style={styles.ctaInner}>
          <div>
            <h2 style={styles.ctaTitle}>Start Predicting, Not Reacting</h2>
            <p style={styles.ctaText}>Schedule a demo or create an account to see immediate value from your data.</p>
          </div>
          <div>
            {!isLoggedIn ? (
              <Link to="/register"><button style={styles.ctaPrimary}>Get Started Free</button></Link>
            ) : (
              <Link to="/dashboard"><button style={styles.ctaPrimary}>Open Dashboard</button></Link>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerSection}>
            <h3 style={styles.footerTitle}>FactoryPULSE AI</h3>
            <p style={styles.footerText}>Smart Manufacturing Platform</p>
          </div>
          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>Quick Links</h4>
            <div style={styles.footerQuickLinks}>
              <Link to="/about" style={styles.footerLink}>About Us</Link>
              <span style={styles.footerLinkSeparator}>•</span>
              <Link to="/contact" style={styles.footerLink}>Contact</Link>
              <span style={styles.footerLinkSeparator}>•</span>
              <Link to="/login" style={styles.footerLink}>Login</Link>
            </div>
          </div>
          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>Contact</h4>
            <p>📧 <a href="https://mail.google.com/mail/?view=cm&fs=1&to=roupyadeepghosal@gmail.com" target="_blank" rel="noopener noreferrer" style={styles.footerLink}>roupyadeepghosal@gmail.com</a></p>
            <p>📧 <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vedikadatta1611@gmail.com" target="_blank" rel="noopener noreferrer" style={styles.footerLink}>vedikadatta1611@gmail.com</a></p>
            <p>📧 <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sd1898691@gmail.com" target="_blank" rel="noopener noreferrer" style={styles.footerLink}>sd1898691@gmail.com</a></p>
          </div>
        </div>
        <div style={styles.footerBottom}>
          © 2026 FactoryPULSE AI | Smart Manufacturing Platform | All Rights Reserved
        </div>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    background: "linear-gradient(135deg, #0f172a, #1e1b4b, #0f172a)",
    color: "white",
    minHeight: "100vh",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    overflowX: "hidden",
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 60px",
    background: "rgba(15, 23, 42, 0.95)",
    backdropFilter: "blur(10px)",
    position: "sticky",
    top: 0,
    zIndex: 100,
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    flexWrap: "wrap",
    gap: "20px",
  },

  logoImage: {
    width: "45px",
    height: "45px",
    borderRadius: "10px",
    objectFit: "cover",
  },

  logo: {
    fontSize: "28px",
    fontWeight: "bold",
    background: "linear-gradient(135deg, #60a5fa, #a855f7)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },

  navLinks: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    flexWrap: "wrap",
  },

  link: {
    color: "#e2e8f0",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: "500",
    transition: "color 0.3s",
  },

  loginBtn: {
    padding: "8px 20px",
    background: "transparent",
    border: "1px solid #3b82f6",
    color: "#60a5fa",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "14px",
    transition: "all 0.3s",
  },

  registerBtn: {
    padding: "8px 20px",
    background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
    color: "white",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "14px",
    transition: "transform 0.3s",
  },

  dashboardBtn: {
    padding: "8px 20px",
    background: "linear-gradient(135deg, #10b981, #059669)",
    color: "white",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "14px",
  },

  logoutBtn: {
    padding: "8px 20px",
    background: "rgba(239, 68, 68, 0.2)",
    border: "1px solid #ef4444",
    color: "#fca5a5",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "14px",
    transition: "all 0.3s",
  },

  userName: {
    color: "#60a5fa",
    fontSize: "14px",
    fontWeight: "500",
  },

  hero: {
    minHeight: "72vh",
    display: "flex",
    alignItems: "center",
    padding: "60px 20px",
    background: "linear-gradient(180deg,#071025 0%, #0f172a 60%)",
    position: "relative",
  },

  heroInner: {
    display: "flex",
    gap: 32,
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: 1200,
    margin: "0 auto",
    width: "100%",
  },

  heroContent: {
    flex: 1,
    color: "#f8fafc",
    maxWidth: 680,
  },

  heroTitle: {
    fontSize: "clamp(30px, 4.5vw, 48px)",
    marginBottom: "12px",
    fontWeight: 800,
    lineHeight: "1.08",
  },

  heroSubtitle: {
    fontSize: 18,
    color: "#cbd5e1",
    lineHeight: 1.6,
    marginTop: 12,
  },

  heroVisual: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 260,
  },

  heroImageFallback: {
    width: 420,
    maxWidth: "100%",
    borderRadius: 12,
    boxShadow: "0 30px 60px rgba(2,6,23,0.6)",
  },

  primaryButton: {
    background: "linear-gradient(90deg,#3b82f6,#8b5cf6)",
    color: "#fff",
    padding: "12px 18px",
    borderRadius: 10,
    border: "none",
    fontWeight: 700,
    cursor: "pointer",
  },

  secondaryButton: {
    background: "transparent",
    color: "#cbd5e1",
    padding: "12px 16px",
    borderRadius: 10,
    border: "1px solid rgba(255,255,255,0.06)",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
  },

  statsSection: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "25px",
    padding: "60px 40px",
    maxWidth: "1200px",
    margin: "auto",
  },

  statCard: {
    background: "rgba(255,255,255,0.05)",
    padding: "30px",
    borderRadius: "20px",
    textAlign: "center",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.1)",
    transition: "transform 0.3s",
  },

  statNumber: {
    fontSize: "48px",
    fontWeight: "bold",
    background: "linear-gradient(135deg, #60a5fa, #a855f7)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "10px",
  },

  statText: {
    color: "#94a3b8",
    fontSize: "16px",
  },

  section: {
    padding: "70px 40px",
    textAlign: "center",
    maxWidth: "1200px",
    margin: "auto",
  },

  sectionTitle: {
    fontSize: "clamp(28px, 4vw, 40px)",
    marginBottom: "20px",
    fontWeight: "bold",
  },

  sectionText: {
    fontSize: "18px",
    color: "#cbd5e1",
    maxWidth: "800px",
    margin: "auto",
    lineHeight: "1.8",
  },

  featuresSection: {
    padding: "70px 40px",
    background: "rgba(255,255,255,0.01)",
  },

  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 18,
    marginTop: 22,
  },

  featureCard: {
    background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
    border: "1px solid rgba(255,255,255,0.04)",
    padding: 18,
    borderRadius: 12,
    textAlign: "left",
    minHeight: 140,
  },

  featureIcon: {
    width: 56,
    height: 56,
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 26,
    background: "linear-gradient(90deg,#eef2ff, #e9d5ff)",
    color: "#0f172a",
    marginBottom: 12,
  },

  featureTitle: {
    fontSize: 16,
    fontWeight: 700,
    margin: "6px 0",
  },

  featureText: {
    fontSize: 13,
    color: "#cbd5e1",
    marginTop: 6,
  },

  ctaSection: {
    padding: "40px 20px",
    maxWidth: "1200px",
    margin: "40px auto",
    background: "linear-gradient(180deg, rgba(15,23,42,0.6), rgba(15,23,42,0.4))",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.03)",
  },

  ctaInner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
  },

  ctaTitle: {
    fontSize: "clamp(22px, 3vw, 32px)",
    marginBottom: "8px",
    fontWeight: 700,
  },

  ctaText: {
    fontSize: "16px",
    color: "#cbd5e1",
    marginBottom: "8px",
  },

  ctaPrimary: {
    background: "linear-gradient(90deg,#06b6d4,#3b82f6)",
    color: "#fff",
    padding: "12px 20px",
    borderRadius: 10,
    border: "none",
    fontWeight: 700,
    cursor: "pointer",
  },

  footer: {
    paddingTop: 40,
    background: "linear-gradient(180deg,#071025, #051225)",
    color: "#e6eef8",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    overflowX: "hidden",
  },

  footerContent: {
    display: "flex",
    flexWrap: "wrap",
    gap: "30px",
    padding: "40px 60px 30px",
    maxWidth: "1200px",
    margin: "auto",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },

  footerSection: {
    width: "33%",
    minWidth: 220,
    marginBottom: 10,
  },

  footerTitle: {
    color: "#fff",
    marginBottom: "10px",
    fontSize: 16,
    fontWeight: 700,
  },

  footerText: {
    fontSize: "14px",
    color: "#cbd5e1",
  },

  footerLink: {
    color: "#9fd0ff",
    textDecoration: "none",
  },

  footerQuickLinks: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginTop: 6,
  },

  footerLinkSeparator: {
    color: "#7b8faa",
    margin: "0 6px",
  },

  footerBottom: {
    textAlign: "center",
    padding: "20px",
    borderTop: "1px solid rgba(255,255,255,0.04)",
    fontSize: "13px",
    color: "#94a3b8",
  },
};

// Add hover styles via style tag
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  a:hover {
    color: #60a5fa !important;
  }
  button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
  }
  .statCard:hover, .card:hover {
    transform: translateY(-5px);
  }
`;
document.head.appendChild(styleSheet);

export default Home;