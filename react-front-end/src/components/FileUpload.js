import React, { useState } from "react";
import axios from "axios";

function FileUpload() {
  const [fileData, setFileData] = useState("");

  const getFile = (e) => {
    const file = e.target.files[0];
    setFileData(file);
  };

  const uploadFile = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("image", fileData);
    // axios.post("/api/upload", data).then((res) => {
    //   alert(res.data.message);
    // });
  };

  return (
    <form onSubmit={uploadFile}>
      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={getFile}
        required
      />
      <input type="submit" name="upload" value="Upload" />
    </form>
  );
}

export default FileUpload;
