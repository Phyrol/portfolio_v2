const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
                    test: /\.svg$/,
                    type: "asset/resource", // emits the file
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./public/index.html",
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
