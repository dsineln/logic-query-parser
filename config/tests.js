'use strict';

module.exports = [

  {
    string: 'welcome AND bye',

    // TREE
    tree: {
      lexeme: {
        type: 'and'
      },
      left: {
        lexeme: {
          type: 'string',
          value: 'welcome'
        },
        left: null,
        right: null
      },
      right: {
        lexeme: {
          type: 'string',
          value: 'bye'
        },
        left: null,
        right: null
      }
    },

    // QUERY
    query: {
      type: "and",
      values: [
        {
          type: "string",
          value: "welcome"
        },
        {
          type: "string",
          value: "bye"
        }
      ]
    }
  },

  {
    string: 'welcome OR bye',

    // TREE
    tree: {
      lexeme: {
        type: 'or'
      },
      left: {
        lexeme: {
          type: 'string',
          value: 'welcome'
        },
        left: null,
        right: null
      },
      right: {
        lexeme: {
          type: 'string',
          value: 'bye'
        },
        left: null,
        right: null
      }
    },

    // QUERY
    query: {
      type: "or",
      values: [
        {
          type: "string",
          value: "welcome"
        },
        {
          type: "string",
          value: "bye"
        }
      ]
    }
  },

  {
    string: 'welcome AND bye AND hello',

    // TREE
    tree: {
      lexeme: {
        type: "and"
      },
      left: {
        lexeme: {
          type: "string",
          value: "welcome"
        },
        left: null,
        right: null
      },
      right: {
        lexeme: {
          type: "and"
        },
        left: {
          lexeme: {
            type: "string",
            value: "bye"
          },
          left: null,
          right: null
        },
        right: {
          lexeme: {
            type: "string",
            value: "hello"
          },
          left: null,
          right: null
        }
      }
    },

    // QUERY
    query: {
      type: "and",
      values: [
        {
          type: "string",
          value: "welcome"
        },
        {
          type: "string",
          value: "bye"
        },
        {
          type: "string",
          value: "hello"
        }
      ]
    }
  },

  {
    string: 'welcome OR bye AND hello',

    // TREE
    tree: {
      lexeme: {
        type: "or"
      },
      left: {
        lexeme: {
          type: "string",
          value: "welcome"
        },
        left: null,
        right: null
      },
      right: {
        lexeme: {
          type: "and"
        },
        left: {
          lexeme: {
            type: "string",
            value: "bye"
          },
          left: null,
          right: null
        },
        right: {
          lexeme: {
            type: "string",
            value: "hello"
          },
          left: null,
          right: null
        }
      }
    },

    // QUERY
    query: {
      type: "or",
      values: [
        {
          type: "string",
          value: "welcome"
        },
        {
          type: "and",
          values: [
            {
              type: "string",
              value: "bye"
            },
            {
              type: "string",
              value: "hello"
            }
          ]
        }
      ]
    }
  },

  {
    string: 'welcome AND bye OR hello',

    // TREE
    tree: {
      lexeme: {
        type: "or"
      },
      left: {
        lexeme: {
          type: "and"
        },
        left: {
          lexeme: {
            type: "string",
            value: "welcome"
          },
          left: null,
          right: null
        },
        right: {
          lexeme: {
            type: "string",
            value: "bye"
          },
          left: null,
          right: null
        }
      },
      right: {
        lexeme: {
          type: "string",
          value: "hello"
        },
        left: null,
        right: null
      }
    },

    // QUERY
    query: {
      type: "or",
      values: [
        {
          type: "and",
          values: [
            {
              type: "string",
              value: "welcome"
            },
            {
              type: "string",
              value: "bye"
            }
          ]
        },
        {
          type: "string",
          value: "hello"
        }
      ]
    }
  },

  {
    string: '(welcome OR bye) AND hello',

    // TREE
    tree: {
      lexeme: {
        type: "and"
      },
      left: {
        lexeme: {
          type: "or"
        },
        left: {
          lexeme: {
            type: "string",
            value: "welcome"
          },
          left: null,
          right: null
        },
        right: {
          lexeme: {
            type: "string",
            value: "bye"
          },
          left: null,
          right: null
        }
      },
      right: {
        lexeme: {
          type: "string",
          value: "hello"
        },
        left: null,
        right: null
      }
    },

    // QUERY
    query: {
      type: "and",
      values: [
        {
          type: "or",
          values: [
            {
              type: "string",
              value: "welcome"
            },
            {
              type: "string",
              value: "bye"
            }
          ]
        },
        {
          type: "string",
          value: "hello"
        }
      ]
    }
  },

  {
    string: '(welcome OR bye) AND (hello OR ahoy)',

    // TREE
    tree: {
      lexeme: {
        type: "and"
      },
      left: {
        lexeme: {
          type: "or"
        },
        left: {
          lexeme: {
            type: "string",
            value: "welcome"
          },
          left: null,
          right: null
        },
        right: {
          lexeme: {
            type: "string",
            value: "bye"
          },
          left: null,
          right: null
        }
      },
      right: {
        lexeme: {
          type: "or"
        },
        left: {
          lexeme: {
            type: "string",
            value: "hello"
          },
          left: null,
          right: null
        },
        right: {
          lexeme: {
            type: "string",
            value: "ahoy"
          },
          left: null,
          right: null
        }
      }
    },

    // QUERY
    query: {
      type: "and",
      values: [
        {
          type: "or",
          values: [
            {
              type: "string",
              value: "welcome"
            },
            {
              type: "string",
              value: "bye"
            }
          ]
        },
        {
          type: "or",
          values: [
            {
              type: "string",
              value: "hello"
            },
            {
              type: "string",
              value: "ahoy"
            }
          ]
        }
      ]
    }
  },

  {
    string: '"hello there" OR "welcome here"',

    // TREE
    tree: {
      lexeme: {
        type: "or"
      },
      left: {
        lexeme: {
          type: "string",
          value: "hello there"
        },
        left: null,
        right: null
      },
      right: {
        lexeme: {
          type: "string",
          value: "welcome here"
        },
        left: null,
        right: null
      }
    },

    // QUERY
    query: {
      type: "or",
      values: [
        {
          type: "string",
          value: "hello there"
        },
        {
          type: "string",
          value: "welcome here"
        }
      ]
    }
  },

  {
    string: '"hello OR there"',

    // TREE
    tree: {
      lexeme: {
        type: "string",
        value: "hello OR there"
      },
      left: null,
      right: null
    },

    // QUERY
    query: {
      type: "string",
      value: "hello OR there"
    }
  },

  {
    string: '"hello there" AND ("welcome here" OR ahoy)',

    // TREE
    tree: {
      lexeme: {
        type: "and"
      },
      left: {
        lexeme: {
          type: "string",
          value: "hello there"
        },
        left: null,
        right: null
      },
      right: {
        lexeme: {
          type: "or"
        },
        left: {
          lexeme: {
            type: "string",
            value: "welcome here"
          },
          left: null,
          right: null
        },
        right: {
          lexeme: {
            type: "string",
            value: "ahoy"
          },
          left: null,
          right: null
        }
      }
    },

    // QUERY
    query: {
      type: "and",
      values: [
        {
          type: "string",
          value: "hello there"
        },
        {
          type: "or",
          values: [
            {
              type: "string",
              value: "welcome here"
            },
            {
              type: "string",
              value: "ahoy"
            }
          ]
        }
      ]
    }
  },

  {
    string: '"hello (" AND ") there"',

    // TREE
    tree: {
      lexeme: {
        type: "and"
      },
      left: {
        lexeme: {
          type: "string",
          value: "hello ("
        },
        left: null,
        right: null
      },
      right: {
        lexeme: {
          type: "string",
          value: ") there"
        },
        left: null,
        right: null
      }
    },

    // QUERY
    query: {
      type: "and",
      values: [
        {
          type: "string",
          value: "hello ("
        },
        {
          type: "string",
          value: ") there"
        }
      ]
    }
  },

  {
    string: 'hello\\ \\OR\\ there',

    // TREE
    tree: {
      lexeme: {
        type: "string",
        value: "hello OR there"
      },
      left: null,
      right: null
    },

    // QUERY
    query: {
      type: "string",
      value: "hello OR there"
    }
  },

  {
    string: 'NOT welcome',

    // TREE
    tree: {
      lexeme: {
        type: 'not'
      },
      left: {
        lexeme: {
          type: 'string',
          value: 'welcome'
        },
        left: null,
        right: null
      },
      right: null
    },

    // QUERY
    query: {
      type: "not",
      values: [
        {
          type: "string",
          value: "welcome"
        }
      ]
    }
  },

  {
    string: 'hello AND NOT welcome',

    // TREE
    tree: {
      lexeme: {
        type: 'and'
      },
      left: {
        lexeme: {
          type: 'string',
          value: 'hello'
        },
        left: null,
        right: null
      },
      right: {
        lexeme: {
          type: 'not'
        },
        left: {
          lexeme: {
            type: 'string',
            value: 'welcome'
          },
          left: null,
          right: null
        },
        right: null
      }
    },

    // QUERY
    query: {
      type: "and",
      values: [
        {
          type: "string",
          value: "hello"
        },
        {
          type: "not",
          values: [
            {
              type: "string",
              value: "welcome"
            }
          ]
        }
      ]
    }
  },

  {
    string: 'hello OR NOT welcome',

    // TREE
    tree: {
      lexeme: {
        type: 'or'
      },
      left: {
        lexeme: {
          type: 'string',
          value: 'hello'
        },
        left: null,
        right: null
      },
      right: {
        lexeme: {
          type: 'not'
        },
        left: {
          lexeme: {
            type: 'string',
            value: 'welcome'
          },
          left: null,
          right: null
        },
        right: null
      }
    },

    // QUERY
    query: {
      type: "or",
      values: [
        {
          type: "string",
          value: "hello"
        },
        {
          type: "not",
          values: [
            {
              type: "string",
              value: "welcome"
            }
          ]
        }
      ]
    }
  },


  {
    string: 'hello OR NOT (welcome)',

    // TREE
    tree: {
      lexeme: {
        type: 'or'
      },
      left: {
        lexeme: {
          type: 'string',
          value: 'hello'
        },
        left: null,
        right: null
      },
      right: {
        lexeme: {
          type: 'not'
        },
        left: {
          lexeme: {
            type: 'string',
            value: 'welcome'
          },
          left: null,
          right: null
        },
        right: null
      }
    },

    // QUERY
    query: {
      type: "or",
      values: [
        {
          type: "string",
          value: "hello"
        },
        {
          type: "not",
          values: [
            {
              type: "string",
              value: "welcome"
            }
          ]
        }
      ]
    }
  },

  {
    string: 'welcome && bye',

    // TREE
    tree: {
      lexeme: {
        type: 'and'
      },
      left: {
        lexeme: {
          type: 'string',
          value: 'welcome'
        },
        left: null,
        right: null
      },
      right: {
        lexeme: {
          type: 'string',
          value: 'bye'
        },
        left: null,
        right: null
      }
    },

    // QUERY
    query: {
      type: "and",
      values: [
        {
          type: "string",
          value: "welcome"
        },
        {
          type: "string",
          value: "bye"
        }
      ]
    }
  },

  {
    string: 'welcome || bye',

    // TREE
    tree: {
      lexeme: {
        type: 'or'
      },
      left: {
        lexeme: {
          type: 'string',
          value: 'welcome'
        },
        left: null,
        right: null
      },
      right: {
        lexeme: {
          type: 'string',
          value: 'bye'
        },
        left: null,
        right: null
      }
    },

    // QUERY
    query: {
      type: "or",
      values: [
        {
          type: "string",
          value: "welcome"
        },
        {
          type: "string",
          value: "bye"
        }
      ]
    }
  },

  {
    string: 'welcome EQ bye',

    // TREE
    tree: {
      lexeme: {
        type: 'eq'
      },
      left: {
        lexeme: {
          type: 'string',
          value: 'welcome'
        },
        left: null,
        right: null
      },
      right: {
        lexeme: {
          type: 'string',
          value: 'bye'
        },
        left: null,
        right: null
      }
    },

    // QUERY
    query: {
      type: "eq",
      values: [
        {
          type: "string",
          value: "welcome"
        },
        {
          type: "string",
          value: "bye"
        }
      ]
    }
  },

  {
    string: 'welcome == bye',

    // TREE
    tree: {
      lexeme: {
        type: 'eq'
      },
      left: {
        lexeme: {
          type: 'string',
          value: 'welcome'
        },
        left: null,
        right: null
      },
      right: {
        lexeme: {
          type: 'string',
          value: 'bye'
        },
        left: null,
        right: null
      }
    },

    // QUERY
    query: {
      type: "eq",
      values: [
        {
          type: "string",
          value: "welcome"
        },
        {
          type: "string",
          value: "bye"
        }
      ]
    }
  },

  {
    string: 'welcome == bye OR "ahoy" == "hello" AND (why EQ because OR reason)',

    // TREE
    tree: {
      lexeme: {
        type: 'or'
      },
      left: {
        lexeme: {
          type: 'eq'
        },
        left: {
          lexeme: {
            type: 'string',
            value: 'welcome'
          },
          left: null,
          right: null
        },
        right: {
          lexeme: {
            type: 'string',
            value: 'bye'
          },
          left: null,
          right: null
        }
      },
      right: {
        lexeme: {
          type: 'and'
        },
        left: {
          lexeme: {
            type: 'eq'
          },
          left: {
            lexeme: {
              type: 'string',
              value: 'ahoy'
            },
            left: null,
            right: null
          },
          right: {
            lexeme: {
              type: 'string',
              value: 'hello'
            },
            left: null,
            right: null
          }
        },
        right: {
          lexeme: {
            type: 'or'
          },
          left: {
            lexeme: {
              type: 'eq'
            },
            left: {
              lexeme: {
                type: 'string',
                value: 'why'
              },
              left: null,
              right: null
            },
            right: {
              lexeme: {
                type: 'string',
                value: 'because'
              },
              left: null,
              right: null
            }
          },
          right: {
            lexeme: {
              type: 'string',
              value: 'reason'
            },
            left: null,
            right: null
          }
        }
      }
    },

    // QUERY
    query: {
      type: "or",
      values: [
        {
          type: "eq",
          values: [
            {
              type: "string",
              value: "welcome"
            },
            {
              type: "string",
              value: "bye"
            }
          ]
        },
        {
          type: "and",
          values: [
            {
              type: "eq",
              values: [
                {
                  type: "string",
                  value: "ahoy"
                },
                {
                  type: "string",
                  value: "hello"
                }
              ]
            },
            {
              type: "or",
              values: [
                {
                  type: "eq",
                  values: [
                    {
                      type: "string",
                      value: "why"
                    },
                    {
                      type: "string",
                      value: "because"
                    }
                  ]
                },
                {
                  type: "string",
                  value: "reason"
                }
              ]
            }
          ]
        }
      ]
    }
  },

  {
    string: 'value IN [hello, bye, welcome]',
    // TREE
    tree: {
      lexeme: {
        type: 'in'
      },
      left: {
        lexeme: {
          type: 'string',
          value: 'value'
        },
        left: null,
        right: null
      },
      right: {
        lexeme: {
          type: 'comma'
        },
        left: {
          lexeme: {
            type: 'string',
            value: 'hello'
          },
          left: null,
          right: null
        },
        right: {
          lexeme: {
            type: 'comma'
          },
          left: {
            lexeme: {
              type: 'string',
              value: 'bye'
            },
            left: null,
            right: null
          },
          right: {
            lexeme: {
              type: 'string',
              value: 'welcome'
            },
            left: null,
            right: null
          }
        }
      }
    },

    // QUERY
    query: {
      type: "in",
      values: [
        {
          type: "string",
          value: "value"
        },
        {
          type: "comma",
          values: [
            {
              type: "string",
              value: "hello"
            },
            {
              type: "string",
              value: "bye"
            },
            {
              type: "string",
              value: "welcome"
            }
          ]
        }
      ]
    }
  },

  /*{
    string: 'value NOT IN [hello, bye, welcome]',
    // TREE
    tree: {
      lexeme: {
        type: "not"
      },
      left: {
        lexeme: {
          type: 'string',
          value: 'value'
        },
        left: null,
        right: null
      },
      right: {
        lexeme: {
          type: 'in'
        },
        left: {
          lexeme: {
            type: 'comma'
          },
          left: {
            lexeme: {
              type: 'string',
              value: 'hello'
            },
            left: null,
            right: null
          },
          right: {
            lexeme: {
              type: 'comma'
            },
            left: {
              lexeme: {
                type: 'string',
                value: 'bye'
              },
              left: null,
              right: null
            },
            right: {
              lexeme: {
                type: 'string',
                value: 'welcome'
              },
              left: null,
              right: null
            }
          }
        }
      }
    },

    // QUERY
    query: {
      type: "in",
      values: [
        {
          type: "string",
          value: "value"
        },
        {
          type: "comma",
          values: [
            {
              type: "string",
              value: "hello"
            },
            {
              type: "string",
              value: "bye"
            },
            {
              type: "string",
              value: "welcome"
            }
          ]
        }
      ]
    }
  },*/

  {
    string: '[hello, bye, welcome]',
    err: "TODO: fail"
  },

  {
    string: '"(welcome hello)"',
    err: "TODO: fail"
  },

  {
    string: 'android',
    err: "TODO: fail"
  },

  {
    string: 'orroid',
    err: "TODO: fail"
  },

  {
    string: 'hello (welcome)',
    err: 'startBlock just after string'
  },

  {
    string: '\\(hello bye\\) welcome',
    err: 'lack of operator in between two strings'
  },

  {
    string: '("hello',
    err: "Can't reach end of quoted string"
  },

  {
    string: ')" bye" (',
    err: 'startBlock just after string'
  },

  {
    string: 'test"',
    err: 'Can\'t reach end of quoted string'
  },

  {
    string: 'bye)',
    err: 'Unexpected token endBlock'
  },

  {
    string: '',
    err: 'Empty query string'
  },

  {
    string: '()',
    err: 'Empty block'
  },

  {
    string: 'and test',
    err: 'Nothing before and block'
  },

  {
    string: 'or test',
    err: 'Nothing before or block'
  },

  {
    string: 'hello AND NOT',
    err: 'Empty block just after not'
  },

  {
    string: 'hello NOT AND',
    err: 'and just after not'
  },

  {
    string: 'hello NOT ==',
    err: 'eq just after not'
  },

  {
    string: '[]',
    err: 'Empty array'
  },

  {
    string: '["some"',
    err: 'Bad end of block'
  },

  {
    string: '"some"]',
    err: 'Unexpected token endArray'
  },

  {
    string: '[ AND hello',
    err: 'and just after startArray'
  },

  {
    string: '"hello there" OR welcome here',
    err: "lack of operator in between two strings"
  },

  {
    string: 'IN [hello, bye, welcome]',
    err : 'Nothing before in block'
  },

  {
    string: 'field IN ',
    err : 'Empty block just after in'
  },
];
