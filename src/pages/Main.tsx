"use client";

import React, { useState } from "react";
import BannerImageComp from "../components/BannerImageComp";
import EditBannerTemplateBs from "../components/EditBannerTemplateBs";
import { AdBanner } from "../types";
import styles from "../style/Home.module.css";

const initialAdBanners: AdBanner[] = [
  {
    id: 1,
    title: "Summer Sale!",
    description: "Get 50% off on all summer clothes.",
    cta: "Shop Now",
    image: "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/5/square.png",
    background: "#ffefd5",
  },
  {
    id: 2,
    title: "New Arrivals",
    description: "Check out our latest collection.",
    cta: "Explore",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFFzEY8As3jP3Q0eYZPjDvEqD0L1-Lk7APAQ&s",
    background: "#e0ffff",
  },
  {
    id: 3,
    title: "Back to School",
    description: "Everything you need for the new school year.",
    cta: "Buy Now",
    image: "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/1/square.png",
    background: "#f0f8ff",
  },
  {
    id: 4,
    title: "Boost your leads",
    description: "Hamess AI for Effective Campaigns.",
    cta: "Learn More",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2QDsfO-nG49PWdmLDQ62gaqPY7dcEBp6FZg&s",
    background: "#f0f8ff",
  },
  {
    id: 5,
    title: "Boost your leads",
    description: "Hamess AI for Effective Campaigns.",
    cta: "Buy Now",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhWU2PLb-INaTZzL2GBZWNFbbK8bQzfPJkQA&s",
    background: "#f0f8ff",
  },
  {
    id: 6,
    title: "Boost your leads",
    description: "Hamess AI for Effective Campaigns.",
    cta: "Buy Now",
    image: "https://as1.ftcdn.net/v2/jpg/05/36/23/60/1000_F_536236056_8tA6RPhBAjvvmTnoHckrfKuw4JzEZlJ8.jpg",
    background: "#f0f8ff",
  },
  {
    id: 7,
    title: "Boost your leads",
    description: "Hamess AI for Effective Campaigns.",
    cta: "Buy Now",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4fxXFYUazeLgDgmqtjg98Gck90IFirxGNgg&s",
    background: "#f0f8ff",
  },
];

const Main: React.FC = () => {
  const [adBanners, setAdBanners] = useState<AdBanner[]>(initialAdBanners);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [currentBanner, setCurrentBanner] = useState<AdBanner | null>(null);

  const handleEdit = (id: number) => {
    const bannerToEdit = adBanners.find((banner) => banner.id === id);
    if (bannerToEdit) {
      setCurrentBanner(bannerToEdit);
      setIsEditing(true);
    }
  };

  const handleSave = (updatedBanner: AdBanner) => {
    setAdBanners((prevBanners) =>
      prevBanners.map((banner) =>
        banner.id === updatedBanner.id ? updatedBanner : banner
      )
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.bannerList}>
        {adBanners.map((banner) => (
          <BannerImageComp
            key={banner.id}
            adBanner={banner}
            onEdit={handleEdit}
          />
        ))}
      </div>
      {isEditing && currentBanner && (
        <EditBannerTemplateBs
          adBanner={currentBanner}
          onSave={handleSave}
          onClose={() => setIsEditing(false)}
        />
      )}
    </div>
  );
};

export default Main;
