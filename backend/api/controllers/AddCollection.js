'use strict';

module.exports = {
    AddCollection: AddCollection
}

var protobuf = require("protobufjs");
var protos = require("../../protos/out/ts/model.js")

function AddCollection(req, res) {
    console.log("here is the user data:\n" + Buffer.from(req.headers["x-endpoint-api-userinfo"], 'base64').toString("utf8"));

    var collection = protos.model.Collection.fromObject(req.body);
    collection.createdTimestamp = Date.now().toString();

    res.send(collection.toJSON());
}
