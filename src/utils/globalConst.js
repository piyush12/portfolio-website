import schedulerImage from "../assets/images/portfolio/scheduler.jpg";
import pizza from "../assets/images/portfolio/slick-pizza.jpg";
import githubBattle from "../assets/images/portfolio/github-battle.jpg";
import ecommerce from "../assets/images/portfolio/ecommerce.jpg";
import portfolio from "../assets/images/portfolio/portfolio.jpg";

export const PROJECT_DATA = [
  {
    id: "xdi123",
    title: "Event Scheduler",
    description: "React, Styled Component, Rest Api",
    url: "https://scheduleus.netlify.app",
    image: schedulerImage,
  },
  {
    id: "xdi124",
    title: "Pizza store",
    description: "Gatsby, Styled Component, Sanity",
    url: "https://pizzastore.netlify.app/",
    image: pizza,
  },
  {
    id: "xdi125",
    title: "Github Battle",
    description: "React, Context",
    url: "https://git-battle-app.netlify.app/",
    image: githubBattle,
  },
  {
    id: "xdi126",
    title: "Ecommerce",
    description: "React, Redux",
    url: "https://myecommerceapp.netlify.app/",
    image: ecommerce,
  },
  {
    id: "xdi127",
    title: "My Portfolio",
    description: "React, Styled Components, Framer Motion",
    url: "https://myecommerceapp.netlify.app/",
    image: portfolio,
  },
];

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};
