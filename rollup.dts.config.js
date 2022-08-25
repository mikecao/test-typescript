import dts from "rollup-plugin-dts";

export default [
  {
    input: "dist/index.d.ts",
    output: [{ file: "dist/types/index.d.ts", format: "esm" }],
    external: [/\.css$/],
    plugins: [dts()],
  },
];
