/* 
  Date: 2018-10-30
  author: 易风
    

  使用方法比如：
 * const login = utils.promisify(wx.login)
 * login().then(res => console.log(res.code))
 */

export default function promisify(fn) {

    return function(params = {}) {
        return new Promise((resolve, reject) => {
            params.success = function(res) {
                resolve(res)
            }
    
            params.fail = function(res) {
                reject(res)
            }
    
            fn(params)
        })
    }
}