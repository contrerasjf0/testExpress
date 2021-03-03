
const express = require('express');
const cors = require('cors');

const app = express();


router = express.Router();

router.get('/api', function(req, res) {
  res.send('I want a beer');
});

app.use(cors());

app.use(router);

app.listen(3000, () => {
  console.log('The server is running on the port: ', 3000);
});
