//Temp converter

function convertToCelsius(fTemp) {
    return Math.round((fTemp - 32) * (5/9));
}

function createMessage(fTemp, cTemp) {
    if(fTemp >= 90) {
        return `The Fahrenheit temperature ${fTemp} is equivalent to ${cTemp}. You should wear light clothes.`;
    } else if (fTemp >= 80) {
        return `The Fahrenheit temperature ${fTemp} is equivalent to ${cTemp}. You should wear medium clothes.`;
    } else if (fTemp >= 70) {
        return `The Fahrenheit temperature ${fTemp} is equivalent to ${cTemp}. You should wear some layers.`;
    } else {
        return `The Fahrenheit temperature ${fTemp} is equivalent to ${cTemp}. You should wear warm clothes.`;
    }
}

function rand(limit) {
    return Math.round(Math.random() * limit);
}

let input = prompt('Enter your Fahrenheit temperature: ');
alert(createMessage(input, convertToCelsius(input)));
console.log(createMessage(input, convertToCelsius(input)));
