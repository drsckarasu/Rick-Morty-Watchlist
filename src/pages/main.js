import { Outlet } from 'react-router-dom';
import LinkTab from '../components/linkTab/linkTab';
import './main.scss';

const Main = () => (
  <div className="main">
    <div className="tabs">
      <LinkTab placeholder="Characters" path="/Rick-Morty-Watchlist/characters" />
      <LinkTab placeholder="My watch list" path="/Rick-Morty-Watchlist/watchList" />
    </div>
    <div className="table">
      <Outlet />
    </div>
  </div>
);

export default Main;
