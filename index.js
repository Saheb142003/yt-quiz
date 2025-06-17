import express from "express";

let app = express();
app.get("/", (req, resp) => {
  resp.send("Server started");
});
const port = 8000;

app.listen(port, () => {
  console.log("server is listening on port", port);
});
