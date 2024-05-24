import CryptoJS from 'crypto-js';
import JSEncrypt from 'jsencrypt';

const aes_key = CryptoJS.enc.Utf8.parse('aes-encode-key-string');
const rsa_public_key = 'rsa-public-key-string';

/** AES(对称)加/解密 */
export const aesCrypto = {
	encode(password: string) {
		const word = CryptoJS.enc.Utf8.parse(password);
		const crypted = CryptoJS.AES.encrypt(word, aes_key, {
			mode: CryptoJS.mode.ECB,
			padding: CryptoJS.pad.Pkcs7
		});
		return CryptoJS.enc.Base64.stringify(crypted.ciphertext); // 返回base64格式密文
	},
	decode(encryptStr: string) {
		const base64 = CryptoJS.enc.Base64.parse(encryptStr);
		const word = CryptoJS.enc.Base64.stringify(base64);
		const decrypted = CryptoJS.AES.decrypt(word, aes_key, {
			mode: CryptoJS.mode.ECB,
			padding: CryptoJS.pad.Pkcs7
		});
		const decryptedStr = decrypted.toString(CryptoJS.enc.Utf8);
		return decryptedStr.toString();
	}
};

/** SHA256加密 */
export const sha256Crypto = (password: string) => {
	return CryptoJS.SHA256(password).toString();
};

/** MD5加密 */
export const md5Crypto = (password: string) => {
	return CryptoJS.MD5(password).toString();
};

/** HMac加密 */
export const hmacCrypto = (password: string, encryptKey: string) => {
	return CryptoJS.HmacMD5(password, encryptKey).toString();
};

/** RSA(非对称)加/解密 */
export const rsaCrypto = {
	encode(password: string) {
		const jsencrypt = new JSEncrypt();
		jsencrypt.setPublicKey(rsa_public_key);
		return jsencrypt.encrypt(password) as string;
	},
	deCode(encryptStr: string, privateKey: string) {
		const jsencrypt = new JSEncrypt();
		jsencrypt.setPrivateKey(privateKey);
		return jsencrypt.encrypt(encryptStr) as string;
	}
};
