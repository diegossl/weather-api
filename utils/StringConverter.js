'use strict'

module.exports = {
  convert (text) {
    const hexadeciamlAccentMap 	= {
      a : /[\xE0-\xE6]/g,
      e : /[\xE8-\xEB]/g,
      i : /[\xEC-\xEF]/g,
      o : /[\xF2-\xF6]/g,
      u : /[\xF9-\xFC]/g,
      c : /\xE7/g,
      n : /\xF1/g
    }
    for (let character in hexadeciamlAccentMap ) {
      let regularExpression = hexadeciamlAccentMap[character]
      text = text.replace(regularExpression, character)
    }
    return text.split(" ").join("").toLowerCase()
  }
}