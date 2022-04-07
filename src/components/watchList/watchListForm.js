import PropTypes from 'prop-types';
import './watchListForm.scss';

const WatchListForm = ({
  episodes,
  setEpisodes,
  inputText,
  setInputText,
  setStatus,
}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitWatchHandler = (e) => {
    e.preventDefault();
    setEpisodes([
      ...episodes, {
        text: inputText,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    setInputText('');
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="watch-input" />
      <button onClick={submitWatchHandler} className="watch-button" type="submit">
        <i className="fas fa-plus-square" />
      </button>
      <div className="select">
        <select onChange={statusHandler} className="filter-watch">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default WatchListForm;

WatchListForm.propTypes = {
  episodes: PropTypes.array,
  setEpisodes: PropTypes.func,
  inputText: PropTypes.string,
  setInputText: PropTypes.func,
  setStatus: PropTypes.func,
};

WatchListForm.defaultProps = {
  episodes: [],
  setEpisodes: () => {},
  inputText: '',
  setInputText: () => {},
  setStatus: () => {},
};
