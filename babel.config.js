module.exports = {
  presets: ["next/babel"],
  plugins: [
    [
      "babel-plugin-root-import",
      {
        rootPathSuffix: "./",
        rootPathPrefix: "@/",
      },
    ],
  ],
};
