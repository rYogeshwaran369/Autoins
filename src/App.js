import logo from './logo.svg';
import './App.css';
import Login from './Pages/login';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Register from './Pages/Registration/register';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
      </Routes>
    </Router>
  );
}

export default App;