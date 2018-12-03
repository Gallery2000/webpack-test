const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig  = require('./webpack.base.conf');
module.exports =merge(baseWebpackConfig,
    {
        mode:'development',
        devServer:{
            inline:true,
            contentBase:path.resolve(__dirname,'dist'),
            host:'localhost',
            port:'4200',
            compress:true,
            open:true
        },
        devtool: 'cheap-module-eval-source-map'
    }
)