# eslint-plugin-no-document-cookie

[![npm version](https://badge.fury.io/js/eslint-plugin-no-document-cookie.svg)](https://badge.fury.io/js/eslint-plugin-no-document-cookie) [![Build Status](https://travis-ci.org/sota1235/eslint-plugin-no-document-cookie.svg?branch=master)](https://travis-ci.org/sota1235/eslint-plugin-no-document-cookie)

find document.cookie

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-no-document-cookie`:

```
$ npm install eslint-plugin-no-document-cookie --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-no-document-cookie` globally.

## Usage

Add `no-document-cookie` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-document-cookie"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-document-cookie/rule-name": 2
    }
}
```

## Supported Rules

* `no-document-cookie`: Find 'document.cookie' from the code.
