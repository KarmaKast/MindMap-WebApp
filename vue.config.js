process.env.VUE_APP_VERSION = require("./package.json").version;
process.env.VUE_APP_NAME = require("./package.json").productName;
process.env.VUE_APP_MODE = process.env.NODE_ENV;

const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin");
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

const CopyPlugin = require("copy-webpack-plugin");

const productionPlugins = [
  new PrerenderSPAPlugin({
    staticDir: path.join(__dirname, "prerender"),
    indexPath: path.join(
      __dirname,
      "prerender",
      "MindMap-WebApp",
      "index.html"
    ),
    outputDir: path.join(__dirname, "prerender/MindMap-WebApp"),
    routes: ["/"],
    //routes: [process.env.NODE_ENV === "production" ? "/" : "/"],
    renderer: new Renderer({
      // We need to inject a value so we're able to
      // detect if the page is currently pre-rendered.
      injectProperty: "__PRERENDER_INJECTED",
      inject: {
        prerendered: true,
      },
      //renderAfterElementExists: ".MindMapModule",
      renderAfterDocumentEvent: "app-rendered",
      //renderAfterTime: 5000,
      headless: true,
    }),
  }),
  new CopyPlugin(
    [
      {
        from: path.join(__dirname, "prerender", "MindMap-WebApp"),
        to: path.join(__dirname, "dist"),
        toType: "dir",
      },
    ],
    {}
  ),
];

console.log(__dirname);
//console.log(process.env.NODE_ENV);
//console.log(process.env);
//console.log(process.env.BASE_URL);

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/MindMap-WebApp/" : "/",
  //outputDir: process.env.BUILD_MODE === "prerender" ? "./dist" : "./dist",
  outputDir:
    process.env.BUILD_MODE === "prerender"
      ? "./prerender/MindMap-WebApp/"
      : "./dist",
  //publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  configureWebpack: {
    devtool: process.env.NODE_ENV === "development" ? "source-map" : false,
    plugins: process.env.BUILD_MODE === "prerender" ? productionPlugins : [],
  },
  pwa: {
    display: "fullscreen",
    //manifestOptions: { CacheControl: "must-revalidate, max-age=600" },
  },
};
