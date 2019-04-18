import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.esm.bundle.js',
      format: 'esm'
    },
    {
      file: 'dist/index.umd.bundle.js',
      format: 'umd'
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
  ]
};
