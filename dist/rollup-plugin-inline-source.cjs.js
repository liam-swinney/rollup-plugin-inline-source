'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var rollupPluginutils = require('rollup-pluginutils');
var inlineSource = _interopDefault(require('inline-source'));

// var pluginutils = require('rollup-pluginutils');
// var inlineSource = require('inline-source').sync;
var index = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // module.exports = function (options = {}) {
  var filter = rollupPluginutils.createFilter(options.include || ['**/*.hbs', '**/*.handlebars', '**/*.mustache'], options.exclude || 'node_modules/**');
  options.inlineSource = options.inlineSource || {};
  var sourceMap = options.sourceMap !== false;

  return {
    transform: function transform(code, id) {
      if (!filter(id)) return;

      code = inlineSource.sync(id, options.inlineSource);

      return {
        code: code,
        map: {
          mappings: ''
        }
      };
    }
  };
};

module.exports = index;
