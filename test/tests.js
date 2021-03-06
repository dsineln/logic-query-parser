'use strict';

require('should');

var tests = require('../config/tests.js');

var parser = require('../lib/index.js');
var utils = require('../lib/utils.js');

describe('Tests binaryTree', function() {
  var count = 0;

  tests.forEach(function(test) {
    count += 1;

    var func = test.only ? it.only : it;
    func('should ' + (test.err ? 'fail' : 'work') + ' for test ' + count + ' : ' + test.string, function(done) {
      try {
        var tree = parser.parse(test.string);

        if(test.tree) {
          tree.should.eql(test.tree);
        }

        if(test.err) {
          return done(new Error("Should have failed"));
        }

        done();
      }
      catch(e) {
        if(!test.err) {
          return done(e);
        }

        e.toString().should.containDeep(test.err);
        return done();
      }
    });
  });
});

describe('Tests queryJson', function() {
  var count = 0;

  tests.forEach(function(test) {
    count += 1;

    var func = test.only ? it.only : it;
    func('should ' + (test.err ? 'fail' : 'work') + ' for test ' + count + ' : ' + test.string, function(done) {
      try {
        var tree = parser.parse(test.string);
        var query = utils.binaryTreeToQueryJson(tree);

        if(test.query) {
          query.should.eql(test.query);
        }

        if(test.err) {
          return done(new Error("Should have failed"));
        }

        done();
      }
      catch(e) {
        if(!test.err) {
          return done(e);
        }

        e.toString().should.containDeep(test.err);
        done();
      }
    });
  });
});
