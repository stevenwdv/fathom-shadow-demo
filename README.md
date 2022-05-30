Fathom Shadow demo
==================

This repository gives a demo of the functionality added by [fathom-shadow](https://github.com/stevenwdv/fathom-shadow/tree/master/fathom) compared to [fathom-web](https://github.com/mozilla/fathom/tree/master/fathom). fathom-shadow makes some small changes to fathom-web to also match elements inside open Shadow DOM, with some help of [query-selector-shadow-dom](https://www.npmjs.com/package/query-selector-shadow-dom).

First run:
```shell
npm install
```

This should install the necessary packages and create `dist/bundle.js`. Next, open `demo.html`. You should see that fathom-shadow detects one email field inside Shadow DOM while fathom-web detects none. The dummy ruleset used can be found in `detect.js`.
