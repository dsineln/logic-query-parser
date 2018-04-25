'use strict';

var lexemes = require('../config/lexemes.js');

function checkDeep(current, next, config, isMandatoryPresent) {
  var mandatoryMatched = false;
  for(var i = 0, c = config.length; i < c; i += 1) {
    if(next === 'endBlock' && current === 'startBlock') {
      throw new Error("Empty block");
    }
    if(next === 'endArray' && current === 'startArray') {
      throw new Error("Empty array");
    }
    if(next === 'string' && current === 'string') {
      throw new Error("lack of operator in between two strings");
    }
    if(current === 'string' && next === null) {
      continue; // let it be as it's eof string
    }
    if(!isMandatoryPresent && next === config[i]) {
      throw new Error((next ? next : 'end of string') + " just after " + current);
    }

    if(isMandatoryPresent) {
      if (!next) {
        throw new Error(("Empty block just after ") + current);
      }
      if (next === config[i]) {
        mandatoryMatched = true;
      }
    }
  }

  if (isMandatoryPresent && !mandatoryMatched) {
    throw new Error((next ? next : 'end of string') + " just after " + current);
  }
}

function check(current, next, config) {
  if(config.negative) {
    checkDeep(current, next, config.negative, false);
  }

  if(config.mandatory) {
    checkDeep(current, next, config.mandatory, true);
  }
}

module.exports.check = function doCheck(lexemesArray) {
  var i = 0;
  var next = null;
  while(lexemesArray[i]) {
    next = lexemesArray[i + 1];

    if(lexemes[lexemesArray[i].type].checker) {
      check(lexemesArray[i].type, (next) ? next.type : null, lexemes[lexemesArray[i].type].checker);
    }

    i += 1;
  }
};
