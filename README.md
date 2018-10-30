# -Promise-
微信小程序原生请求，Promise封装

使用方法比如：
  
 ``` code
 const login = utils.promisify(wx.login)
 
 login().then( res => 
    console.log(res.code)
 )
 