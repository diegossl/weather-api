'use strict'

const Axios = require('axios')

class TokenManagementService {

  static async setId (cityId) {
    const url = `http://apiadvisor.climatempo.com.br/api-manager/user-token/${process.env.ACCESS_TOKEN}/locales`
    const config = { headers: {'Content-Type': 'application/x-www-form-urlencoded'} }
    const content = `localeId[]=${cityId}`
    const response = await Axios.put(url,content,config)
    return response.data.locales[0]
  }

}

module.exports = TokenManagementService