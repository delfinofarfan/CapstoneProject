import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
  ${Nav(store.Links)}
  ${Header(state)}
  ${Main(state)}
  ${Footer()}
`;
  router.updatePageLinks();
}

// if (state.view === "Filmgrade") {
//   const requestData = {
//     player: name.value,
//     filmgrade: grade.value
//   };

//   axios
//     .post(`${process.env.FILMGRADES_API_URL}`, requestData)
//     .then(response => {
//       console.log(response.data);
//       store.Filmgrade.filmgrades.push(response.data);
//       router.navigate("/Filmgrade");
//     })
//     .catch(error => {
//       console.log("It puked", error);
//     });
// }
// if (state.view === "Fscore") {
//   const requestData = {
//     player: name.value,
//     fscore: fscore.value
//   };

//   axios
//     .post(`${process.env.FSCORES_API_URL}`, requestData)
//     .then(response => {
//       console.log(response.data);
//       store.Fscore.fscores.push(response.data);
//       router.navigate("/Fscore");
//     })
//     .catch(error => {
//       console.log("It puked", error);
//     });
// }
// if (state.view === "Metrics") {
//   const requestData = {
//     player: player.value,
//     height: height.value,
//     weight: weight.value,
//     age: age.value,
//     classification: classification.value,
//     fourtytime: fourtytime.value,
//     vertical: vertical.value,
//     shuttle: shuttle.value
//   };

//   axios
//     .post(`${process.env.METRICS_API_URL}`, requestData)
//     .then(response => {
//       console.log(response.data);
//       store.Metrics.metrics.push(response.data);
//       router.navigate("/Metric");
//     })
//     .catch(error => {
//       console.log("It puked", error);
//     });
// }

router.hooks({
  before: (done, params) => {
    let view = "Home";
    if (params && params.data && params.data.view) {
      view = capitalize(params.data.view);
    }

    if (view === "Home") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=kansas%20city`
        )
        .then(response => {
          const kelvinToFahrenheit = kelvinTemp =>
            Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

          store.Home.weather = {};
          store.Home.weather.city = response.data.name;
          store.Home.weather.temp = kelvinToFahrenheit(response.data.main.temp);
          store.Home.weather.feelsLike = kelvinToFahrenheit(
            response.data.main.feels_like
          );
          store.Home.weather.description = response.data.weather[0].main;
          done();
        })
        .catch(err => {
          console.log(err);
          done();
        });
    } else {
      done();
    }
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      render(store[view]);
    }
  })
  .resolve();
