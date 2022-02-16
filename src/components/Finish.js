import React, { useEffect, useState } from "react";
import axios from "axios";
import blue from "../style/blue-mailbox.jpg";
import "../style/finish.scss";
import load from "../style/loader.gif";
const Finish = ({ formdata, setFormdata, submit, setSubmit }) => {
  const [loading, setLoading] = useState(true);
  const [send, setSend] = useState(false);

  useEffect(() => {
    setLoading(true);
    const form = new FormData();

    form.append("user_full_name", formdata.name);
    form.append("user_email", formdata.email);
    form.append("user_phone", formdata.phone);
    form.append("user_nationality", formdata.country);
    form.append("user_password", formdata.password);
    form.append("user_password_confirmation", formdata.repeatpassword);
    form.append("company_name", formdata.companyname);
    form.append("company_address", formdata.address);
    form.append("company_business_email", formdata.businessemail);
    form.append("company_phone", formdata.companyphone1);
    form.append("company_extra_data[phone]", formdata.companyphone2);
    form.append("company_country_id", formdata.countryofcompany);
    form.append("company_city_id", formdata.cityofcompany);
    form.append("logo image of company", formdata.image);
    axios
      .post("https://id.safav2.io.safavisa.com/register", form)
      .then((res) => {
        console.log(res);
        setLoading(false);
        setSend(true);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setSend(false);
        setSubmit(false);
      });
  }, [submit]);

  const onClick = () => {
    setSubmit(true);
  };

  return (
    <div className="form5">
      <img className="img" src={blue} alt="confirm" />

      {loading ? (
        <img className="img2" src={load} alt="load" />
      ) : send ? (
        <div className="good">
          Congratz, you successfully created your account
        </div>
      ) : (
        <div className="bad">
          There is an error happens please{" "}
          <span className="try" onClick={onClick}>
            try
          </span>{" "}
          again later
        </div>
      )}
      {}
    </div>
  );
};

export default Finish;
