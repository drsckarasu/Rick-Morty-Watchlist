import { useState, useEffect } from 'react';
import WatchListForm from './watchListForm';
import WatchList from './watchList';

const Watch = () => {
  const [inputText, setInputText] = useState('');
  const [episodes, setEpisodes] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredEpisodes, setFilteredEpisodes] = useState([]);

  useEffect(() => {
    const getLocalEpisodes = () => {
      if (!JSON.parse(localStorage.getItem('watchList'))) {
        localStorage.setItem('watchList', JSON.stringify([]));
      } else {
        const episodeLocal = JSON.parse(localStorage.getItem('watchList'));
        setEpisodes(episodeLocal);
      }
    };
    getLocalEpisodes();
  }, []);

  useEffect(() => {
    const saveLocalEpisodes = () => {
      localStorage.setItem('watchList', JSON.stringify(episodes));
    };
    saveLocalEpisodes();
  }, [episodes]);

  useEffect(() => {
    if (status === 'completed') {
      setFilteredEpisodes(episodes.filter((episode) => episode.completed === true));
    } else if (status === 'uncompleted') {
      setFilteredEpisodes(episodes.filter((episode) => episode.completed === false));
    } else {
      setFilteredEpisodes(episodes);
    }
  }, [status, episodes]);

  return (
    <div>
      <WatchListForm
        episodes={episodes}
        setEpisodes={setEpisodes}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <WatchList
        episodes={episodes}
        setEpisodes={setEpisodes}
        filteredEpisodes={filteredEpisodes}
      />
    </div>
  );
};

export default Watch;
