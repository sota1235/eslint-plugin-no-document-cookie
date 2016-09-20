/**
 * @fileoverview Tests for no-document-cookie rule.
 * @author sota1235
 */

"use strict";

const rule = require('../lib/rules/no-document-cookie');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester();

ruleTester.run('no-document-cookie', rule, {
  valid: [
    'document.hoge',
  ],
  invalid: [
    {
      code: 'document.cookie',
      errors: ['Unexpected use of "document.cookie".'],
    },
  ],
});
