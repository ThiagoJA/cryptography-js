const caesarCipher = (text, setEncryptedText) => {
	let auxText = "";
	for (let i = 0; i <= text.length - 1; i++) {
		console.log(text.charCodeAt(i))
		const encryptedCode = text.charCodeAt(i) >= 120 ? (text.charCodeAt(i) - 120)*1 + 97 : text.charCodeAt(i) + 3
		auxText += String.fromCharCode(encryptedCode)
	}
	setEncryptedText(auxText)
}

export default caesarCipher;