import PropTypes from 'prop-types';
import WatchEpisode from './watchEpisode';
import './watchList.scss';

const WatchList = ({ episodes, setEpisodes, filteredEpisodes }) => (
  <div className="watch-container">
    <ul className="watch-list">
      {filteredEpisodes.map((episode) => (
        <WatchEpisode
          episodes={episodes}
          setEpisodes={setEpisodes}
          text={episode.text}
          key={episode.id}
          episode={episode}
        />
      ))}
    </ul>
  </div>
);

export default WatchList;

WatchList.propTypes = {
  episodes: PropTypes.array,
  setEpisodes: PropTypes.func,
  filteredEpisodes: PropTypes.array,
};

WatchList.defaultProps = {
  episodes: [],
  setEpisodes: () => {},
  filteredEpisodes: [],
};
