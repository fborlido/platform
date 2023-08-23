import { useState } from "react";

import Modal from "../components/Modal";

import projects from "../data/projects.json";
import images from "../assets/img";

const Projects = () => {
  const [projectIndex, setProjectIndex] = useState(null);

  return (
    <div>
      <h1 className="title">Our projects</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum amet
        reiciendis velit illum at? Illum exercitationem alias nesciunt,
        cupiditate, esse sed impedit a repudiandae itaque doloribus praesentium
        officiis, inventore rerum!
      </p>
      <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
        {projects.projects.map(({ title, description, imageURL }, index) => (
          <div
            key={index}
            className="bg-white dark:bg-primary p-2 border-2 border-primary dark:border-light rounded-sm"
          >
            <img
              src={images[imageURL]}
              alt=""
              className=" w-full h-[200px] object-cover"
            />
            <h2 className=" font-bold mt-4 text-lg">{title}</h2>
            <p className="mt-2">{description}</p>
            <button
              className="button text-sm mt-4 w-full dark:bg-dark dark:hover:bg-accent"
              onClick={() => setProjectIndex(index)}
            >
              More
            </button>
          </div>
        ))}
      </div>
      <Modal
        isOpened={projectIndex !== null}
        close={() => setProjectIndex(null)}
      >
        <div className="flex gap-4">
          <img src={images[projects?.projects[projectIndex]?.imageURL]} alt="" />
          <div className="">
            <h1 className="title">{projects?.projects[projectIndex]?.title}</h1>
            <p>{projects?.projects[projectIndex]?.description}</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Projects;
