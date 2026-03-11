import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1 style={{ fontSize: "clamp(20px, 3.5vw, 45px)", lineHeight: 1.1 }}>
              PRAVEEN KUMAR
              <br />
              <span>CHILUKURI</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>An Agentic AI</h3>
            <div className="landing-title-wrapper">
              <h2 className="landing-info-h2">
                <div className="landing-h2-1">ENGINEER & INNOVATOR</div>
              </h2>
              <h2 className="landing-title-top">
                <div className="landing-h2-info">ENGINEER & INNOVATOR</div>
              </h2>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
