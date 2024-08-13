import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "Currency Converter",
    image: projectOne,
    description: (
      <>
        <p>
          A developed and fully functional web application created using a
          React-based front-end, an API to fetch accurate and reliable foreign
          exchange rates for each country. React + Vite was used to ensure that
          the website would load at a smooth and quick rate. The currency
          converter is also fully responsive.
        </p>
      </>
    ),
    github: "https://github.com/bxity/boity-currency-converter",
    demo: "https://boity-currency-converter.netlify.app",
  },
  2: {
    title: "Tic Tac Toe",
    image: projectTwo,
    description: (
      <>
        <p>
          A working game web app that was created using simple HTML, CSS and JavaScript elements.
        </p>
      </>
    ),
    github: "https://github.com/bxity/boity-tictactoe",
    demo: "https://boity-tictactoe.netlify.app",
  },
  3: {
    title: "Travel Guide Website",
    image: projectThree,
    description: (
      <>
        <p>
          A website created using HTML5, CSS and JavaScript Embedded links to
          reviews as well as Instagram links to photos of the city The website
          is responsive
        </p>
      </>
    ),
    github: "https://github.com/bxity/boity-travel",
    demo: "https://boity-shanghaicity.netlify.app",
  },
};

export default projects;
