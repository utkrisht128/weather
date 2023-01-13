// api.openweathermap.org/data/2.5/forecast?lat=28.704&lon=77.1025&appid=e8db7504aa384624ef597dd163feb82f
// api.openweathermap.org/data/2.5/forecast?q={city name}&appid=e8db7504aa384624ef597dd163feb82f
// http://api.timezonedb.com/v2.1/get-time-zone?key=W2HTV2MU88Y6&format=xml&by=position&lat=${lat}&lng=${long}
const tempicon = document.querySelector(".temp-icon");
const tempval = document.querySelector(".tempval");
const wspeed = document.querySelector(".wspeed");
const humid = document.querySelector(".humid");
const date = document.querySelector(".date");
const time = document.querySelector(".time");
const body = document.querySelector(".body");
const day1 = document.querySelector(".day1");
const day2 = document.querySelector(".day2");
const day3 = document.querySelector(".day3");
const day4 = document.querySelector(".day4");
const day5 = document.querySelector(".day5");
const day6 = document.querySelector(".day6");
const day7 = document.querySelector(".day7");
const day1img = document.querySelector(".day1-img");
const day2img = document.querySelector(".day2-img");
const day3img = document.querySelector(".day3-img");
const day4img = document.querySelector(".day4-img");
const day5img = document.querySelector(".day5-img");
const day6img = document.querySelector(".day6-img");
const day7img = document.querySelector(".day7-img");
const loc = document.querySelector(".loc");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const key = "e8db7504aa384624ef597dd163feb82f";
const proxy = "https://cors-anywhere.herokuapp.com/";
searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(searchInput.value);
  getCity(searchInput.value);
  searchInput.value = "";
});
function getCity(city) {
  let realTime;
  let realDate;
  let timezoneOffset;
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}`;
  fetch(url)
    .then((response) => {
      let data = response.json();
      return data;
    })
    .then((data) => {
      console.log(data);
      fetch('./offset.json')
        .then((res)=>{
          let off=res.json();
          return off;
        }).then((offsets)=>{
          timezoneOffset=offsets.countries[0].timezone_offset;
          console.log(timezoneOffset);
        })
      let today = new Date();
      console.log(today);
      const arr = [data];
      const name=arr[0].city.name;
      var realtime;
      var realdate;
      function calcTime(city, offset) {
        var d = new Date();
        var utc = d.getTime();
        var nd = new Date(utc + (3600000*offset));
        var t= nd.toLocaleString();
        realtime=t.slice(10);
        realdate=t.slice(0,8);
        console.log(t);
        console.log(realtime);
        console.log(realdate);

      }
      calcTime(name,timezoneOffset);
      const { temp } = arr[0].list[0].main;
      const temp1 = arr[0].list[1].main.temp;
      const temp2 = arr[0].list[2].main.temp;
      const temp3 = arr[0].list[3].main.temp;
      const temp4 = arr[0].list[4].main.temp;
      const temp5 = arr[0].list[5].main.temp;
      const temp6 = arr[0].list[6].main.temp;
      const temp7 = arr[0].list[7].main.temp;
      const { speed } = arr[0].list[0].wind;
      const speed1 = arr[0].list[1].wind.speed;
      const speed2 = arr[0].list[2].wind.speed;
      const speed3 = arr[0].list[3].wind.speed;
      const speed4 = arr[0].list[4].wind.speed;
      const speed5 = arr[0].list[5].wind.speed;
      const speed6 = arr[0].list[6].wind.speed;
      const speed7 = arr[0].list[7].wind.speed;
      const { humidity } = arr[0].list[0].main;
      const humidity1 = arr[0].list[1].main.humidity;
      const humidity2 = arr[0].list[2].main.humidity;
      const humidity3 = arr[0].list[3].main.humidity;
      const humidity4 = arr[0].list[4].main.humidity;
      const humidity5 = arr[0].list[5].main.humidity;
      const humidity6 = arr[0].list[6].main.humidity;
      const humidity7 = arr[0].list[7].main.humidity;
      const { id } = arr[0].list[0].weather[0];
      const id1 = arr[0].list[1].weather[0].id;
      const id2 = arr[0].list[2].weather[0].id;
      const id3 = arr[0].list[3].weather[0].id;
      const id4 = arr[0].list[4].weather[0].id;
      const id5 = arr[0].list[5].weather[0].id;
      const id6 = arr[0].list[6].weather[0].id;
      const id7 = arr[0].list[7].weather[0].id;
      tempval.textContent = Math.round(temp - 273);
      day1.textContent = Math.round(temp1 - 273);
      day2.textContent = Math.round(temp2 - 273);
      day3.textContent = Math.round(temp3 - 273);
      day4.textContent = Math.round(temp4 - 273);
      day5.textContent = Math.round(temp5 - 273);
      day6.textContent = Math.round(temp6 - 273);
      day7.textContent = Math.round(temp7 - 273);
      let a = " " + city;
      let b = a.length;
      let c = "";
      for (let i = 0; i < b; i++) {
        if (a.charAt(i) == " ") {
          c = c + a.charAt(i + 1).toUpperCase();
        } else if (a.charAt(i) != " ") {
          c = c + a.charAt(i + 1);
        }
      }
      loc.textContent = c;
      wspeed.textContent = speed;
      humid.textContent = humidity;
      date.textContent =realdate;
        // today.getDate() +
        // "/" +
        // (today.getMonth() + 1) +
        // "/" +
        // today.getFullYear();
      time.textContent =realtime;
        // today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      console.log(id1);
      console.log(temp1);
      if (id < 300 && id >= 200) {
        body.style.backgroundColor = "rgb(49, 50, 52)";
        tempicon.src = "../static/storm.png";
      }
      if (id1 < 300 && id1 >= 200) {
        day1img.src = "../static/storm.png";
      }
      if (id2 < 300 && id2 >= 200) {
        day2img.src = "../static/storm.png";
      }
      if (id3 < 300 && id3 >= 200) {
        day3img.src = "../static/storm.png";
      }
      if (id4 < 300 && id4 >= 200) {
        day4img.src = "../static/storm.png";
      }
      if (id5 < 300 && id5 >= 200) {
        day5img.src = "../static/storm.png";
      }
      if (id6 < 300 && id6 >= 200) {
        day6img.src = "../static/storm.png";
      }
      if (id7 < 300 && id7 >= 200) {
        day7img.src = "../static/storm.png";
      }
      if (id < 400 && id >= 300) {
        body.style.backgroundColor = "rgb(8, 103, 233)";
        tempicon.src = "../static/cloudy-day.png";
      }
      if (id1 < 400 && id1 >= 300) {
        day1img.src = "../static/cloudy-day.png";
      }
      if (id2 < 400 && id2 >= 300) {
        day2img.src = "../static/cloudy-day.png";
      }
      if (id3 < 400 && id3 >= 300) {
        day3img.src = "../static/cloudy-day.png";
      }
      if (id4 < 400 && id4 >= 300) {
        day4img.src = "../static/cloudy-day.png";
      }
      if (id5 < 400 && id5 >= 300) {
        day5img.src = "../static/cloudy-day.png";
      }
      if (id6 < 400 && id6 >= 300) {
        day6img.src = "../static/cloudy-day.png";
      }
      if (id7 < 400 && id7 >= 300) {
        day7img.src = "../static/cloudy-day.png";
      }
      if (id < 500 && id >= 400) {
        body.style.backgroundColor = "rgb(132, 136, 132)";
        tempicon.src = "../static/rainy-day.png";
      }
      if (id1 < 500 && id1 >= 400) {
        day1img.src = "../static/rainy-day.png";
      }
      if (id2 < 500 && id2 >= 400) {
        day2img.src = "../static/rainy-day.png";
      }
      if (id3 < 500 && id3 >= 400) {
        day3img.src = "../static/rainy-day.png";
      }
      if (id4 < 500 && id4 >= 400) {
        day4img.src = "../static/rainy-day.png";
      }
      if (id5 < 500 && id5 >= 400) {
        day5img.src = "../static/rainy-day.png";
      }
      if (id6 < 500 && id6 >= 400) {
        day6img.src = "../static/rainy-day.png";
      }
      if (id7 < 500 && id7 >= 400) {
        day7img.src = "../static/rainy-day.png";
      }
      if (id < 600 && id >= 500) {
        body.style.backgroundColor = "rgb(132, 136, 132)";
        tempicon.src = "../static/rainy-day.png";
      }
      if (id1 < 600 && id1 >= 500) {
        day1img.src = "../static/rainy-day.png";
      }
      if (id2 < 600 && id2 >= 500) {
        day2img.src = "../static/rainy-day.png";
      }
      if (id3 < 600 && id3 >= 500) {
        day3img.src = "../static/rainy-day.png";
      }
      if (id4 < 600 && id4 >= 500) {
        day4img.src = "../static/rainy-day.png";
      }
      if (id5 < 600 && id5 >= 500) {
        day5img.src = "../static/rainy-day.png";
      }
      if (id6 < 600 && id6 >= 500) {
        day6img.src = "../static/rainy-day.png";
      }
      if (id7 < 600 && id7 >= 500) {
        day7img.src = "../static/rainy-day.png";
      }
      if (id < 700 && id >= 600) {
        body.style.backgroundColor = "rgb(149, 185, 234)";
        tempicon.src = "../static/sun(1).png";
      }
      if (id1 < 700 && id1 >= 600) {
        day1img.src = "../static/sun(1).png";
      }
      if (id2 < 700 && id2 >= 600) {
        day2img.src = "../static/sun(1).png";
      }
      if (id3 < 700 && id3 >= 600) {
        day3img.src = "../static/sun(1).png";
      }
      if (id4 < 700 && id4 >= 600) {
        day4img.src = "../static/sun(1).png";
      }
      if (id5 < 700 && id5 >= 600) {
        day5img.src = "../static/sun(1).png";
      }
      if (id6 < 700 && id6 >= 600) {
        day6img.src = "../static/sun(1).png";
      }
      if (id7 < 700 && id7 >= 600) {
        day7img.src = "../static/sun(1).png";
      }
      if (id < 800 && id >= 700) {
        body.style.backgroundColor = "skyblue";
        tempicon.src = "../static/sun.png";
      }
      if (id1 < 800 && id1 >= 700) {
        day1img.src = "../static/sun.png";
      }
      if (id2 < 800 && id2 >= 700) {
        day2img.src = "../static/sun.png";
      }
      if (id3 < 800 && id3 >= 700) {
        day3img.src = "../static/sun.png";
      }
      if (id4 < 800 && id4 >= 700) {
        day4img.src = "../static/sun.png";
      }
      if (id5 < 800 && id5 >= 700) {
        day5img.src = "../static/sun.png";
      }
      if (id6 < 800 && id6 >= 700) {
        day6img.src = "../static/sun.png";
      }
      if (id7 < 800 && id7 >= 700) {
        day7img.src = "../static/sun.png";
      }
      if (id > 800) {
        body.style.backgroundColor = "skyblue";
        tempicon.src = "../static/sun.png";
      }
    });
}
let lat;
let long;
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((position) => {
    lat = position.coords.latitude;
    long = position.coords.longitude;
    getData();
  });
}

function getData() {
  let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${key}`;
  fetch(url)
    .then((response) => {
      let data = response.json();
      return data;
    })
    .then((data) => {
      console.log(data);
      let today = new Date();
      console.log(today);
      const arr = [data];
      console.log(arr[0].list[0].main.temp);
      const { temp } = arr[0].list[0].main;
      const temp1 = arr[0].list[1].main.temp;
      const temp2 = arr[0].list[2].main.temp;
      const temp3 = arr[0].list[3].main.temp;
      const temp4 = arr[0].list[4].main.temp;
      const temp5 = arr[0].list[5].main.temp;
      const temp6 = arr[0].list[6].main.temp;
      const temp7 = arr[0].list[7].main.temp;
      const { speed } = arr[0].list[0].wind;
      const speed1 = arr[0].list[1].wind.speed;
      const speed2 = arr[0].list[2].wind.speed;
      const speed3 = arr[0].list[3].wind.speed;
      const speed4 = arr[0].list[4].wind.speed;
      const speed5 = arr[0].list[5].wind.speed;
      const speed6 = arr[0].list[6].wind.speed;
      const speed7 = arr[0].list[7].wind.speed;
      const { humidity } = arr[0].list[0].main;
      const humidity1 = arr[0].list[1].main.humidity;
      const humidity2 = arr[0].list[2].main.humidity;
      const humidity3 = arr[0].list[3].main.humidity;
      const humidity4 = arr[0].list[4].main.humidity;
      const humidity5 = arr[0].list[5].main.humidity;
      const humidity6 = arr[0].list[6].main.humidity;
      const humidity7 = arr[0].list[7].main.humidity;
      const { id } = arr[0].list[0].weather[0];
      const id1 = arr[0].list[1].weather[0].id;
      const id2 = arr[0].list[2].weather[0].id;
      const id3 = arr[0].list[3].weather[0].id;
      const id4 = arr[0].list[4].weather[0].id;
      const id5 = arr[0].list[5].weather[0].id;
      const id6 = arr[0].list[6].weather[0].id;
      const id7 = arr[0].list[7].weather[0].id;
      tempval.textContent = Math.round(temp - 273);
      day1.textContent = Math.round(temp1 - 273);
      day2.textContent = Math.round(temp2 - 273);
      day3.textContent = Math.round(temp3 - 273);
      day4.textContent = Math.round(temp4 - 273);
      day5.textContent = Math.round(temp5 - 273);
      day6.textContent = Math.round(temp6 - 273);
      day7.textContent = Math.round(temp7 - 273);
      wspeed.textContent = speed;
      humid.textContent = humidity;
      date.textContent =
        today.getDate() +
        "/" +
        (today.getMonth() + 1) +
        "/" +
        today.getFullYear();
      time.textContent =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      console.log(id1);
      console.log(temp1);
      if (id < 300 && id >= 200) {
        body.style.backgroundColor = "rgb(49, 50, 52)";
        tempicon.src = "../static/storm.png";
      }
      if (id1 < 300 && id1 >= 200) {
        day1img.src = "../static/storm.png";
      }
      if (id2 < 300 && id2 >= 200) {
        day2img.src = "../static/storm.png";
      }
      if (id3 < 300 && id3 >= 200) {
        day3img.src = "../static/storm.png";
      }
      if (id4 < 300 && id4 >= 200) {
        day4img.src = "../static/storm.png";
      }
      if (id5 < 300 && id5 >= 200) {
        day5img.src = "../static/storm.png";
      }
      if (id6 < 300 && id6 >= 200) {
        day6img.src = "../static/storm.png";
      }
      if (id7 < 300 && id7 >= 200) {
        day7img.src = "../static/storm.png";
      }
      if (id < 400 && id >= 300) {
        body.style.backgroundColor = "rgb(8, 103, 233)";
        tempicon.src = "../static/cloudy-day.png";
      }
      if (id1 < 400 && id1 >= 300) {
        day1img.src = "../static/cloudy-day.png";
      }
      if (id2 < 400 && id2 >= 300) {
        day2img.src = "../static/cloudy-day.png";
      }
      if (id3 < 400 && id3 >= 300) {
        day3img.src = "../static/cloudy-day.png";
      }
      if (id4 < 400 && id4 >= 300) {
        day4img.src = "../static/cloudy-day.png";
      }
      if (id5 < 400 && id5 >= 300) {
        day5img.src = "../static/cloudy-day.png";
      }
      if (id6 < 400 && id6 >= 300) {
        day6img.src = "../static/cloudy-day.png";
      }
      if (id7 < 400 && id7 >= 300) {
        day7img.src = "../static/cloudy-day.png";
      }
      if (id < 500 && id >= 400) {
        body.style.backgroundColor = "rgb(132, 136, 132)";
        tempicon.src = "../static/rainy-day.png";
      }
      if (id1 < 500 && id1 >= 400) {
        day1img.src = "../static/rainy-day.png";
      }
      if (id2 < 500 && id2 >= 400) {
        day2img.src = "../static/rainy-day.png";
      }
      if (id3 < 500 && id3 >= 400) {
        day3img.src = "../static/rainy-day.png";
      }
      if (id4 < 500 && id4 >= 400) {
        day4img.src = "../static/rainy-day.png";
      }
      if (id5 < 500 && id5 >= 400) {
        day5img.src = "../static/rainy-day.png";
      }
      if (id6 < 500 && id6 >= 400) {
        day6img.src = "../static/rainy-day.png";
      }
      if (id7 < 500 && id7 >= 400) {
        day7img.src = "../static/rainy-day.png";
      }
      if (id < 600 && id >= 500) {
        body.style.backgroundColor = "rgb(132, 136, 132)";
        tempicon.src = "../static/rainy-day.png";
      }
      if (id1 < 600 && id1 >= 500) {
        day1img.src = "../static/rainy-day.png";
      }
      if (id2 < 600 && id2 >= 500) {
        day2img.src = "../static/rainy-day.png";
      }
      if (id3 < 600 && id3 >= 500) {
        day3img.src = "../static/rainy-day.png";
      }
      if (id4 < 600 && id4 >= 500) {
        day4img.src = "../static/rainy-day.png";
      }
      if (id5 < 600 && id5 >= 500) {
        day5img.src = "../static/rainy-day.png";
      }
      if (id6 < 600 && id6 >= 500) {
        day6img.src = "../static/rainy-day.png";
      }
      if (id7 < 600 && id7 >= 500) {
        day7img.src = "../static/rainy-day.png";
      }
      if (id < 700 && id >= 600) {
        body.style.backgroundColor = "rgb(149, 185, 234)";
        tempicon.src = "../static/sun(1).png";
      }
      if (id1 < 700 && id1 >= 600) {
        day1img.src = "../static/sun(1).png";
      }
      if (id2 < 700 && id2 >= 600) {
        day2img.src = "../static/sun(1).png";
      }
      if (id3 < 700 && id3 >= 600) {
        day3img.src = "../static/sun(1).png";
      }
      if (id4 < 700 && id4 >= 600) {
        day4img.src = "../static/sun(1).png";
      }
      if (id5 < 700 && id5 >= 600) {
        day5img.src = "../static/sun(1).png";
      }
      if (id6 < 700 && id6 >= 600) {
        day6img.src = "../static/sun(1).png";
      }
      if (id7 < 700 && id7 >= 600) {
        day7img.src = "../static/sun(1).png";
      }
      if (id < 800 && id >= 700) {
        body.style.backgroundColor = "skyblue";
        tempicon.src = "../static/sun.png";
      }
      if (id1 < 800 && id1 >= 700) {
        day1img.src = "../static/sun.png";
      }
      if (id2 < 800 && id2 >= 700) {
        day2img.src = "../static/sun.png";
      }
      if (id3 < 800 && id3 >= 700) {
        day3img.src = "../static/sun.png";
      }
      if (id4 < 800 && id4 >= 700) {
        day4img.src = "../static/sun.png";
      }
      if (id5 < 800 && id5 >= 700) {
        day5img.src = "../static/sun.png";
      }
      if (id6 < 800 && id6 >= 700) {
        day6img.src = "../static/sun.png";
      }
      if (id7 < 800 && id7 >= 700) {
        day7img.src = "../static/sun.png";
      }
    });
}