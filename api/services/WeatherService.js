'use strict'

const Env = require('../../config/Env')
const Axios = require('axios')

class WeatherService {

  static async getCityWeather (cityId) {
    const url = `http://apiadvisor.climatempo.com.br/api/v1/weather/locale/${cityId}/current?token=${Env.get('ACCESS_TOKEN')}`
    const cityWeather = await Axios.get(url)
    return cityWeather.data
  }

}

module.exports = WeatherService