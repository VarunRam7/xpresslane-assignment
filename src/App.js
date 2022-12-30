import './App.css';

import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import { useState } from 'react';

function App() {
  //toggle used to switch between dark and light mode
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Navbar setToggle={setToggle} toggle={toggle} />
      <Home toggle={toggle} />
      <Footer />
    </>
  );
}

export default App;
