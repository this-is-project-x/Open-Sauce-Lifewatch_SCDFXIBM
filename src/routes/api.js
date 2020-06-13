const express = require('express');
const router = express.Router();
const { WatsonMLScoringEndpoint } = require("watson-ml-model-utils");
const watsonMLScoringEndpoint = new WatsonMLScoringEndpoint(['SquareFeet', 'Bedrooms']);

router.post('/predictFFstatus', function(req, res, next) {
  watsonMLScoringEndpoint.score([req.body.temp_firefighting_suit, req.body.heart_rate, req.body.external_temperature, req.body.external_humidity])
    .then((response) => {
      console.log(`CHECK RESPONSE ${response}`);
      res.json({
        ok: true,
        price: response.prediction
      });
    })
    .catch((err) => {
      res.json({ok: false});
    });
});

module.exports = router;
