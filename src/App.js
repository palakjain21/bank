import {React} from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/landingPage/LandingPage';
import Login from './components/login/Login';

function App() {
  return (
    <div className="App">
      
      <Routes>
      <Route
        path="/"
        element={<LandingPage />}
      />
       <Route
        path="/Login"
        element={<Login />}
      />
    </Routes>
    </div>
  );
}

export default App;
