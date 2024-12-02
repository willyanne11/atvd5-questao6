let tempF = parseFloat(prompt('Digite a sua temperatura em F: '));

let conversao = (tempF - 32) * 5 / 9;
let tempCelsius = conversao;

alert('A sua temperatura de ' + tempF + 'F' + ' para celsius é de: ' + tempCelsius + '°C');
