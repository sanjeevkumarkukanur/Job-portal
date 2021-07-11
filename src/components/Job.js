import React from "react";
import "./Job.css";

const Job = ({ details }) => {
  return (
    <div className="job">
      <div className="title">
        <h2>{details.title}</h2>
      </div>
      <div className="details">
        <div className="company">
          <img src={details.imageUrl} alt="company logo" />
          <p>{details.company}</p>
        </div>
        <p>{details.jobType}</p>
        <p>
          Experience: <span>{details.experience}</span>{" "}
        </p>
        <p>
          Salary: <span>{details.salary}</span>
        </p>
        <p>
          Skills: <span>{details.skills}</span>{" "}
        </p>
        <p>{details.description}</p>
      </div>
    </div>
  );
};

export default Job;
