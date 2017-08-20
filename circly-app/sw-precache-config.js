module.exports = {
    staticFileGlobs: [
        'dist/**.html',
        'dist/**.js',
        'dist/**.css',
        'dist/assets/images/*',
        'dist/assets/icons/*',
        'dist/assets/css/*',
    ],
    root: 'dist',
    stripPrefix: 'dist/',
    navigateFallback: '/index.html',
    navigateFallbackWhitelist: [ /^\/main\//, /^\/login/ ],
    runtimeCaching: [{
        urlPattern: https\:\/\/circly\-174919\.appspot\.com\/api\/,
        handler: 'networkFirst'
    }]
};
