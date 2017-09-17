const path = require('path');
const webpack = require('webpack');

const paths = {
    app: "./FrontEnd/app/",
    vendor:"./FrontEnd/vendor/",
    outputDir:"/wwwroot/dist/"
}

const config = {
    entry:{
    "js/app/app":paths.app + "js/main.js",
    "js/libs/libs": [paths.vendor + 'js/jquery.js', paths.vendor + 'js/bootstrap.js']
    //"js/styles/styles":[paths.vendor + "js/styles.js"]
},

    output:{
        path: path.join(__dirname, paths.outputDir),
        filename:"[name].js" 
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader:"babel-loader",
                exclude:"/node_modules/"
            }
        ]
    },
    plugins: [
    new webpack.ProvidePlugin({ 
        $: 'jquery', 
        jQuery: 'jquery'
    }),
    ]
}

module.exports = config;
