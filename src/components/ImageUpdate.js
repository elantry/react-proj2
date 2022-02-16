import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faImages } from "@fortawesome/free-regular-svg-icons";

import "../style/image.scss";
const ImageUpdate = ({ formdata, setFormdata, page, setPage }) => {
  const [image, setImage] = useState(false);
  
  const onChangeFile = (e) => {
    setFormdata({ ...formdata, image: e.target.files[0] });
    setImage(false);
  };

  return (
    <div className="form3">
      <div className="img">
        <label className="icon2" htmlFor="file">
          <FontAwesomeIcon icon={faPlus} />
        </label>
        <div className="icon1">
          <FontAwesomeIcon className="ico" icon={faImages} />
        </div>
        <input
          type="file"
          onChange={(e) => onChangeFile(e)}
          id="file"
          style={{ display: "none" }}
        />

        {image === null && <p>Please Enter Logo Image</p>}
        <div>Only images with a size lower than 500 KB are allowed.</div>
      </div>

      <div className="footer">
        <button
          className="back"
          onClick={() => {
            setPage((currPage) => currPage - 1);

            console.log(formdata);
          }}
        >
          back
        </button>

        <button
          className="button"
          onClick={() => {
            if (formdata.image === null) {
              setImage(true);
            } else {
              setPage((currPage) => currPage + 1);
            }
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ImageUpdate;
