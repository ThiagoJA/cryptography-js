const caesarCipher = (text, setEncryptedText) => {
	let auxText = "";
	for (let i = 0; i < text.length; i++) {
		const encryptedCode = text.charCodeAt(i) >= 120 ? (text.charCodeAt(i) - 120) * 1 + 97 : text.charCodeAt(i) + 3
		auxText += String.fromCharCode(encryptedCode)
	}
	setEncryptedText(auxText)
}

const vigenereCipher = (text, key, setEncryptedText) => {
	const arrKey = [];
	const formattedKey = key.toUpperCase().trim()
	const formattedText = " " + text.toUpperCase().trim()
	let encryptedKey = "";
	let counter = 0;
	if (formattedKey === "") {
		window.alert("Enter the key to encrypt");
	}
	for (let i = 0; i < formattedKey.length; i++) {
		arrKey[i] = formattedKey.charCodeAt(i) - 65;
	}
	if (formattedText === "") {
		window.alert("Enter valid text");
	}
	for (let i = 0; i < formattedText.length; i++) {
		let charCode = formattedText.charCodeAt(i);
		if (charCode < 'A'.charCodeAt(0) || charCode > 'Z'.charCodeAt(0)) {
			const charText = formattedText.charAt(i);
			encryptedKey += charText;
		}
		else {
			charCode = charCode - 65;
			const pos = (arrKey[counter++ % arrKey.length] + charCode) % 26;
			encryptedKey += String.fromCharCode(65 + pos);
		}
	}
	encryptedKey = encryptedKey.toLowerCase();
	setEncryptedText(encryptedKey)
}
const ciphers = { caesarCipher, vigenereCipher }
export default ciphers;