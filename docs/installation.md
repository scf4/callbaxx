---
id: installation
title: Installation
sidebar_label: Installation
---

```js
npm install callbaxx
var callbaxx = require('callbaxx');
```

All functions are *error first*. This means the first argument of the callback is an error (hopefully null), and the second argument is the result of the function.