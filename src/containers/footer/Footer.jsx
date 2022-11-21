import React from "react";
import "./footer.css";
import { logosvg } from "../../assets";

const links = [
  {
    name: "Overons",
  },
  {
    name: "Social Media",
  },
  {
    name: "Counters",
  },
  {
    name: "Contact",
  },
];

const company = [
  {
    name: "Terms & Conditions",
  },
  {
    name: "Privacy Policy",
  },
  {
    name: "Contact",
  },
];

const g_touch = [
  {
    name: "Crechterwoord K12 182 DK Alknjkcb",
  },
  {
    name: "085-132567",
  },
  {
    name: "info@payme.net",
  },
];

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </div>
      <div className="gpt3__footer-button">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={logosvg} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          {/* <p> */}
          {links.map((link, index) => (
            <p key={index + link}>{link.name}</p>
          ))}
          {/* </p> */}
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          {/* <p> */}
          {company.map((link, index) => (
            <p key={index + link}>{link.name}</p>
          ))}
          {/* </p> */}
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get In Touch</h4>
          {/* <p> */}
          {g_touch.map((link, index) => (
            <p key={index + link}>{link.name}</p>
          ))}
          {/* </p> */}
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
