export default function Home() {
  return (
    <>
      <section className="hero">
        <h1 style={{ color: "#dc2626", fontSize: "3rem", fontWeight: "800" }}>
          IronPulse Coaching
        </h1>
        <p style={{ maxWidth: "600px", margin: "20px auto", color: "#ccc" }}>
          Motivational. Supportive. Results-driven fitness coaching.
        </p>
        <a href="#programs" className="btn">View Programs</a>
      </section>

      <section id="programs" className="container">
        <h2 style={{ color: "#dc2626", textAlign: "center", fontSize: "2.2rem" }}>
          Training Options
        </h2>

        <div className="grid">
          <div className="card">
            <h3>Workout Programs</h3>
            <p>Structured programs built for strength, fat loss, and discipline.</p>
            <a className="btn">Buy Now</a>
          </div>

          <div className="card">
            <h3>Nutrition Coaching</h3>
            <p>Simple, sustainable nutrition guidance that fits your lifestyle.</p>
            <a className="btn">Buy Now</a>
          </div>

          <div className="card">
            <h3>1-on-1 Coaching</h3>
            <p>Direct access, accountability, and personalized programming.</p>
            <a className="btn">Apply Now</a>
          </div>
        </div>
      </section>

      <footer>
        © {new Date().getFullYear()} IronPulse Coaching. All rights reserved.
      </footer>
    </>
  );
}
