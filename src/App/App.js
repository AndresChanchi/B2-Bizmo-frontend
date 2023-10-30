import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from '../components/Login/Login.js';
import { HomePage } from '../pages/HomePage/HomePage.jsx';
import { css } from './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;

