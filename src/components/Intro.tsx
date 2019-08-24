import React from "react";

import styles from "./Intro.module.css";

const Intro: React.FC = () => {
  return (
    <div className={styles.Intro}>
      <h2>Vọc cùng Thành #9 - Demo</h2>
      <ul>
        <li>
          <a href="">
            <span role="img" aria-label="pointing-left-hand">
              👉
            </span>{" "}
            DevNow Article
          </a>
        </li>
        <li>
          <a href="">
            <span role="img" aria-label="pointing-left-hand">
              👉
            </span>{" "}
            Source code
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Intro;
