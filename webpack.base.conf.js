const path = require('path');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const ExtractTextPlugin  = require('extract-text-webpack-plugin');
const CleanWepabckPlugin =  require('clean-webpack-plugin');
module.exports = {
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[chunkhash].bound.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:ExtractTextPlugin.extract({
                    use:'css-loader'
                })
            },
            {
                test:/\.less$/,
                use:["style-loader","css-loader","less-loader"]
            },
            {
                test:/\.(png|jpg|jpeg|gif)$/,
                loader:'file-loader',
                options:{
                    limit:8192,
                    name:"static/img[name].[ext]",
                }
            },
            {
                test:/\.(html|htm)$/,
                loader:'html-withimg-loader'
            },
            {
                test:/\.js$/,
                loader:'babel-loader',
                include:'/src/',
                // 只专业src目录下的js文件
                exclude:'/node_modules/'
            }
            // {
            //     test:/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)$/,
            //     loader:'url-loader',
            //     options:{
            //         limit:10000,
            //         name:utils.assetsPath('media/[name].[hash:7].[ext]')
            //     }
            // },
            // {
            //     test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            //     loader:'url-loader',
            //     options:{
            //         limit:10000,
            //         name:utils.assetsPath('fonts/[name].[hash:7].[ext]')
            //     }
            // }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './index.html',
            hash:true
        }),
        new ExtractTextPlugin('css/reset.css'),
        new CleanWepabckPlugin('dist')
    ]
}