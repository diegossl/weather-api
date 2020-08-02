'use strict'

const Axios = require('axios')

class WeatherService {

  static async getCityWeather (cityId) {
    const url = `http://apiadvisor.climatempo.com.br/api/v1/weather/locale/${cityId}/current?token=${process.env.ACCESS_TOKEN}`
    const cityWeather = await Axios.get(url)
    return cityWeather.data
  }

}

module.exports = WeatherService