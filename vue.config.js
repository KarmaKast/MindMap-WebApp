process.env.VUE_APP_VERSION = require("./package.json").version;
process.env.VUE_APP_NAME = require("./package.json").productName;
process.env.VUE_APP_MODE = process.env.NODE_ENV;

const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin");

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/MindMap-WebApp/" : "/",
  configureWebpack: {
    devtool: process.env.NODE_ENV === "development" ? "source-map" : false,
    plugins: [
      new PrerenderSPAPlugin({
        // Required - The path to the webpack-outputted app to prerender.
        staticDir: path.join(__dirname, "dist"),
        // Required - Routes to render.
        routes: ["/"],
      }),
    ],
  },
  pwa: {
    display: "fullscreen",
    //manifestOptions: { CacheControl: "must-revalidate, max-age=600" },
  },
};
