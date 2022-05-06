import React, { useState } from "react";
import { uploadAndGetURL } from "../Helpers/adminHelperMethods";
import "./createAdvice.css";

const CreateAdviceFields = () => {
  const [imageFile, setImageFile] = useState(null);

  function handleImageChange(e) {
    if (e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  }

  async function uploadImage() {
    if (imageFile === null) return alert("Image file is required");
    const urlImage = await uploadAndGetURL(imageFile);
    console.log(urlImage);
  }

  return (
    <div>
      <h1>Create new advice</h1>
      <input type="file" onChange={handleImageChange} placeholder="upload" />
      <button onClick={uploadImage}>Upload</button>
    </div>
  );
};

export default CreateAdviceFields;
