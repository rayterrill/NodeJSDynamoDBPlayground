var dynamoose = require('dynamoose');

//super useful for seeing list/map schema definitions: https://github.com/dynamoosejs/dynamoose/blob/b9830d3b5c2334dba31ceb7b3081bea44162c541/test/Schema.js#L108-L123
var signSchema = new dynamoose.Schema({
    NAME: String,
    geometry: {
        type: 'map',
        map: {
            type: String,
            coordinates: {
                type: 'list',
                list: [
                    { type: 'Number' }
                ]
            }
        }
    },
    properties: {
        id: String,
        trc_id: String,
        NAME: String,
        facility_c: String,
        DESCRIP: String,
        SIGNTYPE: String,
        signTypes: String,
        viewAngle: Number,
        offsetX: Number,
        size: Number,
        style: Number,
        class: Number,
        circuitId: String,
        editorName: String,
        lastUpdate: String
    }
});

var Sign = dynamoose.model('Sign', signSchema);

// Create a new object
/*
var sign = new Sign({
    NAME: 'C3-2',
    geometry: {
        coordinates: [ -122.61287936378774, 45.58953828322739, 0],
        type: 'Point'
    },
    properties: {
        id: 'ESGN00001637',
        trc_id: null,
        NAME: 'C3-2',
        facility_c : 'PDX',
        DESCRIP : null,
        SIGNTYPE : 'TAXIWAY_DIRECTION',
        signTypes : null,
        viewAngle : 271,
        offsetX : 7661270,
        offsetY : 708111,
        size : 0,
        style : 0,
        class : 0,
        circuitId : null,
        editorName : 'POP\\gisfmesvc',
        lastUpdate : '2017-04-28T00:00:00Z'
    }
});

// Save to DynamoDB
sign.save();
*/

// Lookup in DynamoDB
Sign.get('C3-2')
.then(function (data) {
  console.log(data);
});