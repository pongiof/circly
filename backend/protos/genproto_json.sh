mkdir -p ./out/json/

protobuf-jsonschema --format yaml model.proto > out/json/model.yaml
