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
  create(context) {
    /**
     * @param {ASTNode} node - A variable declaration node to check.
     */
    const findDocumentCookie = (node) => {
      if (node.object.name === 'document' && node.property.name === 'cookie') {
        context.report(node, 'Unexpected use of "document.cookie".');
      }
    };

    return {
      MemberExpression: findDocumentCookie,
    };
  },
};
