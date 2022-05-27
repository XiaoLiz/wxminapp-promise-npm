/* 
* Date: 2022-05-27
* author: 李慢慢
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