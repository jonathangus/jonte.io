import path from 'path';
import webpack from 'webpack';
import qs from 'querystring';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import AssetsPlugin from 'assets-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
const root = process.cwd();
const src  = path.join(root, 'src');
const build = path.join(root, 'build');

const client = path.join(src, 'client');
const universal = path.join(src, 'universal');

const clientInclude = [client, universal];

export default {
  context: src,
  entry: {
    app: ['babel-polyfill', 'client/client.js'],
  },
  output: {
    filename: '[name]_[chunkhash].js',
    chunkFilename: '[name]_[chunkhash].js',
    path: build,
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['.js'],
    modules: [src, 'node_modules'],
    unsafeCache: true
  },
  node: {
    dns: 'mock',
    net: 'mock'
  },
  plugins: [
   new webpack.NamedModulesPlugin(),
   new webpack.optimize.CommonsChunkPlugin({
     names: ['vendor', 'manifest'],
     minChunks: Infinity
   }),
   new webpack.optimize.AggressiveMergingPlugin(),
   new webpack.optimize.MinChunkSizePlugin({minChunkSize: 50000}),
   new webpack.optimize.UglifyJsPlugin({compressor: {warnings: false}, comments: /(?:)/}),
   new AssetsPlugin({path: build, filename: 'assets.json'}),
   new webpack.NoErrorsPlugin(),
   new webpack.DefinePlugin({
     '__CLIENT__': true,
     '__PRODUCTION__': true,
     'process.env.NODE_ENV': JSON.stringify('production')
   }),
   new CompressionPlugin({
     asset: "[path].gz[query]",
     algorithm: "gzip",
     test: /\.js$|\.css$/,
     threshold: 10240,
     minRatio: 0.8
   }),
   new webpack.DefinePlugin({
     GA_TRACKING_CODE: JSON.stringify('UA-43885727-4'),
   }),
  new ExtractTextPlugin({
      filename: 'styles.css',
      allChunks: true
  })
 ],
 module: {
   loaders: [
     {
       test: /\.css$/,
       loader: ExtractTextPlugin.extract({
           fallbackLoader: 'style-loader',
           loader: '!css-loader?' + qs.stringify({
               minimize: true,
               modules: true,
               importLoaders: 1,
               localIdentName: '[name]-[local]'
           }) + '!sass'}),
       include: clientInclude,
     },
     {
       test: /\.(eot|png|jpg|jpeg|gif|woff)$/,
       loaders: [
         'file-loader',
         'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
       ]
     },
     {
        test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader : 'file-loader'
     },
     {
       test: /\.js$/,
       loader: 'babel-loader',
       include: clientInclude
     }

   ]
 }
}
