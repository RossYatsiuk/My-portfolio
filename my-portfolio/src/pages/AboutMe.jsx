import './AboutMe.css';

function AboutMe() {
  return (
    <div className="about-container">
      <div className="top-section">
        <div className="text-block">
          <h1>About Me</h1>
          <p>
          <b>HEY</b>, There is one of my <i>ProjectCatalog</i> and here I wanna tell you about me and my story how IT programmer
          </p>
          <p>
             Have a dream, to become a successed Developer in these spheres such as: <i>Dev-Ops, Front-End</i> <span> Develop everyday and practice to do something new</span>
          </p>
        </div>
        <img src="/images/My-Photo.png" alt="My Photo" className="about-photo" />
      </div>

      <div className="about-columns">
        <div className="left-column">
          <h2>My Projects</h2>
          <div className="project-category">
            <h3>HTML + CSS</h3>
            <div className="project-links">
              <a href="https://github.com/RossYatsiuk/Training-parallax" target="_blank" rel="noreferrer">Parallax Effect v1</a>
              <a href="https://github.com/RossYatsiuk/Website-McLaren-v1" target="_blank" rel="noreferrer">McLAREN website v 0.1</a>
              <a href="https://porsche-scr0ll.netlify.app/" target="_blank" rel="noreferrer">PorscheScroll</a>
            </div>
          </div>

          <div className="project-category">
            <h3>JavaScript</h3>
            <div className="project-links">
              <a href="https://github.com/RossYatsiuk/react-props" target="_blank" rel="noreferrer">ReactProps</a>
              <a href="https://github.com/RossYatsiuk/js-DOM1" target="_blank" rel="noreferrer">js-DOM</a>
            </div>
          </div>

          <div className="project-category">
            <h3>React</h3>
            <div className="project-links">
              <a href="https://github.com/RossYatsiuk/usestate" target="_blank" rel="noreferrer">Registration form</a>
            </div>
          </div>
        </div>

        <div className="right-column">
          <h2>My SoftSkills</h2>
          <ul className="values-list">
            <li>Communicationable</li>
            <li>English: upper intermediate - advanced (B2,C1)</li>
            <li>Polish: Advanced (C1)</li>
            <li>Responsible and managable</li>
            <li>Friendly person</li>
            <li>Motivated to challenge</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
