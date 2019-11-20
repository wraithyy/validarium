---
title: 'Introduction'
order: 1
---

Validarium is an agnostic validation library for JavaScript applications. With optional support for react-intl.

## Example

```js
const { isRequired, isEmail, isNumber, hasLengthMax, hasValueMin } = require('@validarium/intl');
const { validate, createMainValidate } = require('@validarium/core');

const fieldValidations = validate({
	email: [isRequired, isEmail, hasLengthMax(200)],
	age: [isRequired, isNumber, hasValueMin(18)],
});

// pure validation result
console.log(fieldValidations({}));
```
