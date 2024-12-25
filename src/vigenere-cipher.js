const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt() {
    if (!arguments || !arguments[0] || !arguments[1]) {
      throw new Error('Incorrect arguments!');
    }
    const msg = arguments[0].toLowerCase();
    const key = arguments[1].toLowerCase();
    const shift = [];
    for (let i = 0; i < key.length; i++) {
      shift.push(key.charCodeAt(i) - 97);
    }
    let k = 0;
    const msgCodes = [];
    for (let i = 0; i < msg.length; i++) {
      msgCodes.push(msg.charCodeAt(i))
    }
    let encryptedMsg = '';
    for (let j = 0; j < msgCodes.length; j++) {
      if (msgCodes[j] < 97 || msgCodes[j] > 122) {
        encryptedMsg += String.fromCharCode(msgCodes[j]);
      } else {
        if (k === shift.length) {
          k = 0;
        }
        let charCode = msgCodes[j] + shift[k];
        if (charCode > 122) {
          charCode = 97 + charCode - 122 - 1;
        }
        encryptedMsg += String.fromCharCode(charCode)
        k++;
      }
    }
    encryptedMsg = encryptedMsg.toUpperCase();
    return this.direct ? encryptedMsg : encryptedMsg.split('').reverse().join('');
  }
  decrypt() {
    if (!arguments || !arguments[0] || !arguments[1]) {
      throw new Error('Incorrect arguments!');
    }
    const msg = arguments[0].toLowerCase();
    const key = arguments[1].toLowerCase();
    const shift = [];
    for (let i = 0; i < key.length; i++) {
      shift.push(key.charCodeAt(i) - 97);
    }
    let k = 0;
    const msgCodes = [];
    for (let i = 0; i < msg.length; i++) {
      msgCodes.push(msg.charCodeAt(i))
    }
    let decryptedMsg = '';
    for (let j = 0; j < msgCodes.length; j++) {
      if (msgCodes[j] < 97 || msgCodes[j] > 122) {
        decryptedMsg += String.fromCharCode(msgCodes[j]);
      } else {
        if (k === shift.length) {
          k = 0;
        }
        let charCode = msgCodes[j] - shift[k];
        if (charCode < 97) {
          charCode = 122 + charCode - 97 + 1;
        }
        decryptedMsg += String.fromCharCode(charCode)
        k++;
      }
    }
    decryptedMsg = decryptedMsg.toUpperCase();
    return this.direct ? decryptedMsg : decryptedMsg.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
