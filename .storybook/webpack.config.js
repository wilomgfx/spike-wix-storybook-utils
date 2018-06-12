const merge = require('lodash/merge');
const path = require('path');
const wixStorybookConfig = require('yoshi/config/webpack.config.storybook');
const wixStorybookUtilsLoader = require('wix-storybook-utils/loader');

module.exports = (config, env, defaultConfig) => {
  const newConfig = wixStorybookConfig(defaultConfig);

  return merge(newConfig, {
    context: path.resolve(__dirname, '../src'),
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM'
    },
    resolve: {
      alias: {
        'wix-style-react': path.resolve(__dirname, '../src'),
        // 'wix-storybook-utils':  path.resolve(__dirname, '../node_modules/wix-storybook-utils')
      },
    },
    module: {
      rules: newConfig.module.rules.concat({
        test: /\.story\.js$/,
        loader: wixStorybookUtilsLoader,
        options: {
          storyConfig: {
            moduleName: 'wix-style-react',
            repoBaseURL: 'https://github.com/wix/wix-style-react/tree/master/src/'
          }
        }
      })
    }
  });
};
