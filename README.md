# 微信小程序结构搭建&优化

#### 1、用于将微信小程序无接口请求, API异步函数封装为 Promise 风格

 ```js
 使用方法比如：
 const promisify from 'index.js'
 const login = promisify(wx.login)

 login()
 .then(res => {
    console.log(res.code)
 })
 ```

 #### 2、实现less 预处理器编写css
 