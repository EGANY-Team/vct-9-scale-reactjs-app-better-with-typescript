import React from "react";
import styles from "./AnimeCapsule.module.css";
import AnimeCapsuleProps from "../models/AnimeCapsuleProps";

const AnimeList: React.FC<AnimeCapsuleProps> = ({ anime }) => {
  return (
    <div className={styles.AnimeCapsule}>
      <div
        className={styles.AnimeCapsuleCover}
        style={{ backgroundImage: `url(${anime.image_url})` }}
        title={anime.title}
      />
      <h3>
        <a href={anime.url}>{anime.title}</a>
      </h3>
      <p>{anime.synopsis}</p>
    </div>
  );
};

export default AnimeList;
