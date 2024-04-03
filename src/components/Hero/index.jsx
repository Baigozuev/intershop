import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";
import Category from "../Category";

const Hero = () => {
    const { products } = useSelector((s) => s);
  return (
    <div id="hero">
      <div className="container">
        <div className="hero">
          <div className="hero--category">
            <Category/>
          </div>
          <div className="hero--products">
            {products.map((el) => (
              <ProductCard el={el} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
