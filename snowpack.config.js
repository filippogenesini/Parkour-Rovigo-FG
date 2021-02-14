// Questa è la configurazione del sistema di build del sito
module.exports = {
  mount: {
    src: "/",
    public: "/",
  },
  optimize: {
    bundle: true,
    minify: true,
    target: "es2018",
  },
  plugins: [
    [
      "snowpack-plugin-minify-html",
      {
        htmlMinifierOptions: {
          sortAttributes: true,
          removeComments: true,
        },
      },
    ],
  ],
}
