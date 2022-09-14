import webpack from "webpack";
import HTMLWebpackPlugin from 'html-webpack-plugin';
import path from "path";
import { BuildOptions, BuildPaths } from "./types/config";

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
  ];
}