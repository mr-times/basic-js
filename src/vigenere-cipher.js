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

  constructor(a = true) {
    this.direct = a;
}

checkArguments(text, key) {
    if (text === undefined || key === undefined) throw new Error('Incorrect arguments!');
    else {
        key = key.toUpperCase();
        text = text.toUpperCase();
    };
}

encrypt(text, key) {
    this.checkArguments(text, key);
    console.log(text);
    console.log(key);
    if (key.length < text.length) {
        key = key.repeat(Math.ceil(text.length / key.length));
    }
    key = key.toUpperCase();
    text = text.toUpperCase();
    console.log(text);
    console.log(key);
    let codedText = '';
    let j = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i].match(/[a-zA-Z]/)) {
            console.log(`Match ${text[i]}`);
            console.log(text.charCodeAt(i));
            console.log(`Match ${key[j]}`);
            console.log(key.charCodeAt(i));
            codedText += String.fromCharCode(65 + (text.charCodeAt(i) - 65 + key.charCodeAt(j) - 65) % 26);
            j++;

            console.log(`calculated ${65 + (text.charCodeAt(i) - 65 + key.charCodeAt(i) - 65) % 26}`);
        } else {
            console.log(`Not Matched ${text[i]}`);
            codedText += text[i];
        }
    }

    if (this.direct) {
        return codedText
    } else { return codedText.split("").reverse().join("") };

}
decrypt(text, key) {
    this.checkArguments(text, key);

    console.log(text);
    console.log(key);

    if (key.length < text.length) {
        key = key.repeat(Math.ceil(text.length / key.length));
    }
    key = key.toUpperCase();
    text = text.toUpperCase();

    console.log(text);
    console.log(key);

    let codedText = '';
    let j = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i].match(/[a-zA-Z]/)) {
            console.log(`Match ${text[i]}`);
            console.log(text.charCodeAt(i));
            console.log(`Match ${key[j]}`);
            console.log(key.charCodeAt(i));
            codedText += String.fromCharCode(65 + (text.charCodeAt(i) - key.charCodeAt(j) + 26) % 26);
            j++;

            console.log(`calculated ${(65 + (text.charCodeAt(i) - key.charCodeAt(j) + 26) % 26)}: ${String.fromCharCode(65 + (text.charCodeAt(i) - key.charCodeAt(j) + 26) % 26)}`);
        } else {
            console.log(`Not Matched ${text[i]}`);
            codedText += text[i];
        }
    }


    if (this.direct) {
        return codedText
    } else { return codedText.split("").reverse().join("") };
}
}

module.exports = {
  VigenereCipheringMachine
};
