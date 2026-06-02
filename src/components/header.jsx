import React from 'react'
import notification from "../assets/notification.png";
import chat from "../assets/chat.png";
import user from "../assets/user.png";
import "./header.css";
import search from "../assets/search.png";
import drop from "../assets/drop.png";

function Header() {
  return (

    <div className="header">

      {/* Search Bar */}
      <div className="search-box">


  <img
    src={search}
    alt="search"
    className="search-icon"
  />
        <input
          type="text"
          placeholder="Search here..."
        />

      </div>


      {/* Right Side */}
      <div className="header-right">

        {/* Language */}
        <div className="language">

          <span>English (US)</span>
          <img src={drop} alt="dropdown" />

         

        </div>


        {/* Icons */}
        <div className="icon">
          <img src={chat} alt="chat" />
        </div>

        <div className="icon">
          <img src={notification} alt="notification" />
        </div>


        {/* Profile */}
        <div className="profile">

          <img
            className="profile-img"
            src={user}
            alt="user"
          />


        </div>

      </div>

    </div>

  )
}

export default Header