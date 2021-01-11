# Date-manipulator

![npm](https://img.shields.io/npm/v/@aimu/date-manipulator?color=blue&style=plastic)
![npm bundle size](https://img.shields.io/bundlephobia/min/@aimu/date-manipulator?style=plastic)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=plastic)](http://makeapullrequest.com)
[![Build Status](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2FA-I-M-U%2Fdate-manipulator%2Fbadge%3Fref%3Dmain&style=plastic)](https://actions-badge.atrox.dev/A-I-M-U/date-manipulator/goto?ref=main)

This is a simple date and time manipulator. Using this package you can get some helpful features like finding difference between dates, and getting current date and time by passing a string. More features are being developed by our team.

## 📦 Installation

### Install this package via npm:

```bash
npm install @aimu/date-manipulator
```

This package is also available on unpkg, so you can load it via script tag:

```html
<script src="https://unpkg.com/@aimu/date-manipulator"></script>
<script>
    // You can use library features here.
</script>
```

## 🔨 Usage

### Input

You can pass any valid arguments of Date() built-in javascript object.

You can also pass options as object, right now, there's only one option available: *hFormat: 12 or 24 as string value (It's 24 by default)*.

*Example:*

```js
var d = new dateM({
    hFormat: '12'
});
console.log(d.current("dd-mm-yyyy hh:mm")); // Prints current date and time format in 12 hours.
```

### Methods

#### dateM().current()

This method returns a string replaced by a requested values.

```js
var d = dateM();

// dd - date, mm - month, yyyy - year.
// Don't use spaces between time values requesting string.
// hh:mm:ss - OK
// hh mm ss - Warning: You may don't get what you expect.

// Example:
d.current("dd-mm-yyyy hh:mm:ss") // Prints current date and time.
```

#### dateM.timePassed()

Using this method you can get difference between two dates in days.

_Note: Arguments should be dateM objects._

*Example:*

```js
var b = new dateM(2020, 0, 1);
var e = new dateM(2021, 0, 1);

console.log(dateM.timePassed(b, e)); // Prints 366 
```

## 🏗️ To-do list

- [ ] Adding timezone option.
- [ ] Validation of arguments.
- [ ] Error handling.
- [ ] String values for day and month.
- [ ] Creating a meaningful and helpful documentation.
- [ ] Adding some options for timePassed method.
- [ ] Adding some more features.

Ofcourse, there's a lot to-do. 

## 🤝 Contributing

Thank you for considering contributing to our project.

Here are instructions for contributing.

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request.

**Working on your first Pull Request?**

 You can learn how from this *free* series [How to Contribute to an Open Source Project on GitHub](https://kcd.im/pull-request)

## ⚖️ License

[MIT](./LICENSE.md)
