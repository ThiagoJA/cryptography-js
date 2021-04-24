import { useState } from 'react';
import './App.css';
import encrypts from './helpers/Encrypts';

function App() {
  const [text, setText] = useState("");
  const [encryptedText, setEncryptedText] = useState("")
  return (
    <div className='input_box'>
      <input className='input_text' type='text' placeholder='Type text' onChange={(e) => setText(e.target.value)} />
      <button className='encrypt_button' onClick={() => encrypts(text, setEncryptedText)}>Caesar Cipher</button>
      <div className='encrypted_text'>{encryptedText}</div>
    </div>
  );
}

export default App;
