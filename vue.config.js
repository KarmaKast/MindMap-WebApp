process.env.VUE_APP_VERSION = require("./package.json").version;
process.env.VUE_APP_NAME = require("./package.json").productName;
process.env.VUE_APP_MODE = process.env.NODE_ENV;

const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin");
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

const productionPlugins = [
  new PrerenderSPAPlugin({
    staticDir: path.join(__dirname, "dist"),
    routes: ["/"],
    renderer: new Renderer({
      // We need to inject a value so we're able to
      // detect if the page is currently pre-rendered.
      injectProperty: "__PRERENDER_INJECTED",
      inject: {
        prerendered: true,
      },
      postProcess(renderedRoute) {
        // Ignore any redirects.
        renderedRoute.route = renderedRoute.originalRoute;

        return renderedRoute;
      },
      // Our view component is rendered after the API
      // request has fetched all the necessary data,
      // so we create a snapshot of the page after the
      // `data-view` attribute exists in the DOM.
      renderAfterElementExists: "#app",
      //renderAfterDocumentEvent: "app.rendered",
    }),
  }),
];

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/MindMap-WebApp/" : "/",
  configureWebpack: {
    devtool: process.env.NODE_ENV === "development" ? "source-map" : false,
    plugins: process.env.NODE_ENV === "production" ? productionPlugins : [],
  },
  pwa: {
    display: "fullscreen",
    //manifestOptions: { CacheControl: "must-revalidate, max-age=600" },
  },
};
