import React, { useState } from "react";
import "../style/person.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";

import countries from "country-list-js";
const PersonInfo = ({ formdata, setFormdata, page, setPage }) => {
  const [name, setName] = useState(false);
  const [code, setCode] = useState("+");
  const [email, setEmail] = useState(false);
  const [email2, setEmail2] = useState(false);
  const [phone, setPhone] = useState(false);
  const [country, setCountry] = useState(false);
  const [pass, setPass] = useState(false);
  const [pass2, setPass2] = useState(false);
  const [repass, setRepass] = useState(false);
  const [repass2, setRepass2] = useState(false);
  const [themename, setThemename] = useState("");
  const [themeemail, setThemeemail] = useState("");
  const [themephone, setThemephone] = useState("");
  const [themecountry, setThemecountry] = useState("");
  const [themepass, setThemepass] = useState("");
  const [themerepass, setThemerepass] = useState("");
  const [text, setText] = useState(false);
  const [text2, setText2] = useState(false);
  const onclick = () => {
    if (formdata.name === "") {
      setName(true);
      setThemename("themename");
    } else if (formdata.email === "") {
      setEmail(true);
      setThemeemail("themeemail");
    } else if (!formdata.email.includes("@")) {
      setEmail2(true);
      setThemeemail("themeemail");
    } else if (formdata.phone === "") {
      setPhone(true);
      setThemephone("themephone");
    } else if (formdata.country === "") {
      setCountry(true);
      setThemecountry("themecountry");
    } else if (formdata.password === "") {
      setPass(true);
      setThemepass("themepass");
    } else if (formdata["password"].length < 6) {
      setPass2(true);
      setThemepass("themepass");
    } else if (formdata.repeatpassword === "") {
      setRepass(true);
      setThemerepass("themerepass");
    } else if (formdata.repeatpassword !== formdata.password) {
      setRepass2(true);
    } else {
      return setPage((currPage) => currPage + 1);
    }
  };
  const handleButtonPress = () => {
    setText(true);
  };
  const handleButtonRelease = () => {
    setText(false);
  };
  const handleButtonPress2 = () => {
    setText2(true);
  };
  const handleButtonRelease2 = () => {
    setText2(false);
  };
  return (
    <div className="form">
      <div className={`name ${themename}`}>
        <label className={name ? "label2" : "label1"}>FULL NAME</label>
        <input
          type="text"
          value={formdata.name}
          placeholder="Enter your full Name"
          onChange={(e) => {
            setFormdata({ ...formdata, name: e.target.value });
            setName(false);
            setThemename("");
          }}
        />
        {name && <p className="style1">Please Enter your full Name</p>}
      </div>

      <div className={`email ${themeemail}`}>
        <label className={email ? "label2" : "label1"}>BUSINESS EMAIL</label>
        <input
          type="email"
          value={formdata.email}
          placeholder="Enter your business email"
          pattern="[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*"
          onChange={(e) => {
            setFormdata({ ...formdata, email: e.target.value });
            setEmail(false);
            setEmail2(false);
            setThemeemail("");
          }}
        />
        {email && <p className="style1">Please Enter your Email</p>}
        {email2 && <p className="style1">Please Enter your Email with '@'</p>}
      </div>

      <div className={`country ${themecountry}`}>
        <label className={country ? "label2" : "label1"}>COUNTRY</label>
        <select
          value={formdata.country}
          onChange={(e) => {
            setFormdata({ ...formdata, country: e.target.value });
            setCode(e.target.value);
            setCountry(false);
            setThemecountry("");
          }}
          className="country2"
        >
          <option value="" hidden>
            Select Your country
          </option>

          {Object.values(countries.all).map((country) => (
            <option key={country["iso2"]} value={country.dialing_code}>
              {country["name"]}{" "}
            </option>
          ))}
        </select>
        {country && <p className="style1">Please Enter your Country</p>}
      </div>

      <div className={`phone ${themephone}`}>
        <label className={phone ? "label2" : "label1"}>PHONE NUMBER</label>
        <div className="div">{`${code}`}</div>
        <input
          type="number"
          className="input"
          value={formdata.phone}
          placeholder="Enter your phone number"
          onChange={(e) => {
            setFormdata({ ...formdata, phone: e.target.value });
            setPhone(false);
            setThemephone("");
          }}
        />

        {phone && <p className="style1">Please Enter your Phone Number</p>}
      </div>

      <div className={`pass ${themepass}`}>
        <label className={pass ? "label2" : "label1"}>PASSWORD</label>
        <input
          type={text ? "text" : "password"}
          value={formdata.password}
          placeholder="Choose a password"
          onChange={(e) => {
            setFormdata({ ...formdata, password: e.target.value });
            setPass(false);
            setPass2(false);
            setThemepass("");
          }}
        />
        <div
          className="eye1"
          onMouseDown={handleButtonPress}
          onMouseUp={handleButtonRelease}
        >
          {" "}
          <FontAwesomeIcon icon={faEye} />
        </div>
        {pass && <p className="style1">Please Enter your Password</p>}
        {pass2 && (
          <p className="style1">
            Please make sure that you password at least 6 digits
          </p>
        )}
      </div>

      <div className={`repass ${themerepass}`}>
        <label className={repass ? "label2" : "label1"}>REPEAT PASSWORD</label>
        <input
          type={text2 ? "text" : "password"}
          value={formdata.repeatpassword}
          placeholder="Repeat your password"
          onChange={(e) => {
            setFormdata({ ...formdata, repeatpassword: e.target.value });
            setRepass(false);
            setRepass2(false);
            setThemerepass("");
          }}
        />
        <div
          className="eye2"
          onMouseDown={handleButtonPress2}
          onMouseUp={handleButtonRelease2}
        >
          <FontAwesomeIcon icon={faEye} />
        </div>

        {repass2 && <p className="style11">Password is not match</p>}

        {repass && <p className="style1">Please enter your password</p>}
      </div>

      <div className="footer">
        <a className="a" href="/">
          Back to login
        </a>

        <button className="button" onClick={onclick}>
          next
        </button>
      </div>
    </div>
  );
};

export default PersonInfo;
