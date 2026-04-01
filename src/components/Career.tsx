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
                <h4>Web Developer</h4>
                <h5>Algonive</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Boosted user engagement by 25% through designing responsive, visually appealing interfaces. Developed web applications with HTML, CSS, JavaScript, ensuring cross-device compatibility.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Problem Solving & Data Structures</h4>
                <h5>LeetCode</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Proven problem-solving skills demonstrated through solving over 250 LeetCode problems across topics such as arrays, strings, recursion, trees, and dynamic programming. Consistently achieved Daily Coding Challenge Badges in January and February 2026.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BCA</h4>
                <h5>Bhagwati Institute Of Technology & Science</h5>
              </div>
              <h3>2023-26</h3>
            </div>
            <p>
              Secured 2nd position in "Website Development Competition". Achieved 1st place in Hackathon and "Debug the Code" challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
