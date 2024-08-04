import React, { useState } from "react";
import { AdBanner } from "../types";
import styles from "../style/EditBannerTemplateBs.module.css";
import { RxCross2 } from "react-icons/rx";
import BannerImageComp from "./BannerImageComp";

interface EditBannerTemplateBsProps {
  adBanner: AdBanner;
  onSave: (updatedBanner: AdBanner) => void;
  onClose: () => void;
}

const EditBannerTemplateBs: React.FC<EditBannerTemplateBsProps> = ({
  adBanner,
  onSave,
  onClose,
}) => {
  const [updatedBanner, setUpdatedBanner] = useState(adBanner);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUpdatedBanner({ ...updatedBanner, [name]: value });
  };

  const handleSave = () => {
    onSave(updatedBanner);
    onClose();
  };

  return (
    <div className={styles.bottomSheet} style={{ width: "500px" }}>
      <div className={styles.sheetContent}>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", alignItems: "center" }}>
          <h3 style={{ marginBottom: "0px", fontSize: "20px", color: "#506D85" }}>Edit Banner</h3><RxCross2 onClick={onClose} fontSize={"20px"} />
        </div>
          <BannerImageComp
            key={updatedBanner.id}
            adBanner={updatedBanner}
            editBanner={true}
          />
        <label style={{ color: "#506D85" }}>
          Title:
          <input
            type="text"
            name="title"
            style={{ color: "#000000" }}
            value={updatedBanner.title}
            onChange={handleChange}
          />
        </label>
        <label style={{ color: "#506D85" }}>
          Description:
          <textarea
            style={{ color: "#000000" }}
            name="description"
            value={updatedBanner.description}
            onChange={handleChange}
          />
        </label>
        <label>
          CTA:
          <input
            type="text"
            name="cta"
            value={updatedBanner.cta}
            onChange={handleChange}
          />
        </label>
        <label style={{ color: "#506D85" }}>
          Images
          <input
            type="text"
            name="image"
            value={updatedBanner.image}
            onChange={handleChange}
          />
        </label>
        <button onClick={handleSave} className={styles.saveButton} style={{ width: "100%" }}>
          Done
        </button>
        <button className={styles.closeButton}>
          Download
        </button>
      </div>
    </div>
  );
};

export default EditBannerTemplateBs;
