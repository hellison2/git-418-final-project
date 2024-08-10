// STRICT MODE
"use strict";



// DARK MODE
const btn = document.querySelector(".lighting-toggle");

const currentTheme = localStorage.getItem("theme"); // CHECK LOCAL STORAGE THEN STORES IN CURRENT THEME
if (currentTheme == "dark") {
  document.body.classList.add("dark-mode");
  btn.classList.add("active"); 
}

btn.addEventListener("click", function () { 
  document.body.classList.toggle("dark-mode"); // WHEN BUTTON CLICKED ACTIVE, DARK MODE TURNS ON

  let theme = "light";
  if (document.body.classList.contains("dark-mode")) {
    theme = "dark";
    btn.classList.add("active");
  } // UPDATES BUTTON DISPLAY SLIDER
  else {
    btn.classList.remove("active");
  } // UPDATES BUTTON DISPLAY SLIDER
  localStorage.setItem("theme", theme); // STORES IN LOCAL STORAGE
});



// SLIDESHOW
let slideIndex = 0; // STORING THE CURRENT SLIDE INDEX IN A VARIABLE
const slides = document.querySelectorAll('.mySlides'); 

function showSlides(n) {
    if (n >= slides.length) slideIndex = 0; // HELPS RETURNS TO FIRST SLIDE 
    if (n < 0) slideIndex = slides.length - 1;
    
    slides.forEach((slide, index) => { 
        slide.style.display = (index === slideIndex) ? 'block' : 'none'; // DISPLAYS CORRECT & CURRENT SLIDE
    });

    // $("#slider").slider("value", slideIndex); 
    // I'VE COMMENTED THIS CODE OUT BECAUSE IT'S NOT WORKING AS IT SHOULD
    // AFTER ADDING THE PROPER JQUERY LINKS LISTED ON https://jqueryui.com/slider/ FOR SOME REASON THEY DISABLE MY ACCORDION SECTION. 
    // I'M UNSURE WHY, AND I HAVE RAN OUT OF TIME TO TROUBLESHOOT THE ISSUE ANY LONGER
    // THESE COMMENTS WILL BE COPY & PASTED IN ALL RELEVANT AREAS
}

function nextSlide() { // TOGGLING BETWEEN SLIDES
    slideIndex++;
    showSlides(slideIndex);
}

function prevSlide() { // TOGGLING BETWEEN SLIDES
    slideIndex--;
    showSlides(slideIndex);
}

showSlides(slideIndex); // SLIDESHOW LOADS PROPERLY ON PAGE LOAD

//$(function() {
//  $("#slider").slider();
//});
// I'VE COMMENTED THIS CODE OUT BECAUSE IT'S NOT WORKING AS IT SHOULD
// AFTER ADDING THE PROPER JQUERY LINKS LISTED ON https://jqueryui.com/slider/ FOR SOME REASON THEY DISABLE MY ACCORDION SECTION. 
// I'M UNSURE WHY, AND I HAVE RAN OUT OF TIME TO TROUBLESHOOT THE ISSUE ANY LONGER
// THESE COMMENTS WILL BE COPY & PASTED IN ALL RELEVANT AREAS





// WEATHER 
document.getElementById('fetchWeatherBtn').addEventListener('click', function() { // CLICK THE BUTTON TO GET FORECAST
  const city = document.getElementById('cityInput').value; // ALLOWS USERS TO INPUT THE CITY
  const state = 'US-CO'; // RESTRICTS LOCATION TO THE STATE OF COLORADO
  const country = 'US'; // RESTRICTS LOCATION TO US
  const apiKey = '03687a06685fd30314e2f8f81d68b159'; // NEEDED TO ACCESS SITE & DATA
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=${apiKey}&units=imperial`; // SPECIFIC URL FOR RETRIEVING THE EXACT NEEDED INFORMATION

  fetch(url) // GETS FORECAST FROM SITE
      .then(response => response.json())
      .then(data => {
          if (data.cod === 200) {
              const forecast = `
                  <h3>Current Conditions in ${data.name}</h3>
                  <p>Weather: ${data.weather[0].description}</p>
                  <p>Temperature: ${data.main.temp}°F</p>
                  <p>Humidity: ${data.main.humidity}%</p>
              `; // RETRIEVES CURRENT CONDITIONS AND PRINTS TO SCREEN
              document.getElementById('weatherResult').innerHTML = forecast;
          } else {
              document.getElementById('weatherResult').innerHTML = `<p>${data.message}</p>`;
          }
      })
      .catch(error => {
          console.error('Error fetching weather data:', error);
          document.getElementById('weatherResult').innerHTML = `<p>Failed to fetch weather data.</p>`;
      }); // HANDLES ERRORS & LETS THE USER KNOW ERROR OCCURRED
});



// ACCORDION
$( function() {
  $( "#accordion" ).accordion( {
    collapsible: true // ACCORDION ITEMS CAN ALL BE CLOSED AT THE SAME TIME
  });
});