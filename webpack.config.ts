import path from "path";
import webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildPaths } from "./config/build/types/config";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  html: path.resolve(__dirname, "public", "index.html"),
  build: path.resolve(__dirname, "build"),
};

const mode = "development";
const isDev = mode === "development";

const webpackConfig: webpack.Configuration = buildWebpackConfig({
  mode: "development",
  paths,
  isDev
});

export default webpackConfig;
