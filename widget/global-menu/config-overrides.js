// config-overrides.js
module.exports = {
  webpack: function (config, env) {
    if (env === "production") {
      //JS Overrides
      config.output.filename = "static/js/[name].js";
      config.output.chunkFilename = "static/js/[name].chunk.js";

      //CSS Overrides
      config.plugins[4].filename = "static/css/[name].css";

      //Media and Assets Overrides
      config.module.rules[1].oneOf[0].options.name =
        "static/media/[name].[ext]";
      config.module.rules[1].oneOf[3].options.name =
        "static/media/[name].[ext]";
    }

    return config;
  },
};
