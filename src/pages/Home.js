import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Job from "../components/Job";
import PostJob from "../components/PostJob";
import db from "../firebase";
import "./Home.css";

function Home() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    db.collection("jobs")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setJobs(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="home">
      <Navbar />
      <div className="main">
        <div className="jobs">
          {jobs.map((job) => (
            <Job key={job.id} details={job.data} />
          ))}
        </div>
        <PostJob />
      </div>
    </div>
  );
}

export default Home;
