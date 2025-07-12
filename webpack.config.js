const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = (env, argv) => {
    return {
        mode: argv.mode || "development",
        entry: {
            main: path.resolve(__dirname, "src/index.tsx"),
        },
        output: {
            path: path.resolve(__dirname, "dist"),
            clean: true,
            publicPath: "/",
        },
        resolve: {
            extensions: [".tsx", ".ts", ".jsx", ".js"],
            alias: {
                assets: path.resolve(__dirname, "src/assets"),
                common: path.resolve(__dirname, "src/common"),
                pages: path.resolve(__dirname, "src/pages"),
            },
        },
        module: {
            rules: [
                {
                    test: /\.[jt]sx?$/,
                    exclude: /node_modules/,
                    include: [path.resolve(__dirname, "src")],
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env", ["@babel/preset-react", {runtime: "automatic"}], "@babel/preset-typescript"],
                        },
                    },
                },
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader", "postcss-loader"],
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    type: "asset/resource", // emits the file
                    generator: {
                        filename: "assets/[name].[contenthash][ext][query]",
                    },
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./public/index.html",
            }),
            new webpack.DefinePlugin({
                "process.env.PUBLIC_URL": JSON.stringify(process.env.PUBLIC_URL || ""),
            }),
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminMinify,
                    options: {
                        plugins: [
                            ["mozjpeg", {quality: 70}],
                            ["pngquant", {quality: [0.6, 0.8]}],
                        ],
                    },
                },
            }),
        ],
        devServer: {
            static: {
                directory: path.resolve(__dirname, "public"),
            },
            hot: true,
            port: 3000,
        },
    };
};
