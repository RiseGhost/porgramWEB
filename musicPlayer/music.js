const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://deezerdevs-deezer.p.rapidapi.com/track/%7Bid%7D',
  headers: {
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
    'X-RapidAPI-Key': 'c3964790f7mshfa2a25e0441f6cep139428jsn978845572bfe'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});