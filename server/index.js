const app = require('./server/app.js');
const port = 5000;

app.listen(port, () => {
  console.log(`app is listening on ${process.env.PORT}`);
});