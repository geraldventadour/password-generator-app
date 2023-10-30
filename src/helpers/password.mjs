//@ts-check

/**
 *
 * @param {Number} min - start of range from ASCII Table
 * @param {Number} max - end of range from ASCII Table
 * @returns {String[]} an array of character from ASCII Table
 */
function generateArrayOfCharacterFromASCIITable(min, max) {
  const array = []
  for (let index = min; index <= max; index++) {
    const element = String.fromCharCode(index)
    array.push(element)
  }
  return array
}

const UPPERCASE_LETTERS = generateArrayOfCharacterFromASCIITable(65, 90)
const LOWERCASE_LETTERS = generateArrayOfCharacterFromASCIITable(97, 122)
const NUMBERS = generateArrayOfCharacterFromASCIITable(48, 57)
const SYMBOLS = [
  ...generateArrayOfCharacterFromASCIITable(33, 46),
  ...generateArrayOfCharacterFromASCIITable(58, 64),
  ...generateArrayOfCharacterFromASCIITable(91, 96),
  ...generateArrayOfCharacterFromASCIITable(123, 126)
]

/**
 * Returns a random character from the array passed as argument
 * @param {String[]} characters - An array of characters
 * @returns {String}
 */
function getRandomCharacterFrom(characters) {
  return characters[Math.floor(Math.random() * characters.length)]
}

/**
 *
 * @param {String} password
 * @returns {String}
 */
function sufflePassword(password) {
  const array = password.split('')
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array.join('')
}

/**
 * Password Options definiton
 * @typedef {Object} PasswordOptions
 * @property {Boolean} [hasUpperCaseLetters]
 * @property {Boolean} [hasLowerCaseLetters]
 * @property {Boolean} [hasNumbers]
 * @property {Boolean} [hasSymbols]
 */

/**
 * @param {Number} passwordLength - The password length
 * @param {PasswordOptions} passwordOptions - An object containing the options to use to generate the password
 * @returns {String}
 */
export function generatePassword(passwordLength, passwordOptions) {
  const isPasswordOptionsEmpty = Object.keys(passwordOptions).length === 0
  let generatedPassword = ''

  if (passwordLength <= 0 || isPasswordOptionsEmpty) {
    return ''
  }

  const { hasLowerCaseLetters, hasNumbers, hasSymbols, hasUpperCaseLetters } = passwordOptions

  while (generatedPassword.length < passwordLength) {
    if (hasLowerCaseLetters) {
      generatedPassword += getRandomCharacterFrom(LOWERCASE_LETTERS)
    }
    if (hasNumbers) {
      generatedPassword += getRandomCharacterFrom(NUMBERS)
    }
    if (hasSymbols) {
      generatedPassword += getRandomCharacterFrom(SYMBOLS)
    }
    if (hasUpperCaseLetters) {
      generatedPassword += getRandomCharacterFrom(UPPERCASE_LETTERS)
    }
  }

  if (generatedPassword.length > passwordLength) {
    generatedPassword = generatedPassword.slice(0, passwordLength - 1)
  }

  generatedPassword = sufflePassword(generatedPassword)
  return generatedPassword
}
