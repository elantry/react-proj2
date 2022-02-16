import React from "react";
import blue from "../style/blue-mailbox.jpg";
import "../style/confirm.scss";
const Form = ({ formdata, setFormdata, page, setPage, setSubmit }) => {
  return (
    <div className="form4">
      <div className="image">
        <img className="img" src={blue} alt="confirm" />
        <div style={{ color: "red", fontSize: "20px", fontWeight: "bold" }}>
          We will send a message for this e-mail .
        </div>
        <div>{formdata.email}</div>
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

        <button
          className="button"
          onClick={() => {
            setSubmit(true);

            setPage((currPage) => currPage + 1);
          }}
        >
          confirm
        </button>
      </div>
    </div>
  );
};

export default Form;
