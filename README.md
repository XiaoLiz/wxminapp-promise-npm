# 微信小程序 API Promise 封装

> 用于将微信小程序无接口请求, API异步函数封装为 Promise 风格

## 使用方法比如：
常用的API, 例如wx.login

 ```js
const promisify from 'index.js'
const login = promisify(wx.login)

login()
.then(res => {
console.log(res.code)
})
```

网络请求：wx.request()
```JavaScript
const promisify from 'index.js';
const wxRequest = promisify(wx.request)

wxRequest({
	url: options.url,
	data: options.data,
	header,
	method
})
.then(() => {})
.catch(() => {})

```