'use strict'

const Axios = require('axios')

class LocationService {

  static async getCity (cityName) {
    const cities = await Axios.get(`http://apiadvisor.climatempo.com.br/api/v1/locale/city?country=BR&token=${process.env.ACCESS_TOKEN}`)
    const city = cities.data.filter((item) => {
      if(item.name == cityName) {
        return item
      }
    })
    return city[0].id
  }

}

module.exports = LocationService