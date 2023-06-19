'use strict'

function modString(str) {
  if (!str) return str;

  return str[8].toLowerCase(), str[0].toUpperCase() + str.slice(1);
}

alert(modString('привет Мир'));

