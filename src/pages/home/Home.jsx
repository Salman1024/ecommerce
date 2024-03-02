import React from "react";
import Header from "../../component/header/Header";
import HeroBanner from "./heroBanner/HeroBanner";
import Categories from "../categories/Categories";
import Product from "../../component/product/Product";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <Categories/>
      <Product/>
    </>
  );
};

export default Home;
