import { resolve } from "path"
import babel from "rollup-plugin-babel"
import moduleResolve from "rollup-plugin-node-resolve"

const peerDeps = Object.keys(require("./package.json").peerDependencies)

export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/rambda.js",
      format: "cjs",
    },
    {
      file: "dist/rambda.esm.js",
      format: "esm",
    },
  ],
  plugins: [
    moduleResolve({
      extensions: [".js"],
    }),
    babel({
      extensions: [".js"],
      include: [resolve("src")],
    }),
  ],
  external: peerDeps,
}
