import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Main from './pages/main';
import Characters from './components/characters/characters';
import Watch from './components/watchList/watch';

const App = () => (
  <div className="wrapper">
    <BrowserRouter>
      <Routes>
        <Route path="/Rick-Morty-Watchlist/" element={<Main />}>
          <Route path="/Rick-Morty-Watchlist/characters" element={<Characters />} />
          <Route path="/Rick-Morty-Watchlist/watchList" element={<Watch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
