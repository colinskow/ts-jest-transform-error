- [Issue](https://github.com/kulshekhar/ts-jest/issues/376)

`ts-jest` throws an error whenever a test utilizes a module from outside the project root.

```
ReferenceError: Unknown plugin "transform-es2015-modules-commonjs" specified in "base" at 0, attempted toresolve relative to "/home/colin/localdev/ts-jest-error/common"

      at node_modules/babel-core/lib/transformation/file/options/option-manager.js:180:17
          at Array.map (<anonymous>)
```

- Expected behavior

TS files should be correctly imported even from outside the project.

- Link to a minimal repo that reproduces this issue

https://github.com/colinskow/ts-jest-transform-error

`cd main && npm install && npm test`
