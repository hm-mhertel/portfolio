import React from "react";

/**import image from "../images/desert sunset7_Tatooine.png";

const imageAltText = "image created with blender";*/

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const educationList = [
  {
    title: "Master - Applied Research in Engineering sciences",
    description:
      "Field of Renewable Energies, focussing on Fuel Cell System degradation and related operating strategies to minimize target parameters.",
    url: "",
    img: "../images/me.jpg",
  },
  {
    title: "Bachelor - Industrial Engineering",
    description: "Jack of Many trades Master of none",
    url: "",
    img: "../images/me.jpg",
  },
];

const Education = () => {
  return (
    <section className="padding" id="education">
      <h2 style={{ textAlign: "center" }}>Education</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div className="container">
          {educationList.map((edu) => (
            <div className="box" key={edu.title}>
              <a href={edu.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{edu.title}</h3>
                <img src={edu.img} alt="me"></img>
              </a>
              <p className="small">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
