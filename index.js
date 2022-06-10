import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const router = new Navigo("/");

function render(state = store.Home) {
  console.log(state);
  document.querySelector("#root").innerHTML = `
  ${Nav(store.Links)}
  ${Header(state)}
  ${Main(state)}
  ${Footer()}
`;
  router.updatePageLinks();
}

router.hooks({
  before: (done, params) => {
    let view = "Home";
    if (params && params.data && params.data.view) {
      view = capitalize(params.data.view);
    }
    console.log(view);
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
    } else if (view === "Filmgrade") {
      axios
        .get(`${process.env.FILMGRADES_API_URL}`)
        .then(response => {
          console.log(response);
          store.Filmgrade.filmgrade = response.data;
          console.log(store.Filmgrade.filmgrade);
          done();
        })
        .catch(error => {
          console.log("Filmgrades not loading", error);
          done();
        });
    } else if (view === "Fscore") {
      axios
        .get(`${process.env.FSCORES_API_URL}`)
        .then(response => {
          store.Fscore.fscores = response.data;
          done();
        })
        .catch(error => {
          console.log("FScores not loading", error);
          done();
        });
    } else if (view === "Metrics") {
      axios
        .get(`${process.env.METRICS_API_URL}`)
        .then(response => {
          store.Metrics.metrics = response.data;
          done();
        })
        .catch(error => {
          console.log("Metrics not loading", error);
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
      console.log(view);
      render(store[view]);
    }
  })
  .resolve();
