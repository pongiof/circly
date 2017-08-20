'use strict';

module.exports = {
    AddCollection: AddCollection
}

var protobuf = require("protobufjs");
var protos = require("../../protos/out/ts/model.js")

function AddCollection(req, res) {
    console.log("got req headers:");
    console.log(req.headers);
    var hrTime = process.hrtime();
    var currentMicros = Math.round(hrTime[0] * 1000000 + hrTime[1] / 1000);
    var collection = protos.model.Collection.fromObject(req.body);
    collection.createdMicros = currentMicros.toString();

    res.send(collection.toJSON());
}
