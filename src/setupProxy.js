const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api/v1", {
      target: "https://todo-app-backend.azurewebsites.net",
      //   target: "http://localhost:8000",
    })
  );
};
