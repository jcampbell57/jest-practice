function caesarCipher(str, shiftFactor) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
      let char = str[i];
      let code = str.charCodeAt(i);

      // Handle uppercase letters
      if (code >= 65 && code <= 90) {
          char = String.fromCharCode(((code - 65 + shiftFactor) % 26) + 65);
      }
      // Handle lowercase letters
      else if (code >= 97 && code <= 122) {
          char = String.fromCharCode(((code - 97 + shiftFactor) % 26) + 97);
      }

      result.push(char);
  }

  return result.join('');
}

module.exports = caesarCipher;
