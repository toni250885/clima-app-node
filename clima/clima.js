const axios = require('axios');

const getClima = async (lat, lng) =>{
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=edf47112614a0d6e6f0536cbe9b038d5&units=metric`)

    return resp.data.main.temp;
}


module.exports = {
    getClima
}