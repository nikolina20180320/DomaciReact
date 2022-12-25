import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import HomePage from './components/HomePage';
import DetailsPage from './components/DetailsPage';

function App() {
  return (
    <Routes>
      <Route path='/weather/:date' element={<DetailsPage />} />
      <Route path='*' element={<HomePage />} />
    </Routes>
  );
}

export default App;
