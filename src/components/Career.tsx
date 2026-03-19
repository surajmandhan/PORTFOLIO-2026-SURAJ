import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>QA Intern → QA Automation Trainee</h4>
                <h5>WebtechLearning - Web Education Academy</h5>
              </div>
              <h3 style={{ fontSize: "16px", whiteSpace: "nowrap" }}>2021</h3>
            </div>
            <p>
              Started career in Quality Assurance with strong fundamentals in manual and 
              automation testing. Gained hands-on experience in test case design, bug tracking, 
              and basic automation tools. Built a solid understanding of SDLC & STLC processes.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior Quality Analyst</h4>
                <h5>PROLAB Technologies</h5>
              </div>
              <h3 style={{ fontSize: "16px", whiteSpace: "nowrap" }}>2021 – 2022</h3>
            </div>
            <p>
              Worked on real-time web and application testing projects. Performed functional, 
              regression, and UI testing. Collaborated with development teams to ensure product 
              quality and stability.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Quality Analyst / Lead QA</h4>
                <h5>Henceforth Solutions Pvt Ltd</h5>
              </div>
              <h3 style={{ fontSize: "16px", whiteSpace: "nowrap" }}>2022 – 2023</h3>
            </div>
            <p>
              Handled end-to-end testing cycles for multiple projects. Led QA activities including 
              test planning, execution, and defect management. Ensured high-quality delivery through 
              API testing, database validation, and integration testing.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Quality Assurance Lead</h4>
                <h5>Base2Brand Infotech Pvt. Ltd.</h5>
              </div>
              <h3 style={{ fontSize: "16px", whiteSpace: "nowrap" }}>2024 – NOW</h3>
            </div>
            <p>
              Leading QA teams and managing complete testing lifecycle across web and eCommerce platforms. 
              Specialized in Shopify & Shopify Plus testing, CRM-based project validation, project planning, 
              and team leadership. Driving quality strategy, improving testing efficiency, and ensuring 
              seamless user experience in production-ready applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
