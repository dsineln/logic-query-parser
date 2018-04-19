'use strict';

var lexemes = require('../config/lexemes.js');

function checkDeep(current, next, config, isPositive) {
  var positiveMatched = false;
  for(var i = 0, c = config.length; i < c; i += 1) {
    if(next === 'endBlock' && current === 'startBlock') {
      throw new Error("Empty block");
    }
    if(next === 'endArray' && current === 'startArray') {
      throw new Error("Empty array");
    }
    if(!isPositive && next === config[i]) {
      throw new Error((next ? next : 'end of string') + " just after " + current);
    }

    if(isPositive) {
      if (!next) {
        throw new Error(("Empty block just after ") + current);
      }
      if (next === config[i]) {
        positiveMatched = true;
      }
    }
  }

  if (isPositive && !positiveMatched) {
    throw new Error((next ? next : 'end of string') + " just after " + current);
  }
}

function check(current, next, config) {
  if(config.negative) {
    checkDeep(current, next, config.negative, false);
  }

  if(config.positive) {
    checkDeep(current, next, config.positive, true);
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
