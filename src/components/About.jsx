import React from "react";
import "./About.css";
import theme_pattern from "../assets/theme_pattern.svg";
import profileimage from "../assets/profileimage.jpeg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-section">
        <div className="about-left">
          <img src={profileimage} alt="" height={670} />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p style={{fontSize:"20px", textAlign:"justify"}}>
              I'm Subaganesh P, a passionate and dedicated MERN Stack
              Developer with a strong foundation in building dynamic, scalable,
              and user-friendly web applications. With expertise in MongoDB,
              Express.js, React.js, and Node.js, I bring end-to-end solutions to
              life by integrating both frontend and backend technologies
              seamlessly.<br />
              Gained hands-on
              experience through my ongoing MERN Stack internship at Squash
              Apps, Coimbatore, where I contribute to real-world projects. I’m
              enthusiastic about solving complex challenges, learning new
              technologies, and collaborating with teams to create impactful
              digital experiences. Explore my portfolio to see the projects that
              showcase my technical skills and commitment to delivering quality
              solutions.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p> <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Node JS</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Express JS</p> <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Mongo DB</p> <hr style={{ width: "80%" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>Full Stack Certification</h1>
          <p>PUMOTECHNOVATION, COIMBATORE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>PROJECT COMPLETED</p>
        </div>
      </div>
    </div>
  );
};

export default About;
