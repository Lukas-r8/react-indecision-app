const path = require('path');

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            cacheDirectory: true,
                            babelrc: false,
                            presets: [
                                "@babel/env",
                                "@babel/react"
                            ],
                            plugins: [
                                "@babel/plugin-proposal-object-rest-spread",
                                "syntax-optional-chaining",
                                "@babel/plugin-proposal-class-properties"
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    devtool: "eval-cheap-module-source-map",
    devServer: {
        contentBase: path.join(__dirname, "public")
    }
}