import swiggySnap from "../src/assets/images/swiggySnap.png";
import portfolioSnap from "../src/assets/images/portfolioSnap.png";
import notesSnap from "../src/assets/images/notesSnap.png";
import outfitlySnap from "../src/assets/images/outfitlySnap.png";

export const projects = [
  {
    title: "BITEBOX",
    image: swiggySnap,
    desc: [
      " Bitebox is a user-friendly web application that enables users to effortlessly discover nearby restaurants and explore their menus.",
      " It is using Swiggy’s public API to fetch real restaurants data.",
      " Leveraged Geolocation API and Geocoding API for getting user’s location coordinates and address.",
      " Effectively implemented a search feature for filtering out restaurants, utilizing the debouncing technique to enhance user experience and optimize performance.",
      " Implemented code splitting and lazy loading to improve applications’s initial load time.",
    ],
    liveLink: "https://bitebox.netlify.app",
    githubLink: "https://github.com/yvikash18",
  },

  {
    title: "PORTFOLIO APP",
    image: portfolioSnap,
    desc: [
      " Developed the application using the React.js framework, leveraging its benefits such as faster rendering and seamless performance.",
      " Employed the Tailwind CSS library to achieve a consistent and visually appealing user interface design.",
      " Utilized Formik and Yup library for efficient form handling and robust form validation",
      " Implemented smooth and engaging animations using Framer Motion, a production-ready motion library specifically designed for React.",
      " Integrated EmailJs into the contact form feature to enable seamless email transmission directly from the frontend.",
    ],
    liveLink: "https://aditya-agarwal.netlify.app/",
    githubLink: "https://github.com/yvikash18/MyPortfolio",
  },

  {
    title: "KEEPNOTES",
    image: notesSnap,
    desc: [
      " Built with React, CSS, and Redux for a seamless user interface.",
      " Implemented impressive dark mode feature for enhanced visual comfort in low-light environments.",
      " Features such as save, search, edit and delete a note.",
    ],
    liveLink: "https://keeep-notes.vercel.app/",
    githubLink: "https://github.com/yvikash18/",
  },
];
