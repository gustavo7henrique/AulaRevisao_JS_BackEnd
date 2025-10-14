const celcius_fahrenheit =(celcius) =>{
    const fahrenheit = (celcius * (9/5)) + 32;
    const retorno= {
        convertido: fahrenheit
    }
    return retorno;
}
const km_milha =(quilometro) =>{
    const milhas = quilometro * 0.621371;
    const retorno= {
        convertido: milhas.toFixed(1)
    }
    return retorno;
}

module.exports = { celcius_fahrenheit, km_milha };