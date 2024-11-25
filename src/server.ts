import app from "./app";

const port = 5151;

app.listen(port, () => {
  console.log('server run on: ' + port);
});