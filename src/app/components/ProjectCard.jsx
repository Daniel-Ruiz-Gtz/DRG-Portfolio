import React, { useState } from "react";
import {
  CodeBracketIcon,
  EyeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Modal from "react-modal";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            target="_blank"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          <button
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            onClick={openModal}
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </button>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
          content: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
            background: "none",
            overflow: "auto",
            zIndex: 1000,
          },
        }}
        contentLabel="Imagen Ampliada"
      >
        <img
          src={imgUrl}
          alt={`Imagen Ampliada de ${title}`}
          className="max-w-full max-h-full"
        />
        <button className="absolute top-10 right-4" onClick={closeModal}>
          <XMarkIcon className="h-10 w-10 text-white text-5xl cursor-pointer font-boold" />
        </button>
      </Modal>
    </div>
  );
};

export default ProjectCard;
