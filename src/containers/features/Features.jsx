import React from "react";
import { Feature } from "../../components";
import "./features.css";

const featuresData = [
  {
    title: "Improving end distrusts instantly",
    text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now.",
  },
  {
    title: "Become the tended active",
    text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now.",
  },
  {
    title: "Message or am nothing",
    text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now.",
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">
        The Future is Now and You Just Need to Realize It. Step into Future
        Today. & Make it Happen.
      </h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
