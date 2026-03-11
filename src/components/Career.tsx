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
                <h4>AI/ML Intern</h4>
                <h5>Iprotechs</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed Agentic AI components, optimized RAG systems, and executed LLM fine-tuning using PyTorch. Supported deployment with Docker & Git.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BCG GenAI Job Simulation</h4>
                <h5>Forage</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Developed an AI-powered financial chatbot to extract insights from 10-K and 10-Q corporate reports using Python and pandas.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Masters in AI</h4>
                <h5>Brandenburgische Technische Universität</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Pursuing a Master's degree in Artificial Intelligence at Brandenburgische Technische Universität Cottbus-Senftenberg, Germany.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
