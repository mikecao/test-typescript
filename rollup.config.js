//import ttypescript from "ttypescript";
//import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import svgr from "@svgr/rollup";
import ts from "rollup-plugin-ts";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/cjs/index.js",
        format: "cjs",
        sourcemap: true,
        name: "test-typescript",
      },
      {
        file: "dist/esm/index.js",
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      external(),
      resolve(),
      commonjs(),
      ts(),
      postcss({ extract: true, modules: true }),
      svgr(),
      terser(),
    ],
    external: ["react", "react-dom", "react/jsx-runtime"],
  },
];

const alt = {
  input: "dist/index.d.ts",
  output: [{ file: "dist/types/index.d.ts", format: "esm" }],
  external: [/\.css$/],
  plugins: [dts()],
};
