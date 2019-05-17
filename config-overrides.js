// Created by szatpig at 2019/5/16.

const { override, fixBabelImports,addWebpackAlias ,addLessLoader  } = require('customize-cra');

const path = require('path')

module.exports = override(
    //配置路径别名
    addWebpackAlias({
        '@': path.resolve(__dirname, 'src'),
    }),
    //外部扩展加载
    // addWebpackExternals({
    //
    // }),
    // 移动端适配
    // addPostcssPlugins([require("postcss-px2rem")({ remUnit: 37.5 })]),
    fixBabelImports('import', {
        libraryDirectory: 'es',
        libraryName: 'antd',
        style: 'true',
    }),
    addLessLoader({
        javascriptEnabled: true,
        strictMath: true,
        noIeCompat: true,
        localIdentName: '[local]--[hash:base64:5]' // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
    })
);