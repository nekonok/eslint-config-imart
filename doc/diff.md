# Differences between our rules and Airbnb's

## Versions

* eslint: 2.9.0
* eslint-config-airbnb: 3.0.1

## Number of rules

* Airbnb's: 183
* Ours: 49
* Combined: 193

### Changed Rules


#### no-catch-shadow

[http://eslint.org/docs/rules/no-catch-shadow](http://eslint.org/docs/rules/no-catch-shadow)

Set to: `2`

#### no-delete-var

[http://eslint.org/docs/rules/no-delete-var](http://eslint.org/docs/rules/no-delete-var)

Set to: `2`

#### no-label-var

[http://eslint.org/docs/rules/no-label-var](http://eslint.org/docs/rules/no-label-var)

Set to: `2`

#### no-undef

[http://eslint.org/docs/rules/no-undef](http://eslint.org/docs/rules/no-undef)

Set to: `2`

#### no-undef-init

[http://eslint.org/docs/rules/no-undef-init](http://eslint.org/docs/rules/no-undef-init)

Set to: `2`

#### no-unused-vars

[http://eslint.org/docs/rules/no-unused-vars](http://eslint.org/docs/rules/no-unused-vars)

Set to: `[2,{"vars":"all","args":"after-used"}]`

#### comma-dangle

[http://eslint.org/docs/rules/comma-dangle](http://eslint.org/docs/rules/comma-dangle)

Set to: `[2,"never"]`

#### no-dupe-args

[http://eslint.org/docs/rules/no-dupe-args](http://eslint.org/docs/rules/no-dupe-args)

Set to: `2`

#### no-empty-character-class

[http://eslint.org/docs/rules/no-empty-character-class](http://eslint.org/docs/rules/no-empty-character-class)

Set to: `2`

#### no-extra-boolean-cast

[http://eslint.org/docs/rules/no-extra-boolean-cast](http://eslint.org/docs/rules/no-extra-boolean-cast)

Set to: `2`

#### no-negated-in-lhs

[http://eslint.org/docs/rules/no-negated-in-lhs](http://eslint.org/docs/rules/no-negated-in-lhs)

Set to: `2`

#### no-regex-spaces

[http://eslint.org/docs/rules/no-regex-spaces](http://eslint.org/docs/rules/no-regex-spaces)

Set to: `2`

#### valid-jsdoc

[http://eslint.org/docs/rules/valid-jsdoc](http://eslint.org/docs/rules/valid-jsdoc)

Set to: `[2,{"requireParamDescription":false,"requireReturnDescription":false}]`

#### valid-typeof

[http://eslint.org/docs/rules/valid-typeof](http://eslint.org/docs/rules/valid-typeof)

Set to: `2`

#### no-unexpected-multiline

[http://eslint.org/docs/rules/no-unexpected-multiline](http://eslint.org/docs/rules/no-unexpected-multiline)

Set to: `2`

#### curly

[http://eslint.org/docs/rules/curly](http://eslint.org/docs/rules/curly)

Set to: `[2,"all"]`

#### dot-location

[http://eslint.org/docs/rules/dot-location](http://eslint.org/docs/rules/dot-location)

Set to: `[2,"property"]`

#### no-implicit-coercion

[http://eslint.org/docs/rules/no-implicit-coercion](http://eslint.org/docs/rules/no-implicit-coercion)

Set to: `2`

#### no-iterator

[http://eslint.org/docs/rules/no-iterator](http://eslint.org/docs/rules/no-iterator)

Set to: `2`

#### no-labels

[http://eslint.org/docs/rules/no-labels](http://eslint.org/docs/rules/no-labels)

Set to: `[1,{"allowLoop":true,"allowSwitch":true}]`

#### no-negated-condition

[http://eslint.org/docs/rules/no-negated-condition](http://eslint.org/docs/rules/no-negated-condition)

Set to: `2`

#### array-bracket-spacing

[http://eslint.org/docs/rules/array-bracket-spacing](http://eslint.org/docs/rules/array-bracket-spacing)

Set to: `[2,"never"]`

#### block-spacing

[http://eslint.org/docs/rules/block-spacing](http://eslint.org/docs/rules/block-spacing)

Set to: `[2,"always"]`

#### computed-property-spacing

[http://eslint.org/docs/rules/computed-property-spacing](http://eslint.org/docs/rules/computed-property-spacing)

Set to: `[2,"never"]`

#### linebreak-style

[http://eslint.org/docs/rules/linebreak-style](http://eslint.org/docs/rules/linebreak-style)

Set to: `[2,"windows"]`

#### new-parens

[http://eslint.org/docs/rules/new-parens](http://eslint.org/docs/rules/new-parens)

Set to: `2`

#### no-array-constructor

[http://eslint.org/docs/rules/no-array-constructor](http://eslint.org/docs/rules/no-array-constructor)

Set to: `2`

#### no-lonely-if

[http://eslint.org/docs/rules/no-lonely-if](http://eslint.org/docs/rules/no-lonely-if)

Set to: `2`

#### no-mixed-spaces-and-tabs

[http://eslint.org/docs/rules/no-mixed-spaces-and-tabs](http://eslint.org/docs/rules/no-mixed-spaces-and-tabs)

Set to: `2`

#### no-unneeded-ternary

[http://eslint.org/docs/rules/no-unneeded-ternary](http://eslint.org/docs/rules/no-unneeded-ternary)

Set to: `2`

#### no-useless-concat

[http://eslint.org/docs/rules/no-useless-concat](http://eslint.org/docs/rules/no-useless-concat)

Set to: `2`

#### object-curly-spacing

[http://eslint.org/docs/rules/object-curly-spacing](http://eslint.org/docs/rules/object-curly-spacing)

Set to: `[2,"always"]`

#### operator-linebreak

[http://eslint.org/docs/rules/operator-linebreak](http://eslint.org/docs/rules/operator-linebreak)

Set to: `[2,"after"]`

#### space-in-parens

[http://eslint.org/docs/rules/space-in-parens](http://eslint.org/docs/rules/space-in-parens)

Set to: `[2,"never"]`

#### space-unary-ops

[http://eslint.org/docs/rules/space-unary-ops](http://eslint.org/docs/rules/space-unary-ops)

Set to: `[2,{"words":true,"nonwords":false}]`

#### require-jsdoc

[http://eslint.org/docs/rules/require-jsdoc](http://eslint.org/docs/rules/require-jsdoc)

Set to: `2`


### Added Rules


#### no-confusing-arrow

[http://eslint.org/docs/rules/no-confusing-arrow](http://eslint.org/docs/rules/no-confusing-arrow)

Set to: `2`

#### no-duplicate-imports

[http://eslint.org/docs/rules/no-duplicate-imports](http://eslint.org/docs/rules/no-duplicate-imports)

Set to: `2`

#### no-new-symbol

[http://eslint.org/docs/rules/no-new-symbol](http://eslint.org/docs/rules/no-new-symbol)

Set to: `2`

#### no-useless-computed-key

[http://eslint.org/docs/rules/no-useless-computed-key](http://eslint.org/docs/rules/no-useless-computed-key)

Set to: `2`

#### no-useless-constructor

[http://eslint.org/docs/rules/no-useless-constructor](http://eslint.org/docs/rules/no-useless-constructor)

Set to: `2`

#### arrow-body-style

[http://eslint.org/docs/rules/arrow-body-style](http://eslint.org/docs/rules/arrow-body-style)

Set to: `2`

#### strict

[http://eslint.org/docs/rules/strict](http://eslint.org/docs/rules/strict)

Set to: `[2,"function"]`

#### yield-star-spacing

[http://eslint.org/docs/rules/yield-star-spacing](http://eslint.org/docs/rules/yield-star-spacing)

Set to: `2`


### Supressed Rules


#### func-names

[http://eslint.org/docs/rules/func-names](http://eslint.org/docs/rules/func-names)

Set to: `0`

#### padded-blocks

[http://eslint.org/docs/rules/padded-blocks](http://eslint.org/docs/rules/padded-blocks)

Set to: `0`

#### spaced-comment

[http://eslint.org/docs/rules/spaced-comment](http://eslint.org/docs/rules/spaced-comment)

Set to: `0`

