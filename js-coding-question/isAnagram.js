// JS Coding Question #6: Is Anagram

function isAnagram(str1, str2) {
  return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('')
}

// Other solution:

function createCharMap (str) {
  const map = {}
  const normalizedString = str.replace(/[^\w]/g, '').toLowerCase()

  for (let char of normalizedString) {
    map[char] = map[char] + 1 || 1
  }

  return map
}

function isAnagram2(stringA, stringB) {
  const charMapA = createCharMap(stringA)
  const charMapB = createCharMap(stringB)

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
    return false
  }

  for (let char in charMapA) {
    if (charMapA[char] !== charMapB[char]) {
      return false
    }
  }

  return true
}