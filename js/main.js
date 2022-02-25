document.getElementById('theme-selector').addEventListener('click', changeTheme)

function changeTheme() {
    document.querySelector('body').style.background = ('white')
}

function temperatureConventer(temperature, source) {

  if(source == 'inputCelsius') {
      inputFahrenheit.value = parseFloat(temperature * 1.8 + 32).toFixed(4)
      inputKelvin.value = parseFloat(temperature + 273.15).toFixed(4)
  }
  if(source == 'inputFahrenheit') {
      inputCelsius.value = parseFloat((temperature - 32) / 1.8).toFixed(4)
      inputKelvin.value = parseFloat(((temperature -32) / 1.8) + 273.15).toFixed(4)
  }
  if(source == 'inputKelvin') {
      inputCelsius.value = parseFloat(temperature - 273.15).toFixed(4)
      inputFahrenheit.value = parseFloat(((temperature - 273.15) * 1.8) + 32).toFixed(4)
  }
}

function weightConventer(length, source) {

    if(source == 'inputKilometers') {
        inputMeters.value = parseFloat(length * 1000).toFixed(4)
        inputCentimeters.value = parseFloat(length * 100000).toFixed(4)
        inputMiles.value = parseFloat(length * 0.62137).toFixed(4)
        inputYards.value = parseFloat(length * 1093.6).toFixed(4)
        inputInches.value = parseFloat(length * 39370).toFixed(4)
        inputFeet.value = parseFloat(length * 3280.8).toFixed(4)
    }
    if(source == 'inputMeters') {
        inputKilometers.value = parseFloat(length / 1000).toFixed(4)
        inputCentimeters.value = parseFloat(length / 0.01).toFixed(4)
        inputMiles.value = parseFloat(length * 0.00062137).toFixed(4)
        inputYards.value = parseFloat(length * 1.0936).toFixed(4)
        inputInches.value = parseFloat(length * 39.370).toFixed(4)
        inputFeet.value = parseFloat(length * 3.2808).toFixed(4)
    }
    if(source == 'inputCentimeters') {
        inputKilometers.value = parseFloat(length / 100000).toFixed(4)
        inputMeters.value = parseFloat(length / 100).toFixed(4)
        inputMiles.value = parseFloat(length * 0.0000062137).toFixed(4)
        inputYards.value = parseFloat(length * 0.010936).toFixed(4)
        inputInches.value = parseFloat(length * 0.39370).toFixed(4)
        inputFeet.value = parseFloat(length * 0.032808).toFixed(4)
    }
    if(source == 'inputMiles') {
        inputKilometers.value = parseFloat(length / 0.62137).toFixed(4)
        inputMeters.value = parseFloat(length / 0.00062137).toFixed(4)
        inputCentimeters.value = parseFloat(length / 0.0000062137).toFixed(4)
        inputYards.value = parseFloat(length * 1760).toFixed(4)
        inputInches.value = parseFloat(length * 63360).toFixed(4)
        inputFeet.value = parseFloat(length * 5280).toFixed(4)
    }
    if(source == 'inputYards') {
        inputKilometers.value = parseFloat(length / 1093.6).toFixed(4)
        inputMeters.value = parseFloat(length / 1.0936).toFixed(4)
        inputCentimeters.value = parseFloat(length / 0.010936).toFixed(4)
        inputMiles.value = parseFloat(length * 0.00056818).toFixed(4)
        inputInches.value = parseFloat(length * 36).toFixed(4)
        inputFeet.value = parseFloat(length * 3).toFixed(4)
    }
    if(source == 'inputInches') {
        inputKilometers.value = parseFloat(length / 39370).toFixed(4)
        inputMeters.value = parseFloat(length / 39.370).toFixed(4)
        inputCentimeters.value = parseFloat(length / 0.39370).toFixed(4)
        inputYards.value = parseFloat(length * 0.027778).toFixed(4)
        inputMiles.value = parseFloat(length * 0.000015783).toFixed(4)
        inputFeet.value = parseFloat(length * 0.083333).toFixed(4)
    }
    if(source == 'inputFeet') {
        inputKilometers.value = parseFloat(length / 3280.8).toFixed(4)
        inputMeters.value = parseFloat(length / 3.2808).toFixed(4)
        inputCentimeters.value = parseFloat(length / 0.032808).toFixed(4)
        inputYards.value = parseFloat(length * 0.33333).toFixed(4)
        inputInches.value = parseFloat(length * 12).toFixed(4)
        inputMiles.value = parseFloat(length * 0.00018939).toFixed(4)
    }
}