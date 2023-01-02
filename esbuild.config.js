

require("esbuild").build({
    entryPoints: ['./_src/ts/app.ts'],
    outdir: "assets",
    minify: true,
    bundle: true,
    format: "cjs",
    watch: true,
}).then(_ => {
    console.log('watching....')
}).catch(e => process.exit())