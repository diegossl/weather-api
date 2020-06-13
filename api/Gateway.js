'use strict'

const LocationService = require('./services/LocationService')
const WeatherService = require('./services/WeatherService')
module.exports = {

  async index (request, response) {
    try {
      const cityId = await LocationService.getCity('Feira de Santana')
      const cityWeather = await WeatherService.getCityWeather(cityId)
      const result = await Axios.all([cityId, cityWeather])
      console.log(result)
    } catch (error) {
      throw error
    }

  }

}