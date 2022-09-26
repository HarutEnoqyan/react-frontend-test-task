import React from "react";
import { Link } from "react-router-dom";
import './styles.scss';

export const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-heading pt-28 px-27">
        <h1 className="text-center mb-16">
        Imagine if 
        <span className="d-block text-main-gradient">Snapchat</span>
        had events.
        </h1>
        <p className="landing-subtitle fw-light text-gray-600 text-center">
        Easily host and share events with your friends across any social media.
        </p>
        <div className="text-center landing-img">
          <img src="images/home-cover.svg" width="166" className="img-fluid" alt="Home Cover"/>
        </div>
        <div className="mt-34 text-center">
          <Link to='/create' className="btn btn-dark bg-main-gradient border-0 align-items-center">
            <img src="images/celebrate.svg" alt="celebrate icon" className="me-2"/>
            Create my event
          </Link>
        </div>
      </div>
    </div>
  )
}