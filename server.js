
const express = require('express');
const cors = require('cors');

const app = express();


router = express.Router();

router.get('/api', function(req, res) {
  res.send('I want a beer');
});

app.use(cors());

app.use(router);
/*
if (!process.env.VERCEL_REGION) {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}/graphql`)
  })
}*/

module.exports = app
