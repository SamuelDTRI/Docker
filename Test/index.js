require("dotenv").config();
const { server } = require("./src/server");
const { sequelize } = require("./src/db");

sequelize.sync({ force: false }).then(() => {
  server.listen(process.env.PORT || 3000);
  console.log("Server listening on port: " + process.env.PORT);
});
