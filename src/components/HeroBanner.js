import React from "react";
import { Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/login.css"

const userEmail = localStorage.getItem("auth")

function HeroBanner() {
  return (
    <section id="home">
      <Container>
        <Row style={{ display: "flex" }}>
          <div className="home-text">
            <div className="section-text__title-big">
              About Experiment
            </div>
            <div className="section-text__body">
              <h1> First of all </h1>
              Thank you for participating our experiment.
              This experiment aim to measure the engagement levels while conducting online video calls.
              Your task is to join the meeting and discuss about the topic presented by the experiment organizer.
              The experiment is not forced to participate and can be opt-out anytime when you feel uncomfortable.
              <h1> Experiment Details </h1>
              Our experiment will collect your facial recordings.
              The screenshot may be used for the scientific publications or in slide.
              You will be joining three meetings maximum.
              Each time the topic will be different.
              Once you finish the meeting we will ask a post-survey to fill-out about the meeting.
              The survey will be in google form.
              <h1> Let's begin </h1>
              To begin our experiment, we would like to ask you to login to this application.
              Please click the button below.
              Once you finish login or signup, tell experiment conductor the situation.
            </div>
            <a href="#download">
              <Link to='/login' style={{ color: "whitesmoke" }}>
                <button className="login-btn">Login / Signup</button>
              </Link>
            </a>
            <a href="#download">
              {!userEmail == 1 ? (<div></div>) : (
                <Link to='/meeting' style={{ color: "whitesmoke" }}><button className="call-btn">Create Room</button></Link>
              )}
            </a>
          </div>
          <div className="section-image">
            <img className="img-new" src="https://www.dingtone.me/images/download/img_download@2x.png" alt="App Preview" />
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default HeroBanner;
