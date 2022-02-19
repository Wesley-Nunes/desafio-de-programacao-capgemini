/**
 * Check if a string could be considered a strong password
 * @param {String} password String to be checked
 * @return {Number} The minimum of characters needed to password be considered strong
 */
function strongPasswordCheck(password) {
  if (typeof password !== "string") {
    throw new TypeError("password has to be a string");
  }
  const MINSIZE = 6;
  let count = 0;

  const string = {
    needDigit: (string) => !/\d/.test(string),
    needUpperCase: (string) => !/[A-Z]/.test(string),
    needLowerCase: (string) => !/[a-z]/.test(string),
    needSpecialChar: (string) => !/[!@#$%^&*()\-+]/.test(string),
  };

  count += string.needDigit(password);
  count += string.needUpperCase(password);
  count += string.needLowerCase(password);
  count += string.needSpecialChar(password);

  return password.length + count < MINSIZE ? MINSIZE - password.length : count;
}

module.exports = strongPasswordCheck;
