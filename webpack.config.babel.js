import * as path from 'path';

import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
// import ExtractTextPlugin from 'extract-text-webpack-plugin';
import SystemBellPlugin from 'system-bell-webpack-plugin';
// import CleanPlugin from 'clean-webpack-plugin';
import merge from 'webpack-merge';
// import React from 'react';
// import ReactDOM from 'react-dom/server';

// import App from './demo/App.jsx';
import pkg from './package.json';

// const RENDER_UNIVERSAL = false;
const TARGET = process.env.npm_lifecycle_event;
const ROOT_PATH = __dirname;

const config = {
  paths: {
    dist: path.join(ROOT_PATH, 'dist'),
    src: path.join(ROOT_PATH, 'src'),
    demo: path.join(ROOT_PATH, 'demo'),
    tests: path.join(ROOT_PATH, 'tests')
  },
  filename: '',
  library: ''
};

const CSS_PATHS = [
  config.paths.demo,
  // path.join(ROOT_PATH, 'style.css'),
];

const STYLE_ENTRIES = [
  './demo/main.scss',
  // './style.css'
];

process.env.BABEL_ENV = TARGET;

// Common webpack settings for development and demo 
const devCommon = {
  resolve: {
    modules: [
        path.resolve(ROOT_PATH),
        'node_modules'
    ],
    extensions: ['.js', '.jsx', '.css', '.png', '.jpg']
  },
  // resolveLoader: {
  //   fallback: [path.join(__dirname, 'node_modules')]
  // },
  module: {
    // rules: [
    //   {
    //     test: /\.jsx?$/,
    //     enforce: "pre",
    //     loaders: ['eslint'],
    //     include: [
    //       config.paths.demo,
    //       config.paths.src
    //     ]
    //   }
    // ],
    rules: [
      // {
      //   test: /\.png$/,
      //   loader: 'url?limit=100000&mimetype=image/png',
      //   include: config.paths.demo
      // },
      // {
      //   test: /\.jpg$/,
      //   loader: 'file',
      //   include: config.paths.demo
      // },
      {
        test: /\.json$/,
        loader: 'json-loader',
        include: path.join(ROOT_PATH, 'package.json')
      },
      { 
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new SystemBellPlugin()
  ]
};

if (TARGET === 'start') {
  module.exports = merge(devCommon, {
    devtool: 'eval-source-map',
    entry: {
      demo: [config.paths.demo].concat(STYLE_ENTRIES)
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"development"'
      }),
      new HtmlWebpackPlugin({
        title: pkg.name + ' - ' + pkg.description,
        template: 'lib/index_template.ejs',

        // Context for the template
        name: pkg.name,
        description: pkg.description,
        demonstration: ''
      }),
      new webpack.HotModuleReplacementPlugin()
    ],
    module: {
      rules: [
        {
          test: /\.(scss|css)$/,
          use: [
              { loader: 'style-loader' },
              { loader: 'css-loader' },
              { loader: 'sass-loader' }
          ],
          include: CSS_PATHS
        },
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          options: 'cacheDirectory',
          include: [
            config.paths.demo,
            config.paths.src
          ]
        }
      ]
    },
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      // progress: true,
      host: process.env.HOST || process.env.HOSTNAME + '.autotrader.com',
      port: process.env.PORT,
      stats: 'errors-only'
    }
  });
}

// function NamedModulesPlugin(options) {
//   this.options = options || {};
// }
// NamedModulesPlugin.prototype.apply = function(compiler) {
//   compiler.plugin('compilation', function(compilation) {
//     compilation.plugin('before-module-ids', function(modules) {
//       modules.forEach(function(module) {
//         if(module.id === null && module.libIdent) {
//           var id = module.libIdent({
//             context: this.options.context || compiler.options.context
//           });
//
//           // Skip CSS files since those go through ExtractTextPlugin
//           if(!id.endsWith('.css')) {
//             module.id = id;
//           }
//         }
//       }, this);
//     }.bind(this));
//   }.bind(this));
// };

// if (TARGET === 'gh-pages' || TARGET === 'gh-pages:stats') {
//   module.exports = merge(devCommon, {
//     entry: {
//       app: config.paths.demo,
//       vendors: [
//         'react'
//       ],
//       style: STYLE_ENTRIES
//     },
//     output: {
//       path: './gh-pages',
//       filename: '[name].[chunkhash].js',
//       chunkFilename: '[chunkhash].js'
//     },
//     plugins: [
//       new CleanPlugin(['gh-pages'], {
//         verbose: false
//       }),
//       new ExtractTextPlugin('[name].[chunkhash].css'),
//       new webpack.DefinePlugin({
//           // This affects the react lib size
//         'process.env.NODE_ENV': '"production"'
//       }),
//       new HtmlWebpackPlugin({
//         title: pkg.name + ' - ' + pkg.description,
//         template: 'lib/index_template.ejs',
//
//         // Context for the template
//         name: pkg.name,
//         description: pkg.description,
//         demonstration: RENDER_UNIVERSAL ? ReactDOM.renderToString(<App />) : ''
//       }),
//       new NamedModulesPlugin(),
//       new webpack.optimize.DedupePlugin(),
//       new webpack.optimize.UglifyJsPlugin({
//         compress: {
//           warnings: false
//         }
//       }),
//       new webpack.optimize.CommonsChunkPlugin({
//         names: ['vendors', 'manifest']
//       })
//     ],
//     module: {
//       loaders: [
//         {
//           test: /\.(css|scss)$/,
//           loader: ExtractTextPlugin.extract(
//               'style', // backup loader when not building .css file
//               'css!sass' // loaders to preprocess CSS
//           ),
//           include: CSS_PATHS
//         },
//         {
//           test: /\.jsx?$/,
//           loaders: ['babel'],
//           include: [
//             config.paths.demo,
//             config.paths.src
//           ]
//         }
//       ]
//     }
//   });
// }

// !TARGET === prepush hook for test
// if (TARGET === 'test' || TARGET === 'test:tdd' || !TARGET) {
//   module.exports = merge(devCommon, {
//     module: {
//       preLoaders: [
//         {
//           test: /\.jsx?$/,
//           loaders: ['isparta', 'eslint'],
//           include: [
//             config.paths.tests
//           ]
//         }
//       ],
//       loaders: [
//         {
//           test: /\.jsx?$/,
//           loaders: ['babel?cacheDirectory'],
//           include: [
//             config.paths.src,
//             config.paths.tests
//           ]
//         }
//       ]
//     }
//   })
// }

// Common webpack settings for distributing the package
const distCommon = {
  devtool: 'source-map',
  output: {
    path: config.paths.dist,
    libraryTarget: 'umd',
    library: config.library
  },
  entry: config.paths.src,
  externals: {
    'react': {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React'
    }
  },
  module: {
    rules: [
      {
        use: [
          {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            include: config.paths.src
          }
        ]
      }
    ]
  },
  plugins: [
    new SystemBellPlugin()
  ]
};

if (TARGET === 'dist') {
  module.exports = merge(distCommon, {
    output: {
      filename: config.filename + '.js'
    }
  });
}

if (TARGET === 'dist:min') {
  module.exports = merge(distCommon, {
    output: {
      filename: config.filename + '.min.js'
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  });
}