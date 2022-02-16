import React, { useState } from "react";
import "../style/otherinfo.scss";
import { Country, City } from "country-state-city";
import countries from "country-list-js";

const OtherInfo = ({ formdata, setFormdata, page, setPage }) => {
  const [companyname, setCompanyname] = useState(false);
  const [address, setAddress] = useState(false);
  const [businessemail, setBusinessemail] = useState(false);
  const [businessemail2, setBusinessemail2] = useState(false);
  const [countryofcompany, setCountryofcompany] = useState(false);
  const [city, setCity] = useState(false);
  const [phone1, setPhone1] = useState(false);
  const [phone2, setPhone2] = useState(false);
  const [themename, setThemename] = useState("");
  const [themeemail, setThemeemail] = useState("");
  const [themephone1, setThemephone1] = useState("");
  const [themecountry, setThemecountry] = useState("");
  const [themecity, setThemecity] = useState("");
  const [themeaddress, setThemeaddress] = useState("");
  const [themerephone2, setThemephone2] = useState("");
  const [code, setCode] = useState("+");

  const onclick = () => {
    if (formdata.companyname === "") {
      setCompanyname(true);
      setThemename("themename");
    } else if (formdata.address === "") {
      setAddress(true);
      setThemeaddress("themeaddress");
    } else if (formdata.businessemail === "") {
      setBusinessemail(true);
      setThemeemail("themeemail");
    } else if (!formdata.businessemail.includes("@")) {
      setBusinessemail2(true);
      setThemeemail("themeemail");
    } else if (formdata.countryofcompany === "") {
      setCountryofcompany(true);
      setThemecountry("themecountry");
    } else if (formdata.cityofcompany === "") {
      setCity(true);
      setThemecity("themecity");
    } else if (formdata.companyphone1 === "") {
      setPhone1(true);
      setThemephone1("themephone1");
    } else if (formdata.companyphone2 === "") {
      setPhone2(true);
      setThemephone2("themerephone2");
    } else {
      return setPage((currPage) => currPage + 1);
    }
  };
  return (
    <div className="form1">
      <div className="header">
        <p className="plo">
          Entring this information corectlly will facilitate the compnay
          verfication proccess
        </p>
      </div>
      <div className={`name ${themename}`}>
        <label className={companyname ? "label2" : "label1"}>
          COMPANY NAME
        </label>
        <input
          className="inname"
          type="text"
          value={formdata.companyname}
          placeholder="Enter your company Name"
          onChange={(e) => {
            setFormdata({ ...formdata, companyname: e.target.value });
            setCompanyname(false);
            setThemename("");
          }}
        />
        <select className="eg">
          <option>English</option>
        </select>
        {companyname && (
          <p className="style1">Please Enter your company Name</p>
        )}
      </div>

      <div className={`address ${themeaddress}`}>
        <label className={address ? "label2" : "label1"}>ADDRESS</label>
        <input
          type="text"
          value={formdata.address}
          placeholder="Enter your address"
          onChange={(e) => {
            setFormdata({ ...formdata, address: e.target.value });
            setAddress(false);
            setThemeaddress("");
          }}
        />
        {address && <p className="style1">Please Enter your Address</p>}
      </div>

      <div className={`email ${themeemail}`}>
        <label className={businessemail ? "label2" : "label1"}>
          BUSINESS EMAIL
        </label>
        <input
          type="email"
          value={formdata.businessemail}
          placeholder="Enter your business email"
          onChange={(e) => {
            setFormdata({ ...formdata, businessemail: e.target.value });
            setBusinessemail(false);
            setBusinessemail2(false);
            setThemeemail("");
          }}
        />
        {businessemail && (
          <p className="style1">Please Enter your Business Email</p>
        )}
        {businessemail2 && (
          <p className="style1">Please Enter your Email with '@'</p>
        )}
      </div>

      <div className={`country ${themecountry}`}>
        <label className={countryofcompany ? "label2" : "label1"}>
          COUNTRY
        </label>
        <select
          value={formdata.countryofcompany}
          onChange={(e) => {
            setFormdata({
              ...formdata,
              countryofcompany: e.target.value,
              cityofcompany: " ",
            });
            setCode(
              `${
                e.target.value
                  ? `${countries.findByIso2(e.target.value)["dialing_code"]}`
                  : "+"
              }`
            );

            setCountryofcompany(false);
            setThemecountry("");
          }}
          className="country2"
        >
          <option value="" hidden>
            Select Your country
          </option>

          {Object.values(Country.getAllCountries()).map((country) => (
            <option key={country["isoCode"]} value={country["isoCode"]}>
              {country["name"]}
            </option>
          ))}
        </select>

        {countryofcompany && (
          <p className="style1">Please Enter Country of Company</p>
        )}
      </div>

      <div className={`city ${themecity}`}>
        <label className={city ? "label2" : "label1"}>CITY</label>

        <select
          value={formdata.cityofcompany}
          onChange={(e) => {
            setFormdata({ ...formdata, cityofcompany: e.target.value });
            setCity(false);
            setThemecity("");
          }}
          className="city2"
        >
          <option value="" hidden>
            Select Your city
          </option>

          {formdata.countryofcompany
            ? Object.values(City.getAllCities())
                .filter(
                  (city) => city["countryCode"] === formdata.countryofcompany
                )
                .map((city) => (
                  <option key={city["id"]} value={city.name}>
                    {city["name"]}
                  </option>
                ))
            : []}
        </select>
        {city && <p className="style1">Please Enter city of company</p>}
      </div>

      <div className={`phone1 ${themephone1}`}>
        <label className={phone1 ? "label2" : "label1"}>
          COMPANY PHONE NUMBER
        </label>
        <div className="div">{code}</div>
        <input
          className="input"
          type="number"
          value={formdata.companyphone1}
          placeholder="Enter your company phone number"
          onChange={(e) => {
            setFormdata({ ...formdata, companyphone1: e.target.value });
            setPhone1(false);
            setThemephone1("");
          }}
        />
        {phone1 && <p className="style1">Please Enter Phone Number</p>}
      </div>

      <div className={`phone2 ${themerephone2}`}>
        <label className={phone2 ? "label2" : "label1"}>
          COMPANY PHONE NUMBER
        </label>
        <div className="div">{code}</div>
        <input
          className="input"
          type="number"
          value={formdata.companyphone2}
          placeholder="Enter your company phone number"
          onChange={(e) => {
            setFormdata({ ...formdata, companyphone2: e.target.value });
            setPhone2(false);
            setThemephone2("");
          }}
        />
        {phone2 && <p className="style1">Please Enter Phone Number</p>}
      </div>

      <div className="footer">
        <button
          className="back"
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
        >
          back
        </button>

        <button className="button" onClick={onclick}>
          Next
        </button>
      </div>
    </div>
  );
};

export default OtherInfo;
