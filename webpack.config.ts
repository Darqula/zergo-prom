import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(ts|tsx)$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin()],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', 'css'],
    },
    mode: 'development',
    devServer: {
        open: true,
    },
}
