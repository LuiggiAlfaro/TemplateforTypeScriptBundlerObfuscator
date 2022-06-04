import resolve from '@rollup/plugin-node-resolve';

export default {
  input: './zTSbuilt/index.js',
  output: [
    {
      format: 'esm',
      file: 'bundle.js'
    },
  ],
  plugins: [
    resolve(),
  ]
};