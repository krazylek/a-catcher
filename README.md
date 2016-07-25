# a-catcher

Intercept click on `<a href="">` local links, usefull for single page app.

The code is extracted from [Sheet-router](https://github.com/yoshuawuyts/sheet-router/)/href.js 
and [catch-links](https://github.com/substack/catch-links/).

All credits are due to [Yoshua Wuyts](https://github.com/yoshuawuyts) and [James Halliday](https://github.com/substack)

The goal of this module is to be self-contained and avoid the `url` module dependency.

The signature is similar to catch-links.


## Example

``` js
const catchLinks = require('a-catcher');

catchLinks(window, function (href) {
  console.log(href);
});
```


## methods

``` js
var catchLinks = require('a-catcher')
```

### catchLinks(element, cb)

Fire `cb(href)` whenever an anchor tag descendant of `element` with an in-server
url is clicked.


## install

With [npm](https://npmjs.org) do:

```
npm install a-catcher
```


## license

[MIT](https://tldrlegal.com/license/mit-license)
