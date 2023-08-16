module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "expo-router/babel",
      "nativewind/babel",
      [
        "module-resolver",
        {
          alias: {
            assets: "./assets",
            components: "./components",
            utils: "./utils",
            constants: "./constants",
          },
        },
      ],
    ],
  };
};
