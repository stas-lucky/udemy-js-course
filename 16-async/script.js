"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

const renderCountry = function (data, className = "") {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} mln. people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
};

// const getCountryData = function (country) {
//     const request = new XMLHttpRequest();
//     request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
//     request.send();

//     request.addEventListener("load", function () {
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);
//         renderCountry(data);
//     });
// };

const getJson = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    console.log(response);
    if (!response.ok) {
      throw new Error(`${errorMsg}. ${response.status}`);
    }
    return response.json();
  });
};

const getCountryData = function (country) {
  // const request = new XMLHttpRequest();
  // request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
  // request.send();

  // request.addEventListener("load", function () {
  //     const [data] = JSON.parse(this.responseText);
  //     console.log(data);
  //     renderCountry(data);
  // });

  // const request = fetch(`https://restcountries.eu/rest/v2/name/${country}`);
  // request
  //     .then((response) => {
  //         console.log(response);
  //         if (!response.ok) {
  //             throw new Error(`Country not found. ${response.status}`);
  //         }
  //         return response.json();
  //         //if ()
  //     })
  //     .then((data) => {
  //         renderCountry(data[0]);
  //         const neighbour = "111"; //data[0].borders[0];
  //         if (!neighbour) return;
  //         return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
  //     })

  //     .then((response) => {
  //         if (!response.ok) {
  //             throw new Error(`Country not found. ${response.status}`);
  //         }
  //         response.json();
  //     })
  //     .then((data) => renderCountry(data, "neighbour"))
  //     .catch((err) => {
  //         renderError(`Something went wrong. ${err.message}`);
  //     })
  //     .finally(() => {
  //         countriesContainer.style.opacity = 1;
  //     });

  getJson(
    `https://restcountries.eu/rest/v2/name/${country}`,
    "Country not found"
  )
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) throw new Error(`No neighbour found`);
      return getJson(
        `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
        "Country not found"
      );
    })
    .then((data) => renderCountry(data, "neighbour"))
    .catch((err) => {
      renderError(`${err.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

//getCountryData("australia");
// getCountryData("usa");
// getCountryData("germany");

// const request = fetch("https://restcountries.eu/rest/v2/name/portugal");
// console.log(request);

btn.addEventListener("click", function () {
  getCountryData("portugal");
});

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then((res) => {
//       if (!res.ok)
//         throw new Error(`Failed to load data! Status code ${res.status}`);
//       return res.json();
//     })
//     .then((data) => {
//       //console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);
//       return data;
//     })
//     .then((data) => {
//       return getJson(
//         `https://restcountries.eu/rest/v2/name/${data.country}`,
//         "Country not found"
//       );
//     })
//     .then((data) => {
//       console.log(data[0]);
//       renderCountry(data[0]);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// console.log("Test start");
// setTimeout(() => console.log("0 sec timer"), 0);
// Promise.resolve("Resolved promise").then((res) => console.log(res));
// console.log("Test end");

// Promise.resolve("Resolved promise 2").then((res) => {
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// });

// const lotteryPromise = new Promise(function (resolve, reject) {
//   if (Math.random() >= 0.5) {
//     resolve("Win!");
//   } else {
//     reject(new Error("Lost!"));
//   }
// });

// lotteryPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// const wait = function (miliseconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, miliseconds);
//   });
// };

// wait(2000)
//   .then(() => {
//     console.log("Waited for 2 sec");
//     return wait(1000);
//   })
//   .then(() => {
//     console.log("Waited for 1 sec");
//   });

// navigator.geolocation.getCurrentPosition(
//   (position) => {
//     console.log(position);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

// console.log("Getting position");

// const getLocation = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getLocation()
//   .then((coords) => console.log(coords))
//   .catch((err) => console.log(err));

// const whereAmI = function () {
//   getLocation()
//     .then((res) => {
//       const { latitude: lat, longitude: lng } = res.coords;
//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then((res) => {
//       if (!res.ok)
//         throw new Error(`Failed to load data! Status code ${res.status}`);
//       return res.json();
//     })
//     .then((data) => {
//       //console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);
//       return data;
//     })
//     .then((data) => {
//       return getJson(
//         `https://restcountries.eu/rest/v2/name/${data.country}`,
//         "Country not found"
//       );
//     })
//     .then((data) => {
//       console.log(data[0]);
//       renderCountry(data[0]);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// whereAmI();

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

const wait = function (miliseconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, miliseconds);
  });
};

const images = document.querySelector(".images");
const createImage = function (imgPath) {
  return new Promise(function (reslove, reject) {
    const img = document.createElement("img");
    img.setAttribute("src", imgPath);
    img.addEventListener("load", function (e) {
      images.appendChild(img);
      reslove(img);
    });
    img.addEventListener("error", function (e) {
      reject(new Error("Image not found!"));
    });
  });
};

// let curImg;
// createImage("img/img-1.jpg")
//   .then((img) => {
//     curImg = img;
//     return wait(2000);
//   })
//   .then(() => {
//     curImg.style.display = "none";
//     return createImage("img/img-2.jpg");
//   })
//   .then((img) => {
//     curImg = img;
//     return wait(2000);
//   })
//   .then(() => {
//     curImg.style.display = "none";
//     return createImage("img/img-3.jpg");
//   })
//   .then((img) => {
//     curImg = img;
//     return wait(2000);
//   })
//   .then(() => {
//     curImg.style.display = "none";
//     //return createImage("img/img-3.jpg");
//   });

//createImage("img/img-3.jpg");
//createImage("img/img-111.jpg").catch((err) => console.log(err));

// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then((res) => {
//       if (!res.ok)
//         throw new Error(`Failed to load data! Status code ${res.status}`);
//       return res.json();
//     })
//     .then((data) => {
//       //console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);
//       return data;
//     })
//     .then((data) => {
//       return getJson(
//         `https://restcountries.eu/rest/v2/name/${data.country}`,
//         "Country not found"
//       );
//     })
//     .then((data) => {
//       console.log(data[0]);
//       renderCountry(data[0]);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

const getPostition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    const position = await getPostition();
    const { latitude: lat, longitude: lng } = position.coords;
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) {
      throw new Error("Problem getting location data");
    }
    const dataGeo = await resGeo.json();

    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
    );
    if (!res.ok) {
      throw new Error("Problem getting country data");
    }
    //console.log(res);
    const data = await res.json();
    //console.log(data);
    renderCountry(data[0]);
    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(`Something went wrong: ${err.message}`);
    renderError(`${err.message}`);
    throw err;
  }
};

console.log("FIRST");
// whereAmI()
//   .then((city) => console.log(city))
//   .catch((err) => console.error(`${err.message}`))
//   .finally(() => console.log("THIRD"));

(async function () {
  try {
    const city = await whereAmI();
    console.log(city);
  } catch (error) {
    console.error(`${err.message}`);
  }

  console.log("THIRD");
})();
