const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//export an object directly from webpack.js or export function which when called returns the web config object
// so we can access to the varialbes env, argv through module.exports = funciton(env, argv) {}
module.exports = (env) => {
  const isProduction = env === 'production'; // if env not equal to production, this will be false, and we'll run webpack without production optimization
  const CSSExtract = new MiniCssExtractPlugin({ filename: 'styles.css' });
  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          //only when file ending in .js, then we run babel-loader
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/,
        },
        {
          test: /\.s?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },
    plugins: [CSSExtract],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
    },
  };
};
