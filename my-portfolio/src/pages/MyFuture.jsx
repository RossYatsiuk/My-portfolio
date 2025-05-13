import './MyFuture.css';

function MyFuture() {
  return (
    <div className="future-container">
      <h1>My Future — The Path of Growth and Self-Realization</h1>

      <section className="dream-vision">
        <h2>Vision of the Future</h2>
        <p>
          In the coming years, I strive to become a highly skilled developer who not only writes clean code,
          but also builds innovative solutions that improve people's lives.
        </p>
      </section>

      <section className="goal-grid">
        <h2>Key Goals</h2>
        <ul>
          <li><strong>📚 Education:</strong> Complete training in React, Next.js, and databases</li>
          <li><strong>💼 Practice:</strong> Join real freelance or open-source projects</li>
          <li><strong>🚀 Product:</strong> Launch my own useful web service or app</li>
        </ul>
      </section>

      <section className="development-steps">
        <h2>Development Timeline</h2>
        <div className="timeline-container">
          <div className="timeline-item">
            <span className="year">2025</span>
            <div className="timeline-content">
              <p>Frontend: HTML, CSS, JavaScript, React. First pet projects.</p>
            </div>
          </div>
          <div className="timeline-item">
            <span className="year">2026</span>
            <div className="timeline-content">
              <p>Backend: Node.js, MongoDB, Express. Deploying to server.</p>
            </div>
          </div>
          <div className="timeline-item">
            <span className="year">2027</span>
            <div className="timeline-content">
              <p>Full-fledged web platform with real users and monetization.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="inspiration">
        <h2>What Inspires Me</h2>
        <blockquote>
          "Every day is a new chance to become a better version of yourself." — Me
        </blockquote>

        <div className="memes-container">
          <div className="meme-item">
            <img
              src="/images/meme-1.png"
              alt="Meme 1"
              className="inspiration-image"
            />
          </div>
          <div className="meme-item">
            <img
              src="/images/meme-2.png"
              alt="Meme 2"
              className="inspiration-image"
            />
          </div>
          <div className="meme-item">
            <img
              src="/images/meme-3.png"
              alt="Meme 3"
              className="inspiration-image"
            />
          </div>
        </div>
      </section>

      <section className="dream-job">
        <h2>Dream Job</h2>
        <p>
         My Future Job, Like a: Sit in a comfortable sofa in NY and drink warm tea with the laptop
        </p>
      </section>
    </div>
  );
}

export default MyFuture;