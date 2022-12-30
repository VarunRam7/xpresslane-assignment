import './App.css';

import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import { useState } from 'react';

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Navbar setToggle={setToggle} />
      <Home />
      <Footer />
    </>
  );
}

export default App;
