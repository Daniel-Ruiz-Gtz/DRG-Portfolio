"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Python</li>
        <li>Git</li>
        <li>Shell</li>
        <li>Linux</li>
        <li>Scripting</li>
        <li>Jenkins</li>
        <li>Robot Framework</li>
        <li>Testing Design</li>
        <li>Agile Methologies</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li className="font-bold">
          Computer Science Engineering | Universidad de Guadalajara, Aug 2018 -
          Dec 2022
        </li>
        <p>
          The computer engineering professional specializing in system software
          will be able to design and develop foundational software systems (the
          core programming systems on a computer); interact with digital and
          telecommunications subsystems (networks); design and implement
          operating systems; conceive and design new programming languages, as
          well as build translators (compilers); specify computer architectures
          and develop application software relevant to their field.
        </p>
      </ul>
    ),
  },
  {
    title: "Profesional Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li className="font-bold">
          Automation Testing Intership | IBM, Jan 2022 - Jan 2023
        </li>
        <p>
          Internship mostly focused on test creation and process automation to
          be able to stress some environments. During this time I have worked
          with Python and Robotframework as main technologies. A very important
          skill that I acquired in this period was the use of linux and knowing
          how to move within the environment thanks to the use of commands and
          shortcuts. I have worked with other secondary tools such as: Jenkins,
          Jmeter in addition to the constant use of the terminal. The projects
          in which I collaborated were: Hydra (TS7700) and iLAB (Sprectrum
          Virtualize)
        </p>
        <li className="font-bold">
          System Test Engineer | IBM, Jan 2022 - Actual
        </li>
        <p>
          Technical Specialists in this job role will have expertise in the
          planning, design, management, execution, and reporting of tests using
          appropriate testing tools and techniques, and conforming to agreed
          standards, to ensure that new and amended systems, together with any
          interfaces, perform as specified together with the business. Typical
          examples of the deliverables are testing strategies, test plans, test
          cases, test reports, and quality metrics. Technical Specialists who
          primarily apply their technical skills in an internal or external
          customer billable services and implementation environment.
        </p>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className=" text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.jpeg" width={400} height={400} />
        <div>
          <h2 className="text-3xl font-bold mb-4"> About Me </h2>
          <p className="text-base lg:text-lg">
            I am a passionate Computer Engineering graduate from Universidad de
            Guadalajara, Mexico, with a strong focus on Automation and
            Scripting. I thoroughly enjoy developing solutions to automate tasks
            and streamline processes, making life easier through code.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Profesional Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
