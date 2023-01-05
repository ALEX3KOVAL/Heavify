const path = require('path');
const DotenvPlugin = require("dotenv-webpack");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode: "production",
    entry: './index.ts',
    devtool: 'inline-source-map',
    externals: {
        "node:path": "commonjs path"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.html$/i,
                loader: "html-loader"
            }
        ],
    },
    resolve: {
        extensions: ['.ts', ".js"],
        plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })],
        fallback: {
            "path": require.resolve("path-browserify"),
            "assert": require.resolve("assert/"),
            "fs": false,
            "pg-hstore": false,
            "crypto": require.resolve("crypto-browserify"),
            "stream": require.resolve("stream-browserify"),
            "os": require.resolve("os-browserify/browser"),
            "buffer": require.resolve("buffer/"),
            "tls": false,
            "child_process": false,
            "net": false,
            "dns": false,
            "zlib": require.resolve("browserify-zlib"),
            "https": require.resolve("https-browserify"),
            "http": require.resolve("stream-http"),
            "nock": false,
            "aws-sdk": false,
            "mock-aws-s3": false
        }
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, '../../dist/server'),
    },
    devServer: {
        static: path.join(__dirname, "../../dist/server"),
    },
    plugins: [
        new DotenvPlugin({path: "./.env",}),
        new HtmlWebpackPlugin()
    ]
}
