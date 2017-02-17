import { createFilter } from 'rollup-pluginutils';
import inlineSource from 'inline-source';

// var pluginutils = require('rollup-pluginutils');
// var inlineSource = require('inline-source').sync;
var index = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // module.exports = function (options = {}) {
  var filter = createFilter(options.include || ['**/*.hbs', '**/*.handlebars', '**/*.mustache'], options.exclude || 'node_modules/**');
  var sourceMap = options.sourceMap !== false;

  return {
    transform: function transform(code, id) {
      if (!filter(id)) return;

      code = inlineSource.sync(id);

      return {
        code: code,
        map: {
          mappings: ''
        }
      };
    }
  };
};

export default index;
