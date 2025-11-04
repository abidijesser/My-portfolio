import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-112.png";
import card2 from "../../assets/images/portfolio-images/card-21.jpg";
import card3 from "../../assets/images/portfolio-images/card-31.png";
import card4 from "../../assets/images/portfolio-images/card-412.png";
import card5 from "../../assets/images/portfolio-images/card-52.png";
import card6 from "../../assets/images/portfolio-images/card-61.jpg";

const projectData = [
  
  {
  id: 1,
  image: card4,
  category: "React.js, Node.js, Express.js, MongoDB, Machine Learning, DevOps (Jenkins)",
  title: "Project Management Platform",
  description:
    "Developed an intelligent project management platform with responsive dashboards, team collaboration, and task automation.",
  link: "https://github.com/abidijesser/MERN-Project-Manager"
  },
  {
    id: 2,
    image: card1,
    category: "Django",
    title: "Educational Hub",
    description:
      "Virtual Assistant for Education, Coaching, Assessment, and Automatic Exercise Generation.",
    link: "https://github.com/abidijesser/Multilearn-Django-5TWIN6",
  },
  {
    id: 3,
    image: card3,
    category: "Django, Semantic web",
    title: "Smart Traffic Management Platform",
    description:
      "Semantic platform for traffic management and the promotion of sustainable urban mobility.",
    link: "https://github.com/abidijesser/SmartCity-Django-SemanticWeb",
  },
  {
  id: 4,
  image: card2,
  category: "Laravel, DevOps (GitHub Actions)",
  title: "Book Sharing Platform",
  description:
    "Built a modern Laravel-based platform for sharing, borrowing, and discovering books within a community.",
  link: "https://github.com/abidijesser/Book_Sharing_Platform_Laravel"
  },

  {
    id: 5,
    image: card5,
    category: "Angular, Spring Boot, DevOps (Jenkins)",
    title: "DevOps CI/CD Automation Platform",
    description:
      "Built a CI/CD pipeline with Spring Boot, Angular, Jenkins, SonarQube, and Docker for automated build, test, deploy, and monitoring.",
    link: "https://github.com/abidijesser/Spring-Angular-DevOps",
  },
  {
    id: 6,
    image: card6,
    category: "Angular, Spring Boot, Microservices, DevOps",
    title: "E-Commerce Microservices Platform",
    description:
      "A scalable online shopping platform for browsing products, managing orders, and processing payments.",
    link: "https://github.com/abidijesser/Ecommerce-Microservices-Platform",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here’s a selection of my recent projects, highlighting my expertise in building efficient, user-focused, and visually engaging web applications.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} target="_blank" />
          ))}
        </div>
      </div>
      {/* <div className="text-center">
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Project
        </a>
      </div> */}
    </div>
  );
};

export default Portfolio;
