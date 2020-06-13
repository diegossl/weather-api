'use strict'

const TokenManagementService = require('./services/TokenManagementService')
const LocationService = require('./services/LocationService')
const WeatherService = require('./services/WeatherService')

module.exports = {

  async index (request, response) {
    try {
      const cityName = request.params.cityName
      const cityId = await LocationService.getCity(cityName)
      const recoveredId = await TokenManagementService.setId(cityId)
      const cityWeather = await WeatherService.getCityWeather(recoveredId)
      return response.status(200).send({ cityWeather: cityWeather })
    } catch (error) {
      return response.status(500).send({ message: 'Não foi possível encontrar a cidade' })
    }

  }

}