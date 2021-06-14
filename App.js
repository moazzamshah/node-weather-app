const request = require('request');
const prompt = require('prompt-sync')();
const dotenv = require('dotenv').config();
const city = process.argv[2];

const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.API_KEY}`;
// if no argument given then
if (!city) {
  return console.log('Please Enter the name of the city');
}


request(url, (error, response, body) => {
  const data = JSON.parse(body);
  const temp = data.main.temp;
  console.log(`Its Currently ${temp} grade out.`);
});
