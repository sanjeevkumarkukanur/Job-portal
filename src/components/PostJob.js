import React, { useState } from "react";
import "./PostJob.css";
import db from "../firebase";
import firebase from "firebase";

const PostJob = () => {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [skills, setSkills] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("");
  const [jobType, setJobType] = useState("");
  const [experience, setExperience] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("jobs").add({
      title: title,
      company: company,
      skills: skills,
      description: description,
      salary: salary,
      jobType: jobType,
      experience: experience,
      imageUrl: imageUrl,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setTitle("");
    setCompany("");
    setSkills("");
    setDescription("");
    setExperience("");
    setJobType("");
  };

  return (
    <aside className="sidebar">
      <h2>POST A JOB</h2>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="title">Title:</label>
          <input
            placeholder="Job Title"
            id="title"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="company">Company:</label>
          <input
            placeholder="Company Name"
            id="company"
            required
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="logo">Logo Url:</label>
          <input
            placeholder="Logo Url"
            id="image"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="skills">Skills:</label>
          <input
            placeholder="Required Skills"
            id="skills"
            required
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="salary">Salary:</label>
          <input
            placeholder="Salary"
            id="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="jobType">Job Type:</label>
          <input
            placeholder="Part Time/ Full Time"
            id="jobType"
            required
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="experience">Experience:</label>
          <input
            placeholder="Experience"
            id="experience"
            required
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </div>

        <div className="desc">
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <button className="submit">POST</button>
      </form>
    </aside>
  );
};

export default PostJob;
