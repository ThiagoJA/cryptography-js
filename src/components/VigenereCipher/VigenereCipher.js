import { useState } from 'react';
import encrypts from '../../helpers/Encrypts';

const VigenereCipher = () => {
	const [text, setText] = useState('')
	const [key, setKey] = useState('')
	const [encryptedText, setEncryptedText] = useState('')
	return (
		<div className='input_box'>
			<input className='input_text' type='text' placeholder='Type text' onChange={(e) => setText(e.target.value)} />
			<input className='input_text' type='text' placeholder='Type key' onChange={(e) => setKey(e.target.value)} />
			<button className='encrypt_button' onClick={() => encrypts.vigenereCipher(text, key, setEncryptedText)}>Encrypt</button>
			<div className='encrypted_text'>{encryptedText}</div>
		</div>
	)
}

export default VigenereCipher;
