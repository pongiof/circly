mkdir -p ./out/ts/

../node_modules/protobufjs/cli/bin/pbjs -t static-module -w commonjs -o out/ts/model.js model.proto
../node_modules/protobufjs/cli/bin/pbts -o out/ts/model.d.ts out/ts/model.js

cp -r out/ts/* ../../circly-app/src/app/shared/protos

function updateApi {
    sed '/definitions\:/,$d' $1 > tmp
    protobuf-jsonschema --format yaml model.proto >> tmp
    mv tmp $1
}

updateApi ../api/swagger/swagger.yaml
updateApi ../openapi.yaml
