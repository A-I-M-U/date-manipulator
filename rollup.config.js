import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';
import babel from '@rollup/plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import banner from 'rollup-plugin-banner';

var addBanner = banner(
  '<%= pkg.author %>/date-manipulator v<%= pkg.version %> license: <%= pkg.license %>',
);

export default [
  {
    input: 'src/main.js',
    output: {
      name: 'dateM',
      file: pkg.main,
      format: 'umd',
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
      }),
      addBanner,
    ],
  },
  {
    input: 'src/main.js',

    output: {
      name: 'dateM',
      file: pkg.unpkg,
      format: 'umd',
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
      }),
      uglify(),
      addBanner,
    ],
  },
  {
    input: 'src/main.js',
    output: { name: 'dateM', file: pkg.module, format: 'esm' },
    plugins: [
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
      }),
      addBanner,
    ],
  },
];
