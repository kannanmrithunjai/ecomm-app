//Imports Libraries and Dependencies
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Imports API Call
import { announce } from "../services/announcements"; //imports axios api for announcement

//Imports StyleSheet
import "./../styles/announcements.css";

const AnnouncementPage = () => {
  const [announcement, setAnnouncement] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getAnnouncement = async () => {
      try {
        const announcementInfo = await announce();
        setAnnouncement(announcementInfo);
      } catch (error) {
        console.log("Error in Retrieving Announcement");
      }
    };
    getAnnouncement();
  }, []);

  if (!announcement) {
    return <h1>Loading Announcements.!!</h1>;
  }

  const gotoHome = () => {
    navigate("/products");
  };

  return (
    <div>
      <div>
        <div className="announcement">
          <h1>{announcement.title}</h1>{" "}
        </div>
        <div className="announcement">
          <h2>{announcement.message}</h2>
        </div>
        <div className="announcement">
          <button className="homebutton" onClick={gotoHome}>
            Continue Shopping!
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementPage;
