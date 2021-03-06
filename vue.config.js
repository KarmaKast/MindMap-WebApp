process.env.VUE_APP_VERSION = require("./package.json").version;
process.env.VUE_APP_NAME = require("./package.json").productName;
process.env.VUE_APP_MODE = process.env.NODE_ENV;

const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin");
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const CompressionPlugin = require("compression-webpack-plugin");
const zopfli = require("@gfx/zopfli");

console.log(__dirname);
//console.log(process.env.NODE_ENV);
//console.log(process.env);
//console.log(process.env.BASE_URL);
const githubSubDir = "/MindMap-WebApp";

module.exports = {
  publicPath: process.env.BUILD_MODE === "prerender" ? githubSubDir : "/",
  //outputDir: process.env.BUILD_MODE === "prerender" ? "./dist" : "./dist",
  outputDir: path.join(__dirname, "dist"),
  configureWebpack: {
    devtool: process.env.NODE_ENV === "development" ? "source-map" : false,
    output: {
      //chunkFilename: "js/[name].[chunkhash].js"
    },
  },
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      //config.plugins.delete("prefetch");
      config.plugin("CompressionPlugin").use(CompressionPlugin, [
        {
          compressionOptions: {
            numiterations: 15,
          },
          algorithm(input, compressionOptions, callback) {
            return zopfli.gzip(input, compressionOptions, callback);
          },
        },
      ]);
      config.plugin("PrerenderSPAPlugin").use(PrerenderSPAPlugin, [
        {
          staticDir: path.join(__dirname, "dist"),
          //indexPath: path.join(__dirname, "dist", "index.html"),
          outputDir: path.join(__dirname, "dist"),
          routes: ["/"],
          //routes: [process.env.NODE_ENV === "production" ? "/" : "/"],
          server:
            process.env.BUILD_MODE === "prerender"
              ? {
                  proxy: {
                    [githubSubDir]: {
                      target: "http://localhost:8000",
                      router: function (req) {
                        return "http://" + req.headers.host;
                      },
                      pathRewrite: {
                        [`^${githubSubDir}`]: "",
                      },
                    },
                  },
                }
              : {},
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
            headless: true, // commit this
            //headless: false, // don't commit this
          }),
        },
      ]);
    }
  },
  pwa: {
    display: "fullscreen",
    //manifestOptions: { CacheControl: "must-revalidate, max-age=600" },
    iconPaths: {},
    //manifestOptions: { start_url: "./MindMap-WebApp/" },
  },
};
