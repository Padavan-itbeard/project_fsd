import path from "path";
import { Configuration } from "webpack";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";

export function buildWebpackConfig(options: BuildOptions): Configuration {
  const { mode, paths } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
  };
}
