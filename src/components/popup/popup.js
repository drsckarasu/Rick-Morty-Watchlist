import './popup.scss';
import PropTypes from 'prop-types';

const Popup = ({ closePopup, character }) => {
  const {
    name,
    status,
    species,
    type,
    gender,
    image,
    location,
  } = character;

  return (
    <div
      className="popup_background"
      onClick={() => closePopup(false)}
      role="button"
      tabIndex="0"
      onKeyPress={() => {}}
    >
      <div
        className="popup_container"
        onClick={(e) => e.stopPropagation()}
        role="button"
        tabIndex="0"
        onKeyPress={() => {}}
      >
        <div className="popup_container_close-btn">
          <button
            type="button"
            className="close-btn"
            onClick={() => closePopup(false)}
          >
            <span className="icon-cross" />
          </button>
        </div>

        <div className="popup_container_info">
          <div className="popup_container_img">
            <img src={`${image}`} alt="rick-morty-img" />
          </div>
          <div className="popup_container_description">
            <p className="description">
              <span className="label">Name:</span>
              {name}
            </p>
            <p className="description">
              <span className="label">Status:</span>
              {status}
            </p>
            <p className="description">
              <span className="label">Species:</span>
              {species}
            </p>
            <p className="description">
              <span className="label">Type:</span>
              {type}
            </p>
            <p className="description">
              <span className="label">Gender:</span>
              {gender}
            </p>
            <p className="description">
              <span className="label">Location:</span>
              {location.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;

Popup.propTypes = {
  closePopup: PropTypes.func,
  character: PropTypes.object,
};

Popup.defaultProps = {
  closePopup: () => {},
  character: {},
};
