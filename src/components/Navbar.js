import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBuilding,
  faImages,
  faCheckCircle,
} from "@fortawesome/free-regular-svg-icons";
import "../style/Bar.scss";

const Navbar = ({ page }) => {
  return (
    <div className="head">
      <div className="bar2"></div>
      <div
        style={{
          width:
            page === 0 ? "0" : page === 1 ? "33%" : page === 2 ? "65%" : "100%",
        }}
        className="bar"
      ></div>
      <div
        style={{ color: page === 0 ? "#ff5f59" : "#1777fb" }}
        className="icon1"
      >
        <FontAwesomeIcon icon={faUser} />
      </div>
      <div
        style={{
          color: page === 1 ? "#ff5f59" : page === 0 ? "#bababa" : "#1777fb",
        }}
        className="icon2"
      >
        <FontAwesomeIcon icon={faBuilding} />
      </div>
      <div
        style={{
          color:
            page === 2
              ? "#ff5f59"
              : page === 3
              ? "#1777fb"
              : page === 4
              ? "#1777fb"
              : "#bababa",
        }}
        className="icon3"
      >
        <FontAwesomeIcon icon={faImages} />
      </div>
      <div
        style={{
          color: page === 3 ? "#ff5f59" : page === 4 ? "#1777fb" : "#bababa",
        }}
        className="icon4"
      >
        <FontAwesomeIcon icon={faCheckCircle} />
      </div>
    </div>
  );
};

export default Navbar;
