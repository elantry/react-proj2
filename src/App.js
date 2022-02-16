import React, { useState } from "react";
import Form from "./components/Form";
import ImageUpdate from "./components/ImageUpdate";
import OtherInfo from "./components/OtherInfo";
import PersonInfo from "./components/PersonInfo";
import Finish from "./components/Finish";
import Navbar from "./components/Navbar";
import "./App.scss";

function App() {
  const [page, setPage] = useState(0);

  const FormPadge = [
    "Tell us more about you",
    "Verify your company",
    "Upload Company logo",
    "You're set. Ready?",
    "Congratultions",
  ];
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
    password: "",
    repeatpassword: "",
    companyname: "",
    address: "",
    businessemail: "",
    countryofcompany: "",
    cityofcompany: "",
    companyphone1: "",
    companyphone2: "",
    image: null,
  });
  const [submit, setSubmit] = useState(false);

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <PersonInfo
          formdata={formdata}
          setFormdata={setFormdata}
          page={page}
          setPage={setPage}
        />
      );
    } else if (page === 1) {
      return (
        <OtherInfo
          formdata={formdata}
          setFormdata={setFormdata}
          page={page}
          setPage={setPage}
        />
      );
    } else if (page === 2) {
      return (
        <ImageUpdate
          formdata={formdata}
          setFormdata={setFormdata}
          page={page}
          setPage={setPage}
        />
      );
    } else if (page === 3) {
      return (
        <Form
          formdata={formdata}
          setFormdata={setFormdata}
          page={page}
          setPage={setPage}
          setSubmit={setSubmit}
        />
      );
    } else {
      return (
        <Finish
          formdata={formdata}
          setFormdata={setFormdata}
          submit={submit}
          setSubmit={setSubmit}
        />
      );
    }
  };

  return (
    <div className="container">
      <div className="project">
        <div className="progressbar">
          <Navbar page={page} />
        </div>
        <div className="header1">
          <h1>{FormPadge[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
      </div>
    </div>
  );
}

export default App;
