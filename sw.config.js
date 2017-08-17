module.exports = {
  staticFileGlobs: [
    '**.html',
    'js/**.js',
    'data/**.json',
    'img/**.jpg'
  ],
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/maps\.*/,
      handler: 'networkFirst'
    }
  ]
};
