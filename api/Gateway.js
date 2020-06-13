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
      return response.status(200).send({
        cityWeather: {
          city: cityWeather.name,
          state: cityWeather.state,
          country: cityWeather.country,
          data: {
            temperature: cityWeather.data.temperature,
            wind_direction: cityWeather.data.wind_direction,
            wind_velocity: cityWeather.data.wind_velocity,
            humidity: cityWeather.data.humidity,
            condition: cityWeather.data.condition,
            pressure: cityWeather.data.pressure,
            sensation: cityWeather.data.sensation,
            date: cityWeather.data.date
          }
        }
      })
    } catch (error) {
      return response.status(500).send({ message: 'Não foi possível encontrar a cidade' })
    }

  }

}