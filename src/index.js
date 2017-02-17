// var pluginutils = require('rollup-pluginutils');
import { createFilter } from 'rollup-pluginutils';
// var inlineSource = require('inline-source').sync;
import inlineSource from 'inline-source';

export default function (options = {}) {
// module.exports = function (options = {}) {
  const filter = createFilter(
    options.include || [ '**/*.hbs', '**/*.handlebars', '**/*.mustache' ],
    options.exclude || 'node_modules/**'
  );
  options.inlineSource = options.inlineSource || {};
  const sourceMap = options.sourceMap !== false;

  return {
    transform (code, id) {
      if(!filter(id)) return;

      code = inlineSource.sync(id, options.inlineSource);

      return {
        code,
        map: {
          mappings: ''
        }
      };
    }
  };
};
