const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://checkip.amazonaws.com',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '/',
            },
        })
    );

    app.use(
        '/ip-api',
        createProxyMiddleware({
            target: 'http://ip-api.com/',
            changeOrigin: true,
            pathRewrite: {
                '^/ip-api': '/json',
            },
        })
    );

    app.use(
        '/speedtest',
        createProxyMiddleware({
            target: 'https://api-v3.speedtest.cn/',
            changeOrigin: true,
            pathRewrite: {
                '^/speedtest': '/ip',
            },
        })
    );

    app.use(
        '/ipcn',
        createProxyMiddleware({
            target: 'https://ip.cn/api/',
            changeOrigin: true,
            pathRewrite: {
                '^/ipcn': '/index?type=0',
            },
        })
    );
};
