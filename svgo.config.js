module.exports = {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            // Disable this plugin to avoid the "reading '0'" crash
            convertPathData: false,
          },
        },
      },
    ],
  };