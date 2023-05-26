import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { BsBell } from "react-icons/bs";
import { auth } from "../../firebase";
import { FiSearch } from "react-icons/fi";

export default function Topbar() {
  const [isUserDetailsVisible, setUserDetailsVisible] = useState(false);
  const [userImage, setUserImage] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUserImage(user.photoURL);
      setUserName(user.displayName);
      setUserEmail(user.email);
    }
  }, []);

  const handleLogout = () => {
    auth.signOut().then(() => {
      setUserImage("");
      setUserName("");
      setUserEmail("");
    });
  };

  const toggleUserDetails = () => {
    setUserDetailsVisible(!isUserDetailsVisible);
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <h2 className="topbar_heading">Dashboard</h2>
        </div>
        <div className="topRight">
          <div className="searchBox">
            <input type="text" className="searchBar" placeholder="Search..." />
            <FiSearch className="searchIcon" />
          </div>
          <div className="topbarIconContainer">
            <BsBell />
          </div>
          {userImage && (
            <div className="user" onClick={toggleUserDetails}>
              <img src={userImage} alt={userName} className="topAvatar" />
            </div>
          )}
        </div>
      </div>
      {isUserDetailsVisible && (
        <div className="user-details" onClick={toggleUserDetails}>
          <img src={userImage} alt={userName} />
          <p className="name">{userName}</p>
          <p className="email">{userEmail}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}
