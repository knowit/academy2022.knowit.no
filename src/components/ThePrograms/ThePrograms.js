import React from "react";
import css from "./ThePrograms.module.scss";

const ThePrograms = ({ pages }) => {
  console.log("The Programs:", pages);

  const programPages = pages.map(item => {
    const path = item.path.replace(/about-/, "");
    console.log("path fixed:", item.path, path);
    return (
      <li key={item.path}>
        <a href={path}>
          <div>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        </a>
      </li>
    );
  });

  return (
    <section id="theprograms" className={css.thePrograms}>
      <h2>Programmer for 2019/2020</h2>
      <nav>
        <ul>{programPages}</ul>
      </nav>
    </section>
  );
};

export default ThePrograms;
