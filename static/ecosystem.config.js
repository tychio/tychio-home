module.exports = {
    apps : [{
        name   : "Home",
        script: "serve",
        env: {
            PM2_SERVE_PATH: '/root/repos/home',
            PM2_SERVE_PORT: 5000
        }
    }]
}