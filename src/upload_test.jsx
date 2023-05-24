import React, { useState } from "react";
import Axios from "axios";

const Upload_test = () => {
  const [file, setFile] = useState();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new FormData object
    const formData = new FormData();

    // Add the file to the FormData object
    formData.append("file", file);

    // Make an HTTP POST request to the backend
    Axios.post("http://127.0.0.1:5000/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <input type="file" name="file" id="file" onChange={handleFileChange} />
      <button onClick={handleSubmit} className="form-submit-btn">
        Upload
      </button>
    </div>
  );
};

export default Upload_test;
