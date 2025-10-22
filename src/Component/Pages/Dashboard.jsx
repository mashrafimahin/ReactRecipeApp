// storage
import { getAuth } from "firebase/auth";
import app from "../../lib/Firebase";
import { fetchUserData } from "../../lib/FireStore";

// Styles
import classes from "../../Style/Module/Dashboard.module.css";

// profile image
import profilePic from "../../Assets/profile.jpg";

// Hooks
import React, { useEffect, useState } from "react";

// Component
import NavBar from "../NavBar";

function Dashboard() {
  // data storage
  const [data, setData] = useState({});

  // offline services
  const Offline = () =>
    alert("Sorry dear user. This service is not available.");

  // take data on mount
  useEffect(() => {
    const auth = getAuth(app);
    const uid = auth.currentUser.uid;

    // define an async function to fetch data
    const getUserData = async () => {
      try {
        const userData = await fetchUserData(uid);
        setData(userData);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    getUserData();
  }, []);

  return (
    <>
      <NavBar />
      <div className={classes.dashboard}>
        {/* Sidebar */}
        <aside className={classes.sidebar}>
          <div className={classes.profileSidebar}>
            <img
              src={profilePic}
              alt="Profile"
              className={classes.profileImg}
            />
            <h2 className={classes.profileName}>{data.name}</h2>
            <p className={classes.profileEmail}>{data.email}</p>
            <button className={classes.btn}>Edit Profile</button>
          </div>
          <div className={classes.menu}>
            <ul>
              <li className={classes.menuItem} onClick={() => Offline()}>
                Overview
              </li>
              <li className={classes.menuItem} onClick={() => Offline()}>
                Activity
              </li>
              <li className={classes.menuItem} onClick={() => Offline()}>
                Connections
              </li>
              <li className={classes.menuItem} onClick={() => Offline()}>
                Settings
              </li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className={classes.mainContent}>
          <section className={classes.infoSection}>
            <h3>Profile Information</h3>
            <div className={classes.infoRow}>
              <label>Name:</label>
              <span>{data.name}</span>
            </div>
            <div className={classes.infoRow}>
              <label>Email:</label>
              <span>{data.email}</span>
            </div>
            <div className={classes.infoRow}>
              <label>Phone:</label>
              <span>{data.phone || "+880 123456789"}</span>
            </div>
            <div className={classes.infoRow}>
              <label>Address:</label>
              <span>{data.address || "Dhaka, Bangladesh"}</span>
            </div>
            <div className={classes.infoRow}>
              <label>Password:</label>
              <span>********</span>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default Dashboard;
