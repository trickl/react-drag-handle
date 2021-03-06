import mdx from '@mdx-js/rollup'
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';

import packageJson from './load-package.cjs';

const rollupConfig = {
  input: './src/index.ts',
  external: ['react', 'react-dom', 'prop-types'],
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [peerDepsExternal(), resolve(), commonjs(), typescript(), mdx()],
};

export default rollupConfig;
