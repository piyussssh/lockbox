const crypto = require('crypto');

const ENCRYPTION_KEY1 = process.env.ENCRYPTION_KEY1; // First key (32 characters for AES-256)
const ENCRYPTION_KEY2 = process.env.ENCRYPTION_KEY2; // Second key
const ENCRYPTION_KEY3 = process.env.ENCRYPTION_KEY3; // Third key
const IV_LENGTH = 16; // AES requires a 16-byte IV

function encrypt(text, key) {
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key, 'hex'), iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return iv.toString('hex') + ':' + encrypted;
}

function decrypt(text, key) {
  const textParts = text.split(':');
  const iv = Buffer.from(textParts.shift(), 'hex');
  const encryptedText = Buffer.from(textParts.join(':'), 'hex');
  const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key, 'hex'), iv);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

function tripleEncrypt(password) {
  const encrypted1 = encrypt(password, ENCRYPTION_KEY1);
  const encrypted2 = encrypt(encrypted1, ENCRYPTION_KEY2);
  const encrypted3 = encrypt(encrypted2, ENCRYPTION_KEY3);
  return encrypted3;
}

function tripleDecrypt(encryptedPassword) {
  const decrypted1 = decrypt(encryptedPassword, ENCRYPTION_KEY3);
  const decrypted2 = decrypt(decrypted1, ENCRYPTION_KEY2);
  const decrypted3 = decrypt(decrypted2, ENCRYPTION_KEY1);
  return decrypted3;
}

module.exports = { tripleEncrypt, tripleDecrypt };
    