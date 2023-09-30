import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Header from './Components/Header';
import { useState } from 'react';

function App() {

  const [toggle, setToggle] = useState("light");

  return (
    
    <div className={`${toggle} ${toggle == 'dark'?'bg-black' : null } h-[100vh]`}>
      <Header />
      <Home />
    </div>
  );
}

export default App;
