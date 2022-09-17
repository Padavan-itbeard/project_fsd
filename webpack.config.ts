import path from "path";
import webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPaths } from "./config/build/types/config";

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.ts"),
    html: path.resolve(__dirname, "public", "index.html"),
    build: path.resolve(__dirname, "build"),
  };
  
  const mode = env.mode || "development";
  const PORT = env.PORT || 3000;
  const isDev = mode === "development";
  
  const webpackConfig: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT
  });

  return webpackConfig;
};
