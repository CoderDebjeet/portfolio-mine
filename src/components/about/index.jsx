import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          My programming journey began in school, where I first encountered HTML and discovered the art of crafting beautiful websites. 
          This initial spark led me to Java in the 9th grade, marking the start of my coding adventures. As I progressed through higher 
          secondary education, I delved into Python, creating impressive projects like a Restaurant Manager and a Hospital Manager using Tkinter. 
          Alongside Python, I learned both SQL and NoSQL databases.Upon entering college, I expanded my knowledge with HTML, CSS, JavaScript,
          React, and Next.js. My focus then shifted from web development to Android development, particularly cross-platform development, utilizing Flutter and Firebase. 
          This transition was fueled by my participation in a hackathon where I had to develop an Android application, a challenge I embraced and conquered.
          My innate curiosity and eagerness to learn new technologies have always driven me forward. Few months back I got a intern in a Government Reasearch 
          institute in Robotics Department where I learnt about Deep Learning .Currently, I am interning in Data Science and Deep Learning, working on projects in my final year. 
          My ultimate goal is to become a Data Scientist with the capability to deploy solutions, whether in web development or Android development. 
          This is my story, a continuous journey of learning and growth, driven by a passion for technology and innovation.
          Join me as I continue to explore new spells and technologies to shape the future .
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            25+ <sub className="font-semibold text-base">Projects</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            4+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=c,python,java,js,html,bootstrap,css,d3,docker,figma,firebase,git,github,graphql,cloudflare,jquery,kubernetes,aws,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,replit,tailwind,threejs,vercel,vite,vscode,tensorflow,flutter,kotlin`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

      </div>
    </section>
  );
};

export default AboutDetails;
