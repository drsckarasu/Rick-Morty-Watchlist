import { useState, useEffect } from 'react';
import axios from 'axios';
import CharactersList from './charactersList';
import Pagination from '../pagination/pagination';
import Filters from '../filters/filters';
import './characters.scss';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');
  const [species, setSpecies] = useState('');

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      const res = await axios.get(`https://rickandmortyapi.com/api/character/?page=${currentPage}${status}${gender}${species}`);
      setCharacters(res.data);
      setLoading(false);
    };
    fetchCharacters();
  }, [currentPage, status, gender, species]);

  return (
    <div className="characters">
      <Filters
        setStatus={setStatus}
        setCurrentPage={setCurrentPage}
        setGender={setGender}
        setSpecies={setSpecies}
      />
      <CharactersList characters={characters.results} loading={loading} />
      <Pagination
        info={characters.info}
        onPageChange={(page) => setCurrentPage(page)}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Characters;
