import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "UI/UX Design",
    description:
      "I create intuitive, beautiful, and accessible interfaces using design thinking, wireframes, and modern tools like Figma.",
  },
  {
    id: 2,
    title: "Full-Stack Development",
    description:
      "I build responsive web apps and APIs with JavaScript, React, Node.js, Python, and databases — clean, fast, and scalable.",
  },
  {
    id: 3,
    title: "DevOps Engineering",
    description:
      "I automate CI/CD, containerize with Docker, orchestrate with Kubernetes, and manage infrastructure with Terraform.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I design, build, and deploy reliable software — from user interfaces to backend systems and automated pipelines.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My approach combines creativity and technical expertise to deliver
            solutions that are both visually appealing and highly functional for
            users.
          </p>
        </div>
        <a
          href="#!"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
