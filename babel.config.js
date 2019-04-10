module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: ["last 2 versions", "ie >= 11"],
        modules: false,
        loose: true,
      },
    ],
  ],
  plugins: [
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-proposal-optional-chaining",
  ],
}
