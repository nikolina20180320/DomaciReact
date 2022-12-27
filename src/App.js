import './App.css';
import { Route, Routes } from 'react-router';
import ForecastPage from './components/ForecastPage';
import HomePage from './components/HomePage';

function App() {
  return (
    <Routes>
      <Route path='/forecast' element={<ForecastPage />} />
      <Route path='*' element={<HomePage />} />
    </Routes>
  );
}

export default App;
