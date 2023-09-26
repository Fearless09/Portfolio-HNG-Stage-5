import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/blogr.jpg";
import ImageTwo from "../../images/calculator.jpg";
import ImageThree from "../../images/tips-calculator.jpg";
import ImageFour from "../../images/ecormmerce.jpg";
import ImageFive from "../../images/room.jpg";
import ImageSix from "../../images/time-tracking.jpg";
import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 1,
    name: "Blogr",
    image: ImageOne,
    link: "https://fearless09.github.io/Blogr/",
  },
  {
    id: 2,
    name: "Calculator App",
    link: "https://fearless09.github.io/Calculator-App/",
    image: ImageTwo,
  },
  {
    id: 3,
    name: "Tip Calculator App",
    image: ImageThree,
    link: "https://fearless09.github.io/tip-calculator-app-main/",
  },
  {
    id: 4,
    name: "E-Commerce Landing Page",
    image: ImageFour,
    link: "https://fearless09.github.io/ecommerce-product-page-main/",
  },
  {
    id: 5,
    name: "Room Homepage",
    image: ImageFive,
    link: "https://fearless09.github.io/room-homepage/",
  },
  {
    id: 6,
    name: "Time Tracking Dashboard",
    image: ImageSix,
    link: "https://fearless09.github.io/time-tracking-dashboard-main/",
  },
];

const filterData = [
  
];

const Portfolio = () => {
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleHover(index) {
    setHoveredValue(index);
  }

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <div className="portfolio__content__cards">
          {portfolioData.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a className="img-link">
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <br /> <br />
                    <a href={item.link} className="visit-link" target="_blank" rel="noreferrer">Visit</a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
