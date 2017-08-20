'use strict';

module.exports = {
    AddCollection: AddCollection
}

var protobuf = require("protobufjs");
var protos = require("../../protos/out/ts/model.js")

function AddCollection(req, res) {
    console.log(req.body);
    var collection = protos.model.Collection.fromObject(req.body);
    res.json(collection)
}
