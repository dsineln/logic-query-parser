var lexerHelper = require('../lib/helpers/lexer.js');
var syntaxerHelper = require('../lib/helpers/syntaxer.js');
var postHelper = require('../lib/helpers/post.js');

var andLexeme = {
  regexp: 'and(\\s|\\(|\\)|"|$)',
  escaped: true,
  modifiers: 'i',
  lexer: lexerHelper.generateCutLexer('and', 3),
  syntaxer: syntaxerHelper.andSyntaxer,
  priority: 4,
  checker: { negative: ['endBlock', null] }
};

var andAmpersandLexeme = {
  regexp: '&&(\\s|\\(|\\)|"|$)',
  escaped: true,
  modifiers: 'i',
  lexer: lexerHelper.generateCutLexer('and', 2),
  syntaxer: syntaxerHelper.andSyntaxer,
  priority: 4,
  checker: { negative: ['endBlock', null]}
};

var orLexeme = {
  regexp: '(or|\\|\\|)(\\s|\\(|\\)|"|$)',
  escaped: true,
  modifiers: 'i',
  lexer: lexerHelper.generateCutLexer('or', 2),
  syntaxer: syntaxerHelper.orSyntaxer,
  priority: 5,
  checker: { negative: ['endBlock', null] }
};

var equalLexeme = {
  regexp: '(eq|==)(\\s|"|$)',
  escaped: true,
  modifiers: 'i',
  lexer: lexerHelper.generateCutLexer('eq', 2),
  syntaxer: syntaxerHelper.eqSyntaxer,
  priority: 3,
  checker: { positive: ['string', null] }
};

var notLexeme = {
  regexp: 'not(\\s|\\(|\\)|"|$)',
  escaped: true,
  modifiers: 'i',
  lexer: lexerHelper.generateCutLexer('not', 3),
  syntaxer: syntaxerHelper.notSyntaxer,
  priority: 1,
  checker: { positive: ['startBlock','string', null]}
};

var startBlockLexeme = {
  regexp: '\\(',
  escaped: true,
  lexer: lexerHelper.generateCutLexer('startBlock', 1),
  syntaxer: syntaxerHelper.blockSyntaxer,
  priority: 0,
  postFunction: postHelper.blockPostTreatment,
  checker: { negative: ['endBlock', null]}
};

var endBlockLexeme = {
  regexp: '\\)',
  escaped: true,
  lexer: lexerHelper.generateCutLexer('endBlock', 1),
};

var stringLexeme = {
  regexp: '"?.*',
  lexer: lexerHelper.stringLexer([startBlockLexeme, endBlockLexeme]),
  syntaxer: syntaxerHelper.stringSyntaxer,
  priority: 0
};

module.exports = {
  and: andLexeme,
  andAmpersand: andAmpersandLexeme,
  or: orLexeme,
  eq: equalLexeme,
  not: notLexeme,
  startBlock: startBlockLexeme,
  endBlock: endBlockLexeme,
  string: stringLexeme
};
