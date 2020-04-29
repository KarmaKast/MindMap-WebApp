process.env.VUE_APP_VERSION = require("./package.json").version;
process.env.VUE_APP_NAME = require("./package.json").productName;
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/MindMap-WebApp/" : "/",
  configureWebpack: {
    devtool: process.env.NODE_ENV === "development" ? "source-map" : false,
  },
  pwa: {
    display: "fullscreen",
    //manifestOptions: { CacheControl: "must-revalidate, max-age=600" },
  },
};
