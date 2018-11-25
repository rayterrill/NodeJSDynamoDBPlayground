var dynamoose = require('dynamoose');

dynamoose.AWS.config.update({
    region: "us-west-2"
});

//super useful for seeing list/map schema definitions: https://github.com/dynamoosejs/dynamoose/blob/b9830d3b5c2334dba31ceb7b3081bea44162c541/test/Schema.js#L108-L123
var testSchema = new dynamoose.Schema({
    NAME: String,
    geometry: {
        type: 'map',
        map: {
            type: String,
            coordinates: {
                type: 'object',
            }
        }
    }
});

// create a model from the schema
var Test = dynamoose.model('Tests', testSchema);

Test.create({
    NAME: 'TEST',
    geometry: {
        type: "Polygon",
        coordinates: [
            [
                [-122.59937991918844,45.59685017534636],
                [-122.56461939052296,45.585017826216585],
                [-122.56721564199464,45.58252834667755],
                [-122.60081015429014,45.595219956466536],
                [-122.59937991918844,45.59685017534636]
            ]
        ]
      }
  }, function(err, polygon) {
    if(err) { return console.log(err); }
    console.log(JSON.stringify(polygon));
  });
