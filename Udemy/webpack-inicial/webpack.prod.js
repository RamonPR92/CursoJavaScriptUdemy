
//importamos el plugin htl-webpack-plugin
const htmlWebPackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const copyPlugin = require("copy-webpack-plugin");
const cssMinimizer = require("css-minimizer-webpack-plugin");
const terser = require("terser-webpack-plugin");

//Esto es el archivo de configuracion de webpack, este es el nombre por default
module.exports = {
    mode: 'production', //production es el valor pot default y hace que el main.js aparezca minimizado, en development no aparece minimizado
    output:{
        //Elimina los archivos generados cuando se ejecuta el build
        clean: true, 
        filename: 'main.[fullhash].js'
    },
    module: {
        rules: [
            {
                test: /\.html$/,//Si encuentra todos los archivos .html aplica las siguientes lineas
                loader: 'html-loader',//Le decimos que va a usar esta dependencia
                options: {
                    sources: false
                }
            },
            {
                test:/\.css$/,//Si encuentra algun archivo .css aplica las siguientes lineas
                exclude: /style.css$/, //excluye un archivo determinado
                use: ['style-loader', 'css-loader']//Le decimos que va a usar estas dependencias

            },
            {//Confiiguracion para estilos globales de css
                test: /style.css$/,//Si se encuentra este archivo exactamente pasa a la siguiente linea 
                use: [miniCssExtractPlugin.loader, 'css-loader']    
            } 
            // {
            //     test: /\.(png|jpe?g|gif)$/, //Si encontramos cualquier imagen con cualquiera de estas extensiones entonces ejecutamos la siguiente linea
            //     loader: 'file-loader'
            // }
            ,
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader",
                    options:{
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    optimization:{
        //Minimiza los archivos Css
        minimize: true,
        minimizer: [
            new cssMinimizer(),
            new terser()
        ]
    },
    plugins:[
        //Crea el html en /dist y se le pueden agregar configuraciones
        new htmlWebPackPlugin({
            title:'Mi WebPack App',
            filename: 'index.html',
            //toma como referencia el html que indiquemos y la salida es completamente igual
            template: './src/index.html'
        }),
        new miniCssExtractPlugin({
            //nombre del archivo final de estilos, 
            //fullhash funciona para cambiar el nombre con un hash al archivo y evitar que el nombre se guarde en cache
            filename: '[name].[fullhash].css', 
            ignoreOrder: false
        }), 
        new copyPlugin({
            //Cada patron representa una directiva de origen y destino de los archivos estaticos
            patterns: [
                {from: 'src/assets/', to: 'assets/'}
            ]
        })
    ]
}