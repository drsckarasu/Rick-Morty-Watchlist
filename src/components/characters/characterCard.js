import PropTypes from 'prop-types';
import { useState } from 'react';
import Popup from '../popup/popup';
import './characterCard.scss';

const CharacterCard = ({ name, img, character }) => {
  const [openPopup, setPopup] = useState(false);
  return (
    <>
      <div className="list-item">
        <div
          className="list-item_img"
          onClick={() => setPopup(true)}
          role="button"
          tabIndex="0"
          onKeyPress={() => {}}
        >
          <img src={`${img}`} alt="rick-morty-img" />
        </div>

        <div className="list-item_name">
          <p className="name">
            {name}
          </p>
        </div>
      </div>
      {openPopup && (
        <Popup
          closePopup={setPopup}
          character={character}
        />
      )}
    </>
  );
};

export default CharacterCard;

CharacterCard.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  character: PropTypes.object,
};

CharacterCard.defaultProps = {
  name: '',
  img: '',
  character: {},
};
