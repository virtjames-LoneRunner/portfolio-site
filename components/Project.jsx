import React from "react";

function Project({ project }) {
  return (
    <div
      className={`flex items-end project abg-[#04080f] h-screen`}
      style={{
        background: `linear-gradient(to bottom left, rgba(87, 97, 236, 0.5), rgba(17, 24, 39, 0.9)), url(${project?.img_link})`,
      }}
    >
      {/* <img src="/img/projects/cmm.png" alt="" /> */}
      <div className="h-1/3 w-full px-6 sm:px-12 md:px-18">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-medium mb-4">
          {project?.name}
        </h1>
        {/* <hr className="my-4" /> */}
        <p className="text-sm sm:text-md md:text-xl w-1/2">
          {project?.description}
        </p>
      </div>
    </div>
  );
}

export default Project;
