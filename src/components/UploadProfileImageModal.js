import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import API_URL from "../utils/constants";
import uploadHeader from "../services/upload-header";
import "./UploadProfileImageModal.css";

const UploadProfileImageModal = ({ handleClose, show, props }) => {
  const showHideClassName = show ? "modalDisplay" : "modalHide";
  const [selectedFile, setSelectedFile] = useState();
  const [profileImage, setProfileImage] = useState("");
  const navigate = useNavigate();

  const onFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const onFileUpload = () => {
    const formData = new FormData();
    if (selectedFile !== undefined) {
      formData.append("profile_image", selectedFile, selectedFile.name);
      axios
        .post(API_URL + "/users/me/upload", formData, {
          headers: uploadHeader(formData),
        })
        .then((res) => {
          setProfileImage(res.data.url);
          navigate("/", { state: { profileImage: profileImage } });
        });
    }
  };
  return (
    <div className={showHideClassName}>
      <section className="modalMain">
        <h4 className="modalTitle">
          <p className="descText">Upload your profile image.</p>
        </h4>
        <div>
          <input
            className="selectFileButton"
            type="file"
            name="profileImage"
            accept="image/png, image/gif, image/jpeg"
            onChange={onFileChange}
          />
          <div className="centerDiv">
            <button onClick={onFileUpload} className="uploadFileButton">
              Upload
            </button>
            <button onClick={handleClose} className="closeUploaderButton">
              Close
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UploadProfileImageModal;
