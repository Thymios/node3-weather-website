const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/8f7c2addf8a3a15118cecad5adedd4d0/${encodeURIComponent(latitude)},${encodeURIComponent(longitude)}?units=si`
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather servive', undefined)
        } else if (!body.currently) {
            callback("Unable to find data. Try another search.", undefined)
        } else {
            callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. The high today is ${body.daily.data[0].temperatureHigh} with a low of ${body.daily.data[0].temperatureLow}. There is a ${body.currently.precipProbability}% chance of rain.`)
        }
    })
}

module.exports = forecast