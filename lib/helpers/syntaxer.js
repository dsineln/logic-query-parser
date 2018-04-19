'use strict';

function getLowPriorityBlock(tree, priority) {
  var lexemes = require('../../config/lexemes.js');

  if(priority === undefined) {
    priority = -1;
  }

  if(!tree.lexeme || lexemes[tree.lexeme.type].priority < priority || tree.right === null) {
    if(tree.left && Object.keys(tree.left).length == 0) {
      return tree.left;
    }

    return tree;
  }

  return getLowPriorityBlock(tree.right, priority);
}

function defaultOperator(options, currentBlock, newBlock) {
  var tempLexeme = {
    type: currentBlock.lexeme.type,
    value: currentBlock.lexeme.value
  };

  currentBlock.lexeme = {
    type: options.defaultOperator || 'and'
  };

  currentBlock.left = {
    lexeme: tempLexeme,
    left: currentBlock.left,
    right: currentBlock.right
  };

  currentBlock.right = newBlock;

  if(!currentBlock.lexeme.value) {
    delete currentBlock.lexeme.value;
  }
}

module.exports.stringSyntaxer = function stringSyntaxer(options, lexemesArray, i, tree) {
  var lexemes = require('../../config/lexemes.js');
  var block = getLowPriorityBlock(tree, lexemes.string.priority);

  var tempLexeme = {
    type: 'string',
    value: lexemesArray[i].value,
  };

  if(block.lexeme) {
    defaultOperator(options, block, {
      lexeme: tempLexeme,
      left: null,
      right: null
    });
    return i + 1;
  }

  block.lexeme = tempLexeme;

  block.left = null;
  block.right = null;

  return i + 1;
};

function generateBasicSyntaxer(type) {
  return function basicSyntaxer(options, lexemesArray, i, tree) {
    //console.log(`DEBUG___ --------->`);
    var lexemes = require('../../config/lexemes.js');
    //console.log(`DEBUG___ basic syntaxer before ${JSON.stringify(tree)}`);
    var block = getLowPriorityBlock(tree, lexemes[type].priority);
    //console.log(`DEBUG___ basic syntaxer, type = ${type}, tree = ${tree }`);
    if(!block.lexeme) {
      throw new Error("Nothing before " + type + " block");
    }

    //console.log(`DEBUG___ basic syntaxer BLOCK: ${JSON.stringify(block)}`);

    var tempLexeme = {
      type: block.lexeme.type,
      value: block.lexeme.value
    };

    block.lexeme = {
      type: type
    };

    block.left = {
      lexeme: tempLexeme,
      left: block.left,
      right: block.right
    };

    block.right = {};

    //console.log(`DEBUG___ basic syntaxer after ${JSON.stringify(tree)}`);

    if(!block.left.lexeme.value) {
      delete block.left.lexeme.value;
    }

    return i + 1;
  };
}

module.exports.andSyntaxer = generateBasicSyntaxer('and');
module.exports.orSyntaxer = generateBasicSyntaxer('or');
module.exports.eqSyntaxer = generateBasicSyntaxer('eq');

module.exports.notSyntaxer = function notSyntaxer(options, lexemesArray, i, tree) {
  var lexemes = require('../../config/lexemes.js');
  var block = getLowPriorityBlock(tree, lexemes['not'].priority);

  var tempLexeme = {
    type: 'not'
  }

  if(block.lexeme) {
    defaultOperator(options, block, {
      lexeme: tempLexeme,
      left: null,
      right: null
    });

    return i + 1;
  }

  block.lexeme = tempLexeme;

  block.left = {};
  block.right = null;

  return i + 1;
};

function genericBlockSyntaxer(typeStart, typeEnd) {
  return function basicSyntaxer(options, lexemesArray, i, tree, createTree) {
    var lexemes = require('../../config/lexemes.js');
    var block = getLowPriorityBlock(tree, eval("lexemes." + typeStart + ".priority"));

    var tempLexeme = {
      type: typeStart
    };

    var newBlock = createTree(typeEnd, i + 1);

    if (block.lexeme) {
      defaultOperator(options, block, {
        lexeme: tempLexeme,
        left: newBlock,
        right: null
      });

      return;
    }

    block.lexeme = tempLexeme;
    block.left = newBlock;
    block.right = null;
  }
};

module.exports.blockSyntaxer = genericBlockSyntaxer('startBlock', 'endBlock');
module.exports.arraySyntaxer = genericBlockSyntaxer('startArray', 'endArray');