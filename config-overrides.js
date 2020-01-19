/* eslint-disable no-unused-vars */
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const {
  override,
  addBabelPlugins,
  disableEsLint,
  addDecoratorsLegacy,
  addBundleVisualizer,
  addWebpackPlugin,
  overrideDevServer,
} = require('customize-cra');

const absolutePathsImport = alias => config => {
  config.resolve = {
    ...config.resolve,
    alias,
  };

  return config;
};

const changeDevtool = name => config => {
  if (process.env.NODE_ENV === 'development') {
    config.devtool = name;
  }

  if (process.env.NODE_ENV === 'production') {
    config.devtool = false;
  }
  return config;
};

const devAddBundleVisualizer = (...args) => config => {
  if (process.env.NODE_ENV === 'production') {
    return addBundleVisualizer(...args)(config);
  } else {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
      .BundleAnalyzerPlugin;
    config.plugins = config.plugins || [];
    config.plugins.push(new BundleAnalyzerPlugin());
  }

  return config;
};

const addSSLToDevServer = https => config => {
  config.https = https;
  return config;
};

module.exports = {
  webpack: override(
    absolutePathsImport({
      '@': __dirname + '/src',
    }),
    disableEsLint(),
    ...addBabelPlugins('jsx-control-statements', 'ramda'),
    addWebpackPlugin(
      new webpack.ContextReplacementPlugin(
        /react-intl[/\\]locale-data$/,
        /en|vi/,
      ),
    ),
    addDecoratorsLegacy(),
    changeDevtool('eval-source-map'),
    devAddBundleVisualizer(),
  ),
  devServer: overrideDevServer(),
  // addSSLToDevServer({
  //   cert: fs.readFileSync(path.join(__dirname, './__SSL__/private.pem')),
  //   key: fs.readFileSync(path.join(__dirname, './__SSL__/private.key')),
  // }),
};
