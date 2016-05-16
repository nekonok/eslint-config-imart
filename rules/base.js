module.exports = {
  rules: {
    // ES6
    'no-var': 0,       // http://eslint.org/docs/rules/no-var
    'prefer-const': 0, // http://eslint.org/docs/rules/prefer-const

    // Variables
    'no-catch-shadow': 2,   // http://eslint.org/docs/rules/no-catch-shadow
    'no-delete-var': 2,     // http://eslint.org/docs/rules/no-delete-var
    'no-label-var': 2,      // http://eslint.org/docs/rules/no-label-var
    'no-undef': 2,          // http://eslint.org/docs/rules/no-undef
    'no-undef-init': 2,     // http://eslint.org/docs/rules/no-undef-init
    'no-unused-vars': [2, { // http://eslint.org/docs/rules/no-unused-vars
      'vars': 'all',
      'args': 'after-used'
    }],

    // Possible errors
    'comma-dangle': [2, 'never'],    // http://eslint.org/docs/rules/comma-dangle
    'no-dupe-args': 2,               // http://eslint.org/docs/rules/no-dupe-args
    'no-empty-character-class': 2,   // http://eslint.org/docs/rules/no-empty-character-class
    'no-extra-boolean-cast': 2,      // http://eslint.org/docs/rules/no-extra-boolean-cast
    'no-negated-in-lhs': 2,          // http://eslint.org/docs/rules/no-negated-in-lhs
    'no-regex-spaces': 2,            // http://eslint.org/docs/rules/no-regex-spaces
    'valid-jsdoc': [2, {             // http://eslint.org/docs/rules/valid-jsdoc
      'requireParamDescription': false,
      'requireReturnDescription': false
    }],
    'valid-typeof': 2,               // http://eslint.org/docs/rules/valid-typeof
    'no-unexpected-multiline': 2,    // http://eslint.org/docs/rules/no-unexpected-multiline

    // Best practices
    'curly': [2, 'all'],             // http://eslint.org/docs/rules/curly
    'dot-location': [2, 'property'], // http://eslint.org/docs/rules/dot-location
    'no-implicit-coercion': 2,       // http://eslint.org/docs/rules/no-implicit-coercion
    'no-iterator': 2,                // http://eslint.org/docs/rules/no-iterator
    'no-labels': [1, {               // http://eslint.org/docs/rules/no-labels
      'allowLoop': true,
      'allowSwitch': true
    }],
    'no-negated-condition': 2,       // http://eslint.org/docs/rules/no-negated-condition

    // Style
    'array-bracket-spacing': [2, 'never'],     // http://eslint.org/docs/rules/array-bracket-spacing
    'block-spacing': [2, 'always'],            // http://eslint.org/docs/rules/block-spacing
    'computed-property-spacing': [2, 'never'], // http://eslint.org/docs/rules/computed-property-spacing
    'func-names': 0,                           // http://eslint.org/docs/rules/func-names
    'linebreak-style': [2, 'windows'],         // http://eslint.org/docs/rules/linebreak-style
    'new-parens': 2,                           // http://eslint.org/docs/rules/new-parens
    'no-array-constructor': 2,                 // http://eslint.org/docs/rules/no-array-constructor
    'no-lonely-if': 2,                         // http://eslint.org/docs/rules/no-lonely-if
    'no-mixed-spaces-and-tabs': 2,             // http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
    'no-unneeded-ternary': 2,                  // http://eslint.org/docs/rules/no-unneeded-ternary
    'no-useless-concat': 2,                    // http://eslint.org/docs/rules/no-useless-concat
    'object-curly-spacing': [2, 'always'],     // http://eslint.org/docs/rules/object-curly-spacing
    'operator-linebreak': [2, 'after'],        // http://eslint.org/docs/rules/operator-linebreak
    'space-in-parens': [2, 'never'],           // http://eslint.org/docs/rules/space-in-parens
    'space-unary-ops': [2, {                   // http://eslint.org/docs/rules/space-unary-ops
      'words': true,
      'nonwords': false
    }],
    'padded-blocks': 0,                        // http://eslint.org/docs/rules/padded-blocks
    'spaced-comment': 0,                       // http://eslint.org/docs/rules/spaced-comment
    'require-jsdoc': 2                         // http://eslint.org/docs/rules/require-jsdoc
  }
};
