# Weather forecast

API that collects and processes meteorological information about temperature, pressure, humidity, wind, temperature and atmospheric conditions of any city in Brazil. As information is collected by the Climatempo API, which is a Brazilian company that offers Meteorology services.

## Setup

To execute the project, it will be necessary to install as dependencies by typing the following command in the terminal:

```bash
npm install
```

Finally, type the following command in the terminal to start the server:

```bash
npm start
```

The system is now ready to be used using the route:

[http://localhost:3000/search/](http://localhost:3000/search/)

Just send the city name for this route and the current weather data in the city will be returned.

### Example of data entry:

`
São Paulo
`

The city name can be typed with or without quotes, in upper or lower case, together or separately. But the name needs to be complete.

### Example of output:

```javascript
{
  "cityWeather": {
    "city": "São Paulo",
    "state": "SP",
    "country": "BR  ",
    "data": {
      "temperature": 26,
      "wind_direction": "NW",
      "wind_velocity": 20,
      "humidity": 45,
      "condition": "Alguma nebulosidade",
      "pressure": 1022,
      "sensation": 26,
      "date": "2020-06-13 12:36:41"
    }
  }
}
```

### Features

The API collects the following data for a specific city:

**Location data**

|   **Field**   |    **Type**     |    **Description**                          |
|:-------------:|:---------------:|:-------------------------------------------:|
|     name      |     String      |   Name of the city                          |
|     state     |     String      |   State                                     |
|     country   |     String      |   Country                                   |
|     data      |     Object      |   Current weather data for the city         |

**Weather data**

|   **Field**    |    **Type**     |            **Description**                    |
|:--------------:|:---------------:|:---------------------------------------------:|
| temperature    |      Number     |      Temperature in degrees celsius (°C)      |
| wind_direction |      String     |                Wind direction                 |
| wind_velocity  |      Number     |              Wind intensit (km/h)             |
|   humidity	   |      Number     |              Relative humidity (%)            |
|   condition    |      String     |                  Condition                    |
|   pressure     |      Number     |                Pressure (hPa)                 |
|   sensation    |      String     |   Thermal sensation in degrees celsius (°C)   |
|     date       |      Date       |                    Date                       |

### License

MIT
