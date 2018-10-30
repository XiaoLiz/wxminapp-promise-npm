/**
 *  微信请求函数
 */

import promisify from '../utils/promisify'

const wxRequest = promisify(wx.request)
const app = getApp()

/**
 * 构建用于用户验证的文件头
 */
function buildSessionHeader() {
    let header = {
        'XX-Device-Type': 'wxapp'
    }
    const token = app && app.getToken()
    if (token) {
        header['XX-Token'] = token
    }
    return header
}


/**
 * 向后台发起请求
 * @param {object} options - 请求参数
 * @param {string} options.url - 请求的地址
 * @param {string} options.method - 请求方法，默认为 'GET'
 * @param {object} options.data - 请求参数，默认为空
 * @param {object} options.header - 请求头字段
 * @returns {*}
 */
function $ajax(options = {}) {
    const origHeader = options.header || {}
    const method = (options.method || 'GET').toUpperCase()
    if (!options.url) {
        throw new Error('method and url must be valid!')
    }
    const defaultHeader = buildSessionHeader()
    const header = Object.assign(defaultHeader, origHeader)
    console.log(header, 'header=====')

    return wxRequest({
        url: options.url,
        data: options.data,
        header,
        method
    })
}

export default {
    $ajax
}
 