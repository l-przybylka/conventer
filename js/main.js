function temperatureConventer(temperature, source) {

  if(source == 'inputCelsius') {
      inputFahrenheit.value = parseFloat(temperature * 1.8 + 32).toFixed(2)
      inputKelvin.value = parseFloat(temperature + 273.15).toFixed(2)
  }
  if(source == 'inputFahrenheit') {
      inputCelsius.value = parseFloat((temperature - 32) / 1.8).toFixed(2)
      inputKelvin.value = parseFloat(((temperature -32) / 1.8) + 273.15).toFixed(2)
  }
  if(source == 'inputKelvin') {
      inputCelsius.value = parseFloat(temperature - 273.15).toFixed(2)
      inputFahrenheit.value = parseFloat(((temperature - 273.15) * 1.8) + 32).toFixed(2)
  }
}

function weightConventer(length, source) {

    if(source == 'inputKilometers') {
        
    }
}