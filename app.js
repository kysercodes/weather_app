  
document.querySelector('button').addEventListener('click', getWeather);

function getWeather(e) {
  e.preventDefault();
    // get values from inputs
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
//   get weather data
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state},US&appid=b6e415c7b643db29601908bcad2bb4a5&units=imperial`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        // get temperature and round it to nearest number
      const currentTemp = Math.round(data.main.temp);
    //   get description of weather
      const weatherDescription = data.weather[0].description;

      const weatherImage = document.getElementById('weather-image');
    //   set image src
      weatherImage.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

      const descriptionParagraph = document.querySelector('.descript');
      descriptionParagraph.innerHTML = weatherDescription;
        // generate a temperature sentence
      const tempSentence = document.querySelector('.temp-sentence');
      tempSentence.innerText = `It is currently ${currentTemp} degrees Fahrenheit in ${city}, ${state}`;
    })
    .catch(err => {
      console.log(`error ${err}`);
    });
}


// challenge i had to figure out how to  not show an alt text on page load. i just set the image to a sun on page load