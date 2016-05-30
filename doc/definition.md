# ESLint Configuration for intra-mart

## はじめに

JavaScriptのコーディング規約は、世界で最も支持されているAirbnb社のものをベースとして採用し、必要に応じてルールの追加・変更を行っています。

Airbnb社の[JavaScript Style Guide](https://github.com/airbnb/javascript)を採用した理由は以下です:

* GitHubでのstar数が最も多い
* ドキュメントが充実している
* オープンな議論を通じてスタイルが決定している (ref: [翻訳者ブログ](http://blog.mitsuruog.info/2013/02/airbnb-javascript.html))
* スタイルについてパフォーマンスに関するエビデンスがある (ref: [翻訳者ブログ](http://blog.mitsuruog.info/2013/02/airbnb-javascript.html))

## テスト

本ルールは以下の観点においてテストが書かれています:

* ESLintが定義しているすべてのルールについて、採用／不採用を問わずレビューされている
* 以下のルール定義について、重複するキーが存在しない
  * Airbnbが定義するルール
  * CSIが追加・変更・抑制したルール
  * レビューしたが、採用しなかったルール
* すべてのルール定義について、不正なキーが存在しない
* Airbnbが定義したルールと同じ値を再定義しない

ほか、詳細なテスト内容については[テストスクリプト](../test/check-rule.js)を参照してください。

## Airbnb JavaScript Style Guide

[GitHub: JavaScript Style Guide](https://github.com/airbnb/javascript)を参照してください。

翻訳版は[こちら](http://mitsuruog.github.io/javacript-style-guide/)にあります。

## 変更方針

intra-mart開発に合わせて、主に以下の点に関してルールの変更を行っています:

* [ECMA Script 6準拠のルール](http://eslint.org/docs/rules/#ecmascript-6)を削除
* [Node.js準拠のルール](http://eslint.org/docs/rules/#nodejs-and-commonjs)を削除
* [ESLint推奨ルール](http://eslint.org/docs/rules)の追加(`eslint:recommended`)
* 見栄えの統一

## 変更内容

* [Airbnbとの相違点](./diff.md)
* [未採用のルール](./exclude.md)
* [すべてのルール](./all-rules.md)

Note: ドキュメントは`npm run markdown`によって自動生成されています。手動での編集はしないでください。

### 特筆すべき変更内容

[変更方針](#変更方針)で説明が不十分なものについて、以下に記載します。

#### valid-jsdoc, require-jsdoc

[JSDoc](http://usejsdoc.org/)を記述することを強制します。本ルールでは、各関数について以下の記載を求めます。

* 関数についての説明
* すべての名前付き引数の型(順番も含めて正しいこと)
* 戻り値の型

特に、何も返さない関数についても戻り値の型を記載する必要があります。JavaScriptは`return`に遭遇しなかった場合や`return`文に何も与えなかった場合、`undefined`を返却するため、次のように記載すると正しいと判定されます。

* `@returns {void}`
* `@returns {undefined}`

引数および戻り値の説明については、型名や変数名から自明な場合は必要ありません。そうでない場合は記載してください。

#### strict

strictモードを使用します。[Strict モード - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Strict_mode)
