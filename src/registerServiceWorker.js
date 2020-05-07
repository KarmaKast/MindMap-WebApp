/* eslint-disable no-console */

import { register } from "register-service-worker";

const customRegistor = function () {
  if (process.env.VUE_APP_MODE === "production") {
    register(`${process.env.BASE_URL}service-worker.js`, {
      //register(`https://karmakast.github.io/MindMap-WebApp/service-worker.js`, {
      ready() {
        console.log(
          "App is being served from cache by a service worker.\n" +
            "For more details, visit https://goo.gl/AFskqB"
        );
      },
      registered() {
        console.log("Service worker has been registered.");
      },
      cached() {
        console.log("Content has been cached for offline use.");
      },
      updatefound() {
        console.log("New content is downloading.");
      },
      updated() {
        console.log("New content is available; please refresh.");
      },
      offline() {
        console.log(
          "No internet connection found. App is running in offline mode."
        );
      },
      error(error) {
        console.error("Error during service worker registration:", error);
      },
    });
  } else if (process.env.VUE_APP_MODE === "development")
    console.log("skipping service worker registration for development");
};

export { customRegistor };
