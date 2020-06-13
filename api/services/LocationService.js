'use strict'

const StringConverter = require('../../utils/StringConverter')
const Env = require('../../config/Env')
const Axios = require('axios')

class LocationService {

  static async getCity (cityName) {
    cityName = StringConverter.convert(cityName)
    const url = `http://apiadvisor.climatempo.com.br/api/v1/locale/city?country=BR&token=${Env.get('ACCESS_TOKEN')}`
    const cities = await Axios.get(url)
    const city = cities.data.filter((item) => {
      let res = StringConverter.convert(item.name)
      if(res == cityName) {
        return item
      }
    })
    return city[0].id
  }

}

module.exports = LocationService