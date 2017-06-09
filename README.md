# eslint-config-imart

[![CircleCI](https://circleci.com/gh/nekonok/eslint-config-imart.svg?style=svg)](https://circleci.com/gh/nekonok/eslint-config-imart)
[![npm](https://img.shields.io/npm/v/eslint-config-imart.svg)](https://www.npmjs.com/package/eslint-config-imart)
[![LICENSE](https://img.shields.io/npm/l/eslint-config-imart.svg)](LICENSE.txt)

intra-mart開発のための[ESLint](http://eslint.org/)設定

## 本リポジトリについて

* Airbnbの[JavaScript Style Guide](https://github.com/airbnb/javascript)をベースに、最小限のルール変更を追加
* [prettier/prettier: Prettier is an opinionated code formatter\.](https://github.com/prettier/prettier) を使う
* intra-mart スクリプト開発API定義を追加

## ルール

### valid-jsdoc, require-jsdoc

[JSDoc](http://usejsdoc.org/)を記述することを強制します。本ルールでは、各関数について以下の記載を求めます。

* 関数についての説明
* すべての名前付き引数の型(順番も含めて正しいこと)
* 戻り値の型

特に、何も返さない関数についても戻り値の型を記載する必要があります。JavaScriptは`return`に遭遇しなかった場合や`return`文に何も与えなかった場合、`undefined`を返却するため、次のように記載すると正しいと判定されます。

* `@returns {void}`
* `@returns {undefined}`

引数および戻り値の説明については、型名や変数名から自明な場合は必要ありません。そうでない場合は記載してください。

### strict

strictモードを使用します。[Strict モード - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Strict_mode)

## 使い方

このルール定義は[ESLint Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs)の仕組みで提供されています。

### インストール

```sh
npm i -D eslint eslint-config-airbnb-base eslint-plugin-import eslint-config-imart
```

See: [eslint\-config\-airbnb\-base](https://www.npmjs.com/package/eslint-config-airbnb-base)

### ルール定義

プロジェクトのルートディレクトリに`.eslintrc`ファイルを以下のように作成します。

```json
{
  "root": true,
  "extends": [
    "airbnb-base/legacy",
    "imart",
    "prettier"
  ],
  "globals": {
    "require": false
  }
}
```

### 実行

```sh
./node_modules/.bin/eslint .
```

## eslintrc

### intra-mart API定義

ESLintでは、未定義のグローバルオブジェクトへの参照はエラーとなります。したがって、intra-martのAPIオブジェクトはすべて`globals`として定義される必要があります。

このプロジェクトでは、intra-mart APIのグローバル定義ファイルを提供しています。

必要に応じて`extends`として利用してください。

```json
{
  "extends": [
    "airbnb-base/legacy",
    "imart",
    "imart/globals/iap-server-core",
    "imart/globals/iap-client-core",
    "prettier"
  ]
}
```

ファイル名のルールは以下の通りです。

`${platform}-${environment}-${app}`

それぞれの変数間を`-`で繋ぎ、各変数内の単語区切りには`_`を使います。すべて小文字です。

どのようなAPI定義があるかは[globalsディレクトリ](./globals)を参照してください。

### ES6

node.jsモジュールを書く場合等、ES6の機能が必要な場合は`airbnb-base`を利用してください。

```
{
  "extends": [
    "airbnb-base",
    "imart",
    "prettier"
  ],
}
```

### ルールの階層構造

ESLintでは、`.eslintrc`をlint対象ファイルの位置からファイルシステムを上へ再帰的に適用します: [Configuration Cascading and Hierarchy](http://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy)

よって、各プロジェクトに配置する`.eslintrc`は次のようになっているべきです:

`$PROJECT_HOME/.eslintrc`

```json
{
  "root": true,
  "extends": [
    "airbnb-base",
    "imart",
    "prettier"
  ]
}
```

`$PROJECT_HOME/src/main/jssp/.eslintrc`

```json
{
  "extends": ["imart/globals/iap-server-core"]
}
```

`$PROJECT_HOME/src/main/public/.eslintrc`

```json
{
  "extends": ["imart/globals/iap-client-core"]
}
```

これにより、ルール定義は共通のまま、サーバサイドJSではサーバ側のAPIのみ、クライアントサイドJSではクライアント側のAPIのみが定義されている状態になります。

## メンテナンスについて

### テスト

ルールのリリース前には、必ずテストを実行してください:

```
npm test
```

### 修正に関する議論

あるルールを変更する場合、本リポジトリのissueにて議論を行ってください。

### 定義済みコマンド

`npm run`を実行すると、実行可能なコマンドが一覧表示されます。

現時点では以下のコマンドが実行可能です。

* `npm test`: ルールについてのテストを実行します
* `npm run build`: intra-mart APIのグローバル定義を生成します

## FAQ

### unused警告について

init関数、action関数などjavascriptファイル内から直接呼ばれない関数／変数は、`no-unused-vars`オプションによって未使用の警告が出ます。これを回避するため、eslintに該当変数が他で利用されていることを`exported`ディレクティブで通知する必要があります。

```javascript
/* exported init */
function init(request) {
    // code
}
```

※注: `"env": { "node": true }`の環境下では`exported`は機能ません。node.jsでは変数は常にスクリプトローカルであるためです。
