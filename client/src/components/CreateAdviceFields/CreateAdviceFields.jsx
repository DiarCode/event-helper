import React, { useState } from "react";
import { useRef } from "react";
import {
  uploadAndGetURL,
  uploadAdviceService,
} from "../Helpers/adminHelperMethods";
import "./createAdvice.css";

const CreateAdviceFields = () => {
  const [imageFile, setImageFile] = useState(null);
  const titleRef = useRef();
  const bodyRef = useRef();
  const linkRef = useRef();

  function handleImageChange(e) {
    if (e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  }

  async function uploadAdvice() {
    if (imageFile === null) return alert("Image file is required");
    const urlImage = await uploadAndGetURL(imageFile);
    const titleValue = titleRef.current.value;
    const bodyValue = bodyRef.current.value;
    const linkValue = linkRef.current.value;
    await uploadAdviceService(urlImage, titleValue, bodyValue, linkValue);
  }

  return (
    <div className="adminAdvice-fields">
      <div className="adminAdvice-title">Advice panel</div>
      <div className="adminAdvice-inputs">
        <input type="text" placeholder="Advice title" ref={titleRef} />
        <input type="text" placeholder="Advice body" ref={bodyRef} />
        <input type="text" placeholder="Advice link" ref={linkRef} />
        <input type="file" onChange={handleImageChange} placeholder="upload" />
      </div>

      <div className="adminAdvice-btn">
        <button onClick={uploadAdvice}>Create</button>
      </div>
    </div>
  );
};

export default CreateAdviceFields;
