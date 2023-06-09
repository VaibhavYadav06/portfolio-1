import React from "react";
import SocialMediaLinks from "./components/SocialMediaLinks";
import SvgBackground from "./components/SvgBackground";
import "./Frontpage.css";
import TypeWriterEffect from "react-typewriter-effect";

function Frontpage() {
  return (
    <>
      <div className="profile-container" id="home_page">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="profile-details-name">
              <p className="primary-text">
                Hello, I'M
                <span className="highlighted-text">Vaibhav yadav</span>
              </p>
            </div>
            <div className="profile-details-role">
              <span className="primary-text">
                <h1 style={{ display: "flex", gap: "6px" }}>
                  I am into
                  <span style={{ color: "#6d28d9" }}>
                    <TypeWriterEffect
                      multiTextLoop
                      cursorColor="#f3f4f6"
                      multiText={[
                        "Frontend Development",
                        "Commpetitive Programmer",
                        "Open-Source ",
                        "Data structures and algorithms",
                      ]}
                      multiTextDelay={1000}
                      typeSpeed={100}
                    />
                  </span>
                </h1>
                <span className="profile-role-tagline">
                  I make websites that are easy to use,and learn new things and
                  work well even as they grow. I pay close attention to every
                  little thing to make sure they work fast and are reliable.
                </span>
              </span>
              <div className="colz">
                <SocialMediaLinks />
              </div>
            </div>

            <div className="profile-options">
              <a href="#contact_page">
                <button className="btn primary-btn">Hire Me</button>
              </a>
              <a href="./vaibhav_resume.pdf" download>
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
          <div className="profile-picture">
            <div className="profile-picture-background"></div>
          </div>
        </div>
        <SvgBackground />
      </div>
    </>
  );
}

export default Frontpage;
