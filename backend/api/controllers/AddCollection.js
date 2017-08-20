'use strict';

module.exports = {
    AddCollection: AddCollection
}

var protobuf = require("protobufjs");
var protos = require("../../protos/out/ts/model.js")

function AddCollection(req, res) {
    console.log("here is the user data:\n" + Buffer.from(req.headers["x-endpoint-api-userinfo"], 'base64').toString("utf8"));
    var hrTime = process.hrtime();
    var currentMicros = Math.round(hrTime[0] * 1000000 + hrTime[1] / 1000);
    var collection = protos.model.Collection.fromObject(req.body);
    collection.createdMicros = currentMicros.toString();

    res.send(collection.toJSON());
}
