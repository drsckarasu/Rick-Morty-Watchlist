import PropTypes from 'prop-types';
import CharacterCard from './characterCard';

const CharactersList = ({ characters, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <ul>
      {characters.map((character) => (
        <CharacterCard
          key={character.created}
          name={character.name}
          img={character.image}
          character={character}
        />
      ))}
    </ul>
  );
};

export default CharactersList;

CharactersList.propTypes = {
  characters: PropTypes.array,
  loading: PropTypes.bool,
};

CharactersList.defaultProps = {
  characters: [],
  loading: false,
};
