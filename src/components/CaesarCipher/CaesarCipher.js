import { useState } from "react";
import encrypts from '../../helpers/Encrypts'

const CaesarCipher = () => {
  const [text, setText] = useState('')
  const [encryptedText, setEncryptedText] = useState('')
  return (
    <div className='input_box'>
      <input className='input_text' type='text' placeholder='Type text' onChange={(e) => setText(e.target.value)} />
      <button className='encrypt_button' onClick={() => encrypts.caesarCipher(text, setEncryptedText)}>Encrypt</button>
      <div className='encrypted_text'>{encryptedText}</div>{}
    </div>
  )

}

export default CaesarCipher;
