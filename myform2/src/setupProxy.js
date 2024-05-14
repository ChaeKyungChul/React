const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        createProxyMiddleware("/api" , {
            target: "http://localhost:8080/myform/",  //자바서버로염
            changeOrigin: true
        })
    );
    // app.use(
    //     createProxyMiddleware("/api" , {
    //         target: "http://localhost:5000/",  <<리엑트서버
    //         changeOrigin: true
    //     })
    // );추가가능
};

//
