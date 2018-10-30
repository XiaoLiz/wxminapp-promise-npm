import promisify from '../utils/promisify'
const wxLoginCode = promisify(wx.login)

export default function getCode() {
    return wxLoginCode()
}

