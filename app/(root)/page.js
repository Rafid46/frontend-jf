import Card from "@/common/Card";
import BannerCarousel from "@/components/BannerCarousel";
import Header from "@/components/Header";
import React from "react";

import AgricultureProduct from "@/components/AgricultureProduct";
const Page = () => {
  return (
    <div>
      <Header />
      <BannerCarousel />
      <AgricultureProduct />
    </div>
  );
};

export default Page;
