const express = require('express');
const app = express(); 
const port = process.env.PORT || 5000;
const router = require('express').Router();
const got = require('got');
const { pipeline } = require('stream'); 

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); 

router.get('/routes', function(req, res) {
    const dataStream = got.stream({
        uri: 'https://developer.cumtd.com/api/v2.2/json/getroutes?key=3dc733f835924ef58aba4003302c18c5',
        qs: {
          api_key: '3dc733f835924ef58aba4003302c18c5',
          query: ''
        }
    });
    pipeline(dataStream, res, (err) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
    });
  });

// create a GET route
app.get('/express_backend', (req, res) => { 
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); 
});