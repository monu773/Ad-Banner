import React from "react";
import { AdBanner } from "../types";
import styles from "../style/BannerImageComp.module.css";
import { BiSolidEditAlt } from "react-icons/bi";

interface BannerImageCompProps {
  adBanner: AdBanner;
  onEdit?: (id: number) => void;
  editBanner?: boolean;
}

const BannerImageComp: React.FC<BannerImageCompProps> = ({
  adBanner,
  onEdit,
  editBanner,
}) => {

  const handleEdit = () => {
    if (onEdit) {
      onEdit(adBanner.id);
    }
  };

  console.log("SSSS", editBanner);

  return (
    <div
      className={styles.bannerContainer}
      style={{ backgroundImage: `url(${adBanner.image})`, width: editBanner ? "80%" : "" }}
    >
      <div style={{ width: "100%", background: "#0000005c", height: "100%" }}>
        <div className={styles.content}>
          <h2 className={styles.title}>{adBanner.title}</h2>
          <p className={styles.description}>{adBanner.description}</p>
          <button className={styles.ctaButton}>{adBanner.cta}</button>
        </div>
        <button className={styles.editButton} onClick={() => handleEdit()}>
          <BiSolidEditAlt color="#FFFFFF" />
        </button>
      </div>
    </div>
  );
};

export default BannerImageComp;
