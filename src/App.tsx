import React, { useEffect, useState } from "react";

import styles from "./App.module.css";
import devnowLogo from "./dev-now-logo.png";

import Intro from "./components/Intro";
import SearchBox from "./components/SearchBox";
import AnimeList from "./components/AnimeList";

import JikanSearchResult from "./models/JikanSearchResult";
import JikanService from "./services/jikan.service";

const App: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [animes, setAnimes] = useState<JikanSearchResult[] | null>([]);

  function handleQueryChange(ev: React.ChangeEvent<HTMLInputElement>) {
    setQuery(ev.target.value);
  }

  useEffect(() => {
    let timer: number;

    if (!query || query.length < 3) {
      setAnimes([]);
    } else {
      // query needs to have at least 3 characters
      setAnimes(null);
      timer = window.setTimeout(() => {
        JikanService.search({ query })
          .then(result => {
            setAnimes(result);
          })
          .catch(error => {
            console.log(error);
          });
      }, 500);
    }

    return () => {
      timer && window.clearTimeout(timer);
    };
  }, [query]);

  return (
    <div className={styles.App}>
      <img src={devnowLogo} alt="DevNow logo" />
      <Intro />
      <SearchBox query={query} updateQuery={handleQueryChange} />
      <AnimeList animes={animes} />
    </div>
  );
};

export default App;
