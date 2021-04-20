import express from 'express';

const port = process.env.PORT || 2022;

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Express application Loading...</h1>');
});

app.listen(port, () => {
  console.log(`The Server is running on PORT ${port}`);
});
