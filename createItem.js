var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2"
});

var docClient = new AWS.DynamoDB.DocumentClient();

var table = "Signs";

var params = {
    TableName:table,
    Item:{
        "NAME": "C3-2",
        "item":{
            "geometry": {
                "coordinates": [
                    -122.61287936378774,
                    45.58953828322739,
                    0
                ],
                "type": "Point"
            },
            "properties": {
                "id": "ESGN00001637",
                "trc_id": null,
                "NAME": "C3-2",
                "facility_c" : "PDX",
                "DESCRIP" : null,
                "SIGNTYPE" : "TAXIWAY_DIRECTION",
                "signTypes" : null,
                "viewAngle" : 271,
                "offsetX" : 7661270,
                "offsetY" : 708111,
                "size" : 0,
                "style" : 0,
                "class" : 0,
                "circuitId" : null,
                "editorName" : "POP\\gisfmesvc",
                "lastUpdate" : "2017-04-28T00:00:00Z"
            }
        }
    }
};

console.log("Adding a new item...");
docClient.put(params, function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
    }
});