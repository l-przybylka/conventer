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
        inputMeters.value = parseFloat(length * 1000).toFixed(2)
        inputCentimeters.value = parseFloat(length * 100000).toFixed(2)
        inputMiles.value = parseFloat(length * 0.62137).toFixed(2)
        inputYards.value = parseFloat(length * 1093.6).toFixed(2)
        inputInches.value = parseFloat(length * 39370).toFixed(2)
        inputFeet.value = parseFloat(length * 3280.8).toFixed(2)
    }
}