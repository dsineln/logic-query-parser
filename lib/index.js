'use strict';

var lexemes = require('../config/lexemes.js');

var lexer = require('./lexer.js');
var checker = require('./checker.js');
var syntaxer = require('./syntaxer.js');

module.exports.parse = function parse(options, query) {
  if(!query) {
    query = options;
    options = {};
  }

  if (query === null || query === "") {
    throw new Error("Empty query string");
  }

  var lexemesArray = lexer.strToLexemes(query, options.spaces ? options.spaces : " \t\n");
  checker.check(lexemesArray);



  var tree = syntaxer.lexemesArrayToBinaryTree(options, lexemesArray);

  Object.keys(lexemes).forEach(function(name) {
    if(lexemes[name].postFunction) {
      tree = lexemes[name].postFunction(name, tree);
    }
  });

  if (tree === null || tree  === {}) {
    throw new Error("boom!");
  }

  return tree;
};

module.exports.utils = require('./utils.js');
