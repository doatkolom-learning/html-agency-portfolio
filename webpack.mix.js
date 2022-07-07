const mix = require('laravel-mix')
mix.options({ processCssUrls: false });
mix.sass('src/master.scss', 'build/master.css')

mix.js("src/app.js", "build/app.js")
.webpackConfig({
    externals: {
        "jquery": "jQuery"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".vue", ".ts", ".tsx"]
    }
})