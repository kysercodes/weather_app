  
document.querySelector('button').addEventListener('click',getWeather)

function getWeather(e) {
    // prevent the page from refreshing
    e.preventDefault()
    // get the values from the inputs
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
  

    // get the weather data
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state},US&appid=b6e415c7b643db29601908bcad2bb4a5&units=imperial`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data); 
        // get the temperature  and weather description from the data object
        const currentTemp = Math.round(data.main.temp);
        const weatherDescription = data.weather[0].description;
        
        // get the pic representing the  weather conditons
        const weatherPic = document.querySelector('img');
        weatherPic.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        
        // add the description to the paragraph
        const descriptionParagraph = document.querySelector('.descript')
        descriptionParagraph.innerHTML = weatherDescription;

        // add the sentence to the paragraph
        const tempSentence = document.querySelector('.temp-sentence');
        tempSentence.innerText = `It is currenly ${currentTemp} degrees Farenheit in ${city}, ${state}`


        //  append elements to the div
        const container = document.querySelector('.container');
        container.appendChild(weatherPic);
        container.appendChild(descriptionParagraph);
        container.appendChild(tempSentence);

    
    })
    .catch(err => {
        console.log(`error ${err}`);
    });
}

