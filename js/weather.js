window.addEventListener("load", () => {
  let temperatureDescription = document.querySelector(
    ".temperature-description"
  );
  let temperatureDegree = document.querySelector(".temperature-degree");
  let locationTimezone = document.querySelector(".location-timezone");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=1d4c606a99c64ed7893d07549b4b1600`;
      fetch(api)
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          console.log(data);
          const { temp } = data.current;
          const {description} = data.current.weather[0]
          const { timezone }= data
          temperatureDegree.textContent = `${parseInt(temp-273.15)}`;
          locationTimezone.textContent = timezone;
          temperatureDescription.textContent = description
        });
    });
  }
  
});
