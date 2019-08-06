const express = require('express')
// const webpack = require('webpack')
const app = express()
const homeData = require('./public/mock/index.json')
const cityData = require('./public/mock/city.json')
const apiRoutes = express.Router()
app.use('/api', apiRoutes)
module.exports = {
  publicPath: './',
  productionSourceMap: false,
  devServer: {
    before (app) {
      app.get('/api/index.json', (req, res) => {
        res.json({
          data: homeData
        })
      })
      app.get('/api/city.json', (req, res) => {
        res.json({
          data: cityData
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
