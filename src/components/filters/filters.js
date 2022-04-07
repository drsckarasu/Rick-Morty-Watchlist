import PropTypes from 'prop-types';
import './filters.scss';

const Filters = ({
  setStatus,
  setCurrentPage,
  setGender,
  setSpecies,
}) => {
  const statusHandler = (e) => {
    if (e.target.value === 'alive') {
      setStatus('&status=alive');
    } else if (e.target.value === 'dead') {
      setStatus('&status=dead');
    } else if (e.target.value === 'unknown') {
      setStatus('&status=unknown');
    } else {
      setStatus('');
    }
    setCurrentPage(1);
  };

  const genderHandler = (e) => {
    if (e.target.value === 'male') {
      setGender('&gender=male');
    } else if (e.target.value === 'female') {
      setGender('&gender=female');
    } else if (e.target.value === 'genderless') {
      setGender('&gender=genderless');
    } else if (e.target.value === 'unknown') {
      setGender('&gender=unknown');
    } else {
      setGender('');
    }
    setCurrentPage(1);
  };

  const speciesHandler = (e) => {
    if (e.target.value === 'human') {
      setSpecies('&species=human');
    } else if (e.target.value === 'alien') {
      setSpecies('&species=alien');
    } else if (e.target.value === 'humanoid') {
      setSpecies('&species=humanoid');
    } else if (e.target.value === 'poopybutthole') {
      setSpecies('&species=poopybutthole');
    } else if (e.target.value === 'mythological') {
      setSpecies('&species=mythological');
    } else if (e.target.value === 'robot') {
      setSpecies('&species=robot');
    } else if (e.target.value === 'cronenberg') {
      setSpecies('&species=cronenberg');
    } else if (e.target.value === 'animal') {
      setSpecies('&species=animal');
    } else if (e.target.value === 'disease') {
      setSpecies('&species=disease');
    } else if (e.target.value === 'unknown') {
      setSpecies('&species=unknown');
    } else {
      setSpecies('');
    }
    setCurrentPage(1);
  };

  return (
    <div className="filters">
      <div className="select-filters">
        <select onChange={statusHandler} className="filter">
          <option>Status</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      <div className="select-filters">
        <select onChange={genderHandler} className="filter">
          <option>Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      <div className="select-filters">
        <select onChange={speciesHandler} className="filter">
          <option>Species</option>
          <option value="human">Human</option>
          <option value="alien">Alien</option>
          <option value="humanoid">Humanoid</option>
          <option value="poopybutthole">Poopybutthole</option>
          <option value="mythological">Mythological Creature</option>
          <option value="animal">Animal</option>
          <option value="robot">Robot</option>
          <option value="cronenberg">Cronenberg</option>
          <option value="disease">Disease</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;

Filters.propTypes = {
  setStatus: PropTypes.func,
  setCurrentPage: PropTypes.func,
  setGender: PropTypes.func,
  setSpecies: PropTypes.func,
};

Filters.defaultProps = {
  setStatus: () => {},
  setCurrentPage: () => {},
  setGender: () => {},
  setSpecies: () => {},
};
