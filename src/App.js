import './App.css';

function App() {
  return (
    <div className="portfolio">
      <header>
        <h1>Ashmitha - R5</h1>
        <p>B.Tech Student | MERN Stack Developer</p>
      </header>

      <section>
        <h2>About Me</h2>
        <p>Hi, I'm Ashmitha (Roll No: R5) from Hyderabad. I'm a B.Tech student passionate about web development and building real-world MERN projects.</p>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          <li>Frontend: React.js, HTML, CSS, JavaScript</li>
          <li>Backend: Node.js, Express.js</li>
          <li>Database: MongoDB</li>
          <li>Tools: Git, Vercel, Render</li>
        </ul>
      </section>

      <section>
        <h2>Projects</h2>
        <div className="project-card">
          <h3>1. MERN To-Do Application</h3>
          <p>Full-stack app for task management - Add/Edit/Delete tasks. Deployed on Vercel + Render.</p>
        </div>
        <div className="project-card" style={{marginTop: '10px'}}>
          <h3>2. Personal Portfolio - R5</h3>
          <p>Responsive personal portfolio showcasing my skills and projects.</p>
        </div>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Roll No: R5</p>
        <p>Email: ashmitha.r5@example.com</p>
        <p>Hyderabad, Telangana</p>
      </section>

      <footer>© 2026 Ashmitha R5 - Portfolio Project</footer>
    </div>
  );
}
export default App;