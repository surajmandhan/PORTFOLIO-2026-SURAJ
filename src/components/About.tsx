import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about" style={{ position: "relative", zIndex: 10 }}>
      <div className="about-me" style={{ color: "#ffffff" }}>
        <h3 className="title">About Me</h3>
        <p className="para">
          Senior QA Lead with 5+ years of experience in testing web, Android, and iOS applications. Skilled in manual testing, API testing, database validation, and end-to-end functional testing to ensure product quality.
          <br /><br />
          Strong technical background with the ability to support development, design, and automation efforts. Experienced with tools like JIRA, Postman, BrowserStack, and Agile methodologies.
          <br /><br />
          Focused on delivering reliable, high-quality products through collaboration and continuous improvement.
        </p>
      </div>
    </div>
  );
};

export default About;
