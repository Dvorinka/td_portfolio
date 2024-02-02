'use strict';

const api_key = '054582e9ee66adcbe911e0008aa482a8';
const imageBaseURL = 'https://image.tmdb.org/t/p/';

const fetchDataFromServer = function (url, callback, optionalParam) {
  fetch(url)
    .then(response => response.json())
    .then(data => callback(data, optionalParam));
}

export { imageBaseURL, api_key, fetchDataFromServer };