const routes = require("next-routes");

module.exports = routes()
  .add("/", "/home")
  .add("/users", "user")
  .add("/users/:user", "detail");
