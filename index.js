module.exports = {
  rules: {
    'strict': [2, 'function'],          // http://eslint.org/docs/rules/strict
    'linebreak-style': [2, 'windows'],  // http://eslint.org/docs/rules/linebreak-style
    'operator-linebreak': [2, 'after'], // http://eslint.org/docs/rules/operator-linebreak
    'padded-blocks': 0,                 // http://eslint.org/docs/rules/padded-blocks
    'spaced-comment': 0,                // http://eslint.org/docs/rules/spaced-comment
    'require-jsdoc': 2,                 // http://eslint.org/docs/rules/require-jsdoc
    'valid-jsdoc': [2, {                // http://eslint.org/docs/rules/valid-jsdoc
      'requireParamDescription': false,
      'requireReturnDescription': false
    }]
  }
};
