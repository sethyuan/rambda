# Rambda

This provides some of the functions not included in Rambda but are quite useful.

This library has Rambda as peer dependency, and it's as tree-shakable as Rambda itself.

## Install

```bash
yarn add @sethyuan/rambda
```

## Example Usage

```js
import { flatMap } from "@sethyuan/rambda"

const ret = flatMap(x => [x, x], [1, 2, 3])
console.log(ret)
```
