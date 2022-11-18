import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./DashBoard.css";
import headerImage from "./images/header.png";
import bgImg from "./images/bg.jpg"
import demoVideo from "./demo.mp4";
import page1bg from "./images/page1bg.jpg";
import page2bg from "./images/page2bg.jpg";
import page3bg from "./images/page3bg.jpg";

import pageImage1 from "./images/page1Image.png";
import pageImage2 from "./images/page2Image.png";
import pageImage3 from "./images/page3Image.png";
import videoBgImage from "./images/videobg.jpg";

import { Link } from "react-router-dom";

const DashBoard = () => {
  return (
    <div className="dashboard">
      <Navbar active="home" />
      <main className="dashboard-main">
        <DashBoardInfo bgImage={bgImg} title="Online Examination Portal" desc={["A Web app built using react for frontend & redux for state management,", " Node JS & Express for backend with MongoDB as database,", "where teachers can conduct MCQ exams."]} image={headerImage} />
        <DashBoardVideo />
        <DashBoardInfo bgImage={page1bg} align="right" title="Different Dashboards for Different Roles" desc={["The application has separate dashboards for students", "and teachers and allows CRUD operations depending on the role."]} image={pageImage1} />
        <DashBoardInfo bgImage={page2bg} align="left" title="No worries if you forget Passwords" desc={["An email service is integrated with this application", "to facilitate forgot password functionality."]} image={pageImage2} />
        <DashBoardInfo bgImage={page3bg} align="right" title="Calculate marks Quickly" desc={["The teacher can see the number of students who took", "the exam and also calculate the marks in one click!"]} image={pageImage3} />
      </main>
      <footer>
        <span>Created by Prasanna Gramopadhye</span>
        <span className="footer-horizontal-bar">|</span>
        <a href="https://github.com/gramo37">Github</a>
        <span className="footer-horizontal-bar">|</span>
        <a href="https://www.linkedin.com/in/prasanna-gramopadhye-1791701b9/">LinkedIn</a>
        <span className="footer-horizontal-bar">|</span>
        <a href="https://twitter.com/gramopadhye37">Twitter</a>
      </footer>
    </div>
  );
};

const DashBoardInfo = ({ bgImage, title, desc, image, align }) => {

  const [show, setShow] = useState(true);

  return (
    <header style={{ backgroundImage: `url(${bgImage})` }} className="dashboard-header">
      <div className="dashboard-overlay"></div>
      <div className="dashboard-header-container" style={{ flexDirection: `${align == "left" ? "row-reverse" : "row"}` }}>
        <div className={`dashboard-header-image`}>
          <img className={`${show ? "showHeaderContent" : "hideHeaderImg"}`} src={image} alt="Header-Image" />
        </div>
        <div className={`${show ? "showHeaderContent" : "hideHeaderContent"} dashboard-header-content`}>
          <h1>{title}</h1>
          {desc?.map((item) => {
            return (<p>{item}</p>)
          })}
          <div className="loginToProject">
            <Link to="/login"> Check Out Now !</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

const DashBoardVideo = () => {
  return (
    <section style={{ backgroundImage: `url(${videoBgImage})` }} className="dashboard-demo-video">
      <video width="100vw" height="100vh" autoPlay loop muted >
        <source src={demoVideo} type="video/mp4" />
      </video>
    </section>
  )
}

export default DashBoard;
