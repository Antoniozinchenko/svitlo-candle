import esbuild from 'esbuild';

const ctx = await esbuild.context({
  bundle: true,
  entryPoints: ['./src/index.ts'],
  outdir: 'public',
  minify: true,
  sourcemap: true,
});
await ctx.watch();

console.log('watch changes...');
