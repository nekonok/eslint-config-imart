# eslint-config-imart

intra-mart開発のための[ESLint](http://eslint.org/)設定

## ルール内容

[ルール内容はこちら](./doc/definition.md)

## インストールと使用

この設定は[ESLint Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs)の仕組みで提供されています。

ルールを使用するために、`npm`でインストールしてください。

```
npm install -g eslint-config-imart
```

ルールは`~/.eslintrc`に以下の記載を追加することで適用できます。

```json
{
  "extends": "imart"
}
```

## intra-mart API定義

ESLintでは、未定義のグローバルオブジェクトへの参照はエラーとなります。したがって、intra-martのAPIオブジェクトはすべて`globals`として定義される必要があります。

このプロジェクトでは、intra-mart APIのグローバル定義ファイルを提供しています。

必要に応じて`extends`として利用してください。

```json
{
  "extends": [
    "imart",
    "imart/globals/iap-server-core",
    "imart/globals/iap-client-core"
  ]
}
```

ファイル名のルールは以下の通りです。

`${platform}-${environment}-${app}`

それぞれの変数間を`-`で繋ぎ、各変数内の単語区切りには`_`を使います。すべて小文字です。

どのようなAPI定義があるかは[globalsディレクトリ](./globals)を参照してください。

## ESLintの使い方について

ESLintでは、`.eslintrc`をlint対象ファイルの位置からファイルシステムを上へ再帰的に適用します: [Configuration Cascading and Hierarchy](http://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy)

よって、各プロジェクトに配置する`.eslintrc`は次のようになっているべきです:

`$PROJECT_HOME/.eslintrc`

```json
{
  "root": true,
  "extends": "imart"
}
```

`$PROJECT_HOME/src/main/jssp/.eslintrc`

```json
{
  "extends": "imart/globals/iap-server-core"
}
```

`$PROJECT_HOME/src/main/public/.eslintrc`

```json
{
  "extends": "imart/globals/iap-client-core"
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

### ESLintおよびAirbnbへの追従

`package.json`に依存する`eslint`および`eslint-config-airbnb`のバージョンが記載されています。

これらが更新されているかチェックするためには`npm-check-updates`を使います。次のようにインストールして実行してください:

```
npm i -g npm-check-updates
ncu
```

更新が必要なパッケージが検知された場合、次のようにしてアップデートしてください:

```
ncu -u
npm install
```

更新した場合は、必ずテストを実行してください。

ESLintにルールが追加された場合や、Airbnbのルールに更新があった場合、テストに失敗します。そのルールについての議論を行ってください。採用する場合は`rules/base.js`に、採用しない場合は`rules/exclude.js`に追記します。

### 定義済みコマンド

`npm run`を実行すると、実行可能なコマンドが一覧表示されます。

現時点では以下のコマンドが実行可能です。

* `npm test`: ルールについてのテストを実行します
* `npm run build`: intra-mart APIのグローバル定義を生成します
* `npm run markdown`: 変更内容一覧のドキュメントを生成します

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

