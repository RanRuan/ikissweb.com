const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const  newTheme ={"@primary-color": "#ea4498"}

module.exports = function override(config, env) {
	config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
	config = rewireLess.withLoaderOptions({
	modifyVars: newTheme
	})(config, env);
  return config;
};