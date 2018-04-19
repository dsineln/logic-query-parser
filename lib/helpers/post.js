'use strict';

module.exports.blockPostTreatment = function blockPostTreatment(startTypeName, tree) {
  if(!tree || !tree.lexeme) {
    return tree;
  }

  if(tree.lexeme.type === startTypeName) {
    tree.lexeme = {
      type: tree.left.lexeme.type,
      value: tree.left.lexeme.value
    };

    if(!tree.lexeme.value) {
      delete tree.lexeme.value;
    }

    tree.right = tree.left.right;
    tree.left = tree.left.left;
  }

  blockPostTreatment(startTypeName, tree.right);
  blockPostTreatment(startTypeName, tree.left);

  return tree;
};
