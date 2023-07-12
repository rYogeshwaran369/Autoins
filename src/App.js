import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Home from './Insurence/Pages/Home';


function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      {/* <Topnav/> */}
      <Routes>
        {/* <Route exact path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} /> */}
        <Route path="/home" element={<Home/>}/>
        {/* <Route path="/explore" element={<Explore/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;