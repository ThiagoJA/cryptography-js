import { useState } from 'react';
import './App.css';
import CaesarCipher from './components/CaesarCipher/CaesarCipher';
import NavBar from './components/NavBar/NavBar';
import PlayfairCipher from './components/PlayfairCipher/PlayfairCipher';
import VigenereCipher from './components/VigenereCipher/VigenereCipher';

function App() {
  const [tab, setTab] = useState(0);
  const components = [
    <CaesarCipher />,
    <VigenereCipher />,
    <PlayfairCipher />,
  ]
  return (
    <>
      <NavBar setTab={setTab} tab={tab} />
      {components[tab]}
    </>
  );
}

export default App;
