const { WatsonMLScoringEndpoint } = require("watson-ml-model-utils");

// Example specifying all values
// let endpoint = new WatsonMLScoringEndpoint(['SquareFeet', 'Bedrooms'], {
//     servicePath: 'https://ibm-watson-ml.mybluemix.net',
//     username: 'xxx',
//     password: 'xxx',
//     instanceId: 'xxx',
//     modelId: 'xxx',
//     deploymentId: 'xxx'
// });

// Example specifying modelId and deploymentId and reading other values from environment
// let endpoint = new WatsonMLScoringEndpoint(['SquareFeet', 'Bedrooms'], {
//     modelId: 'xxx',
//     deploymentId: 'xxx'
// });

// Example reading all values from environment
let endpoint = new WatsonMLScoringEndpoint(['temp_firefighting_suit', 'heart_rate', 'external_temperature', 'external_humidity']);

// Running a single prediction
endpoint.score([75, 130, 400, 84])
  .then(response => console.log(response.prediction))
  .catch(e => console.log(e));

// Running multiple predictions at once
endpoint.scoreMulti([[64, 160, 500, 74], [60, 130, 500, 95], [80, 130, 800, 84]])
  .then(response => console.log(response.predictions))
  .catch(e => console.log(e));