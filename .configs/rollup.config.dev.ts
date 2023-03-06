import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import ts from 'rollup-plugin-ts';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        format: 'cjs',
        file: 'dist/cjs/index.js',
        sourcemap: true,
      },
      {
        format: 'esm',
        file: 'dist/esm/index.js',
        sourcemap: true,
      },
    ],
    plugins: [nodeResolve(), ts({ tsconfig: 'tsconfig.json' }), terser()],
  },
];
