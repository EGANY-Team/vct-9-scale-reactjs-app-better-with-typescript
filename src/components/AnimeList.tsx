import React from "react";
import AnimeListProps from "../models/AnimeListProps";

import AnimeCapsule from "./AnimeCapsule";
import styles from "./AnimeList.module.css";

const AnimeList: React.FC<AnimeListProps> = ({ animes }) => {
  function renderAnimeGrid() {
    if (!animes) {
      return <p>Searching...</p>;
    }
    if (animes.length === 0) {
      return (
        <p>Try to type something in the search box (at least 3 characters)</p>
      );
    }

    return animes.map(anime => <AnimeCapsule anime={anime} />);
  }

  return (
    <div
      className={
        animes && animes.length > 0 ? styles.AnimeList : styles.EmptyAnimeList
      }
    >
      {renderAnimeGrid()}
    </div>
  );
};

export default AnimeList;
