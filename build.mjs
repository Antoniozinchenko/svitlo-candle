import esbuild from 'esbuild';

await esbuild.build({
  bundle: true,
  entryPoints: ['./src/index.ts'],
  outdir: 'public',
  minify: true,
  sourcemap: true,
});
console.log('build finished');
