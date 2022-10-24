'use strict';

function index () {
  return {
    name: '@clintech/babel-plugin-remove-console',
    visitor: {
      CallExpression(path, state) {
        console.log('path',state)
        const { env } = state.opts;
        if (env !== 'prod' && env !== 'production') {
          return;
        }
        const callee = path.get('callee');
        if (!callee.isMemberExpression()) {
          return;
        }
        if (callee.get('object').isIdentifier({ name: 'console' })) {
          path.remove();
        }
      },
    },
  };
}

module.exports = index;