import express from "express";
const app = express();
const PORT = 8080;
app.use(express.json());

app.get('/ping', (_req, res) => {
  console.log('Hay un ping por aquí');
  res.send('pong');
});

app.listen(PORT, () => console.log('Server running in port: ' + PORT));
