module.exports = {
  configureWebpack: {
    devtool: process.env.NODE_ENV === "development" ? "source-map" : false,
  },
  pwa: {
    display: "fullscreen",
  },
};
