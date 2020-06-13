'use strict'

const Axios = require('axios')

class WeatherService {

  static async getCityWeather (cityId) {
    const cityWeather = await Axios.get(`http://apiadvisor.climatempo.com.br/api/v1/weather/locale/${cityId}/current?token=${process.env.ACCESS_TOKEN}`)
    return cityWeather.data
  }

}

module.exports = WeatherService