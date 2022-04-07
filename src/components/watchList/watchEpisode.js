import PropTypes from 'prop-types';
import './watchEpisode.scss';

const WatchEpisode = ({
  text,
  episode,
  episodes,
  setEpisodes,
}) => {
  const deleteHandler = () => {
    setEpisodes(episodes.filter((el) => el.id !== episode.id));
  };
  const completeHandler = () => {
    setEpisodes(episodes.map((item) => {
      if (item.id === episode.id) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    }));
  };
  return (
    <div className="watch-episode">
      <li className={`watch-item ${episode.completed ? 'completed' : ''}`}>{text}</li>
      <button onClick={completeHandler} className="complete-btn" type="button">
        <i className="fas fa-check" />
      </button>
      <button onClick={deleteHandler} className="trash-btn" type="button">
        <i className="fas fa-trash" />
      </button>
    </div>
  );
};

export default WatchEpisode;

WatchEpisode.propTypes = {
  text: PropTypes.string,
  episode: PropTypes.object,
  episodes: PropTypes.array,
  setEpisodes: PropTypes.func,
};

WatchEpisode.defaultProps = {
  text: '',
  episode: {},
  episodes: [],
  setEpisodes: () => {},
};
