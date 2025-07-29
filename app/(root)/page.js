import Card from "@/common/Card";
import BannerCarousel from "@/components/BannerCarousel";
import Header from "@/components/Header";
import React from "react";
import AgricultureProduct from "@/components/AgricultureProduct";
import LandScapeProduct from "@/components/LandScapeProduct";
import Trusted from "@/components/Trusted";
import FeatureCard from "@/components/FeatureCard";
const Page = () => {
  return (
    <div>
      <Header />
      <BannerCarousel />
      <AgricultureProduct />
      <LandScapeProduct />
      <Trusted />
      <FeatureCard />
    </div>
  );
};

export default Page;
