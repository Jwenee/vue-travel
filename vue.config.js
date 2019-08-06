const express = require('express')
// const webpack = require('webpack')
const app = express()
var appData = require('./public/mock/index.json')
var apiRoutes = express.Router()
app.use('/api', apiRoutes)
module.exports = {
  publicPath: './',
  productionSourceMap: false,
  devServer: {
    before (app) {
      app.get('/api/index.json', (req, res) => {
        res.json({
          data: appData
        })
      })
    }
    // proxy: {
    //   // '/test': {
    //   //   target: "http://192.168.1.xxx",
    //   //   changeOrigin: true,
    //   //   pathRewrite: {
    //   //     '/test': '/scm'
    // }
  }
}
