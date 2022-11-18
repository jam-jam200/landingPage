import React from "react";
import "./brand.css";
import { google, atlassian, slack, dropbox, shopify } from "../../assets";

const images = [google, atlassian, slack, dropbox, shopify];

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt="images" />
        </div>
      ))}
    </div>
  );
};

export default Brand;
