import BannerCarousel from "@/components/BannerCarousel";
import Header from "@/components/Header";
import React from "react";
import AgricultureProduct from "@/components/AgricultureProduct";
import LandScapeProduct from "@/components/LandScapeProduct";
import Trusted from "@/components/Trusted";
import FeatureCard from "@/components/FeatureCard";
import RibonSlider from "@/components/RibonSlider";
import Testimonial from "@/components/Testimonial";
import OurBranch from "@/components/OurBranch";

const Page = () => {
  return (
    <div>
      <Header />
      <BannerCarousel />
      <AgricultureProduct />
      <LandScapeProduct />
      <Trusted />
      <FeatureCard />
      <RibonSlider />
      <Testimonial />
      <OurBranch />
    </div>
  );
};

export default Page;
