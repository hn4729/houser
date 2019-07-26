require("dotenv").config();
const express = require("express");
const massive = require("massive");
const controller = require("./controller");
const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
    console.log("Database Connected");
  })
  .catch(e => console.log(e));

const app = express();

app.use(express.json());

app.get("/api/houses", controller.getAllHouses);
app.post("/api/houses", controller.insert);
app.delete("/api/houses/:id", controller.delete);

app.listen(SERVER_PORT, () => {
  console.log("Listening on PORT " + SERVER_PORT);
});
