module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/MindMap-WebApp/" : "/",
  configureWebpack: {
    devtool: process.env.NODE_ENV === "development" ? "source-map" : false,
  },
  pwa: {
    display: "fullscreen",
  },
};
