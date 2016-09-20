/**
 * @fileoverview Rule to check for the usage of document.cookie.
 * @author sota1235
 */

"use strict";

module.exports = {
  meta: {
    docs: {
      description: "Do not use 'document.cookie'. You should use CSP header.",
      category: "Best Practices",
      recommended: false,
      schema: [],
    },
  },
  create: function(context) {
    return {
      // callback functions
    };
  },
};
