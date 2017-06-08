module.exports = {
  rules: {
    // Airbnbではbabel等のtranspilerによるstrictモード埋め込みを期待しているため有効化
    // http://eslint.org/docs/rules/strict
    strict: [2, 'function'],

    // 演算子を行頭と行末のどちらに置くかを統一するため有効化
    // http://eslint.org/docs/rules/operator-linebreak
    'operator-linebreak': [2, 'after'],

    // Airbnb通常とlegacyでルールが異なるためlegacyに合わせる
    'comma-dangle': [2, 'never'],

    // 改行コードのチェックはgitattributesとEditorConfigで行うため無効化
    // ESLintではファイル単位の細かい指定ができない
    'linebreak-style': 0,

    // JSDocの記述を強制
    // http://eslint.org/docs/rules/require-jsdoc
    'require-jsdoc': 2,

    // JSDoc記述内容のチェック
    // http://eslint.org/docs/rules/valid-jsdoc
    'valid-jsdoc': [2, {
      requireParamDescription: false,
      requireReturnDescription: false
    }]
  }
};
