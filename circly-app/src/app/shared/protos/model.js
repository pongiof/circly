/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.model = (function() {

    /**
     * Namespace model.
     * @exports model
     * @namespace
     */
    var model = {};

    model.Collection = (function() {

        /**
         * Properties of a Collection.
         * @memberof model
         * @interface ICollection
         * @property {string} [id] Collection id
         * @property {string} [name] Collection name
         * @property {string} [description] Collection description
         * @property {number|Long} [createdTsMicros] Collection createdTsMicros
         * @property {Array.<string>} [subscriberIds] Collection subscriberIds
         * @property {Array.<string>} [items] Collection items
         */

        /**
         * Constructs a new Collection.
         * @memberof model
         * @classdesc Represents a Collection.
         * @constructor
         * @param {model.ICollection=} [properties] Properties to set
         */
        function Collection(properties) {
            this.subscriberIds = [];
            this.items = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Collection id.
         * @member {string}id
         * @memberof model.Collection
         * @instance
         */
        Collection.prototype.id = "";

        /**
         * Collection name.
         * @member {string}name
         * @memberof model.Collection
         * @instance
         */
        Collection.prototype.name = "";

        /**
         * Collection description.
         * @member {string}description
         * @memberof model.Collection
         * @instance
         */
        Collection.prototype.description = "";

        /**
         * Collection createdTsMicros.
         * @member {number|Long}createdTsMicros
         * @memberof model.Collection
         * @instance
         */
        Collection.prototype.createdTsMicros = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Collection subscriberIds.
         * @member {Array.<string>}subscriberIds
         * @memberof model.Collection
         * @instance
         */
        Collection.prototype.subscriberIds = $util.emptyArray;

        /**
         * Collection items.
         * @member {Array.<string>}items
         * @memberof model.Collection
         * @instance
         */
        Collection.prototype.items = $util.emptyArray;

        /**
         * Creates a new Collection instance using the specified properties.
         * @function create
         * @memberof model.Collection
         * @static
         * @param {model.ICollection=} [properties] Properties to set
         * @returns {model.Collection} Collection instance
         */
        Collection.create = function create(properties) {
            return new Collection(properties);
        };

        /**
         * Encodes the specified Collection message. Does not implicitly {@link model.Collection.verify|verify} messages.
         * @function encode
         * @memberof model.Collection
         * @static
         * @param {model.ICollection} message Collection message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Collection.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.description != null && message.hasOwnProperty("description"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
            if (message.createdTsMicros != null && message.hasOwnProperty("createdTsMicros"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.createdTsMicros);
            if (message.subscriberIds != null && message.subscriberIds.length)
                for (var i = 0; i < message.subscriberIds.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.subscriberIds[i]);
            if (message.items != null && message.items.length)
                for (var i = 0; i < message.items.length; ++i)
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.items[i]);
            return writer;
        };

        /**
         * Encodes the specified Collection message, length delimited. Does not implicitly {@link model.Collection.verify|verify} messages.
         * @function encodeDelimited
         * @memberof model.Collection
         * @static
         * @param {model.ICollection} message Collection message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Collection.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Collection message from the specified reader or buffer.
         * @function decode
         * @memberof model.Collection
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {model.Collection} Collection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Collection.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.model.Collection();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.createdTsMicros = reader.int64();
                    break;
                case 5:
                    if (!(message.subscriberIds && message.subscriberIds.length))
                        message.subscriberIds = [];
                    message.subscriberIds.push(reader.string());
                    break;
                case 6:
                    if (!(message.items && message.items.length))
                        message.items = [];
                    message.items.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Collection message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof model.Collection
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {model.Collection} Collection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Collection.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Collection message.
         * @function verify
         * @memberof model.Collection
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Collection.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.createdTsMicros != null && message.hasOwnProperty("createdTsMicros"))
                if (!$util.isInteger(message.createdTsMicros) && !(message.createdTsMicros && $util.isInteger(message.createdTsMicros.low) && $util.isInteger(message.createdTsMicros.high)))
                    return "createdTsMicros: integer|Long expected";
            if (message.subscriberIds != null && message.hasOwnProperty("subscriberIds")) {
                if (!Array.isArray(message.subscriberIds))
                    return "subscriberIds: array expected";
                for (var i = 0; i < message.subscriberIds.length; ++i)
                    if (!$util.isString(message.subscriberIds[i]))
                        return "subscriberIds: string[] expected";
            }
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (var i = 0; i < message.items.length; ++i)
                    if (!$util.isString(message.items[i]))
                        return "items: string[] expected";
            }
            return null;
        };

        /**
         * Creates a Collection message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof model.Collection
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {model.Collection} Collection
         */
        Collection.fromObject = function fromObject(object) {
            if (object instanceof $root.model.Collection)
                return object;
            var message = new $root.model.Collection();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.description != null)
                message.description = String(object.description);
            if (object.createdTsMicros != null)
                if ($util.Long)
                    (message.createdTsMicros = $util.Long.fromValue(object.createdTsMicros)).unsigned = false;
                else if (typeof object.createdTsMicros === "string")
                    message.createdTsMicros = parseInt(object.createdTsMicros, 10);
                else if (typeof object.createdTsMicros === "number")
                    message.createdTsMicros = object.createdTsMicros;
                else if (typeof object.createdTsMicros === "object")
                    message.createdTsMicros = new $util.LongBits(object.createdTsMicros.low >>> 0, object.createdTsMicros.high >>> 0).toNumber();
            if (object.subscriberIds) {
                if (!Array.isArray(object.subscriberIds))
                    throw TypeError(".model.Collection.subscriberIds: array expected");
                message.subscriberIds = [];
                for (var i = 0; i < object.subscriberIds.length; ++i)
                    message.subscriberIds[i] = String(object.subscriberIds[i]);
            }
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".model.Collection.items: array expected");
                message.items = [];
                for (var i = 0; i < object.items.length; ++i)
                    message.items[i] = String(object.items[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a Collection message. Also converts values to other types if specified.
         * @function toObject
         * @memberof model.Collection
         * @static
         * @param {model.Collection} message Collection
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Collection.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.subscriberIds = [];
                object.items = [];
            }
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.description = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.createdTsMicros = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.createdTsMicros = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.createdTsMicros != null && message.hasOwnProperty("createdTsMicros"))
                if (typeof message.createdTsMicros === "number")
                    object.createdTsMicros = options.longs === String ? String(message.createdTsMicros) : message.createdTsMicros;
                else
                    object.createdTsMicros = options.longs === String ? $util.Long.prototype.toString.call(message.createdTsMicros) : options.longs === Number ? new $util.LongBits(message.createdTsMicros.low >>> 0, message.createdTsMicros.high >>> 0).toNumber() : message.createdTsMicros;
            if (message.subscriberIds && message.subscriberIds.length) {
                object.subscriberIds = [];
                for (var j = 0; j < message.subscriberIds.length; ++j)
                    object.subscriberIds[j] = message.subscriberIds[j];
            }
            if (message.items && message.items.length) {
                object.items = [];
                for (var j = 0; j < message.items.length; ++j)
                    object.items[j] = message.items[j];
            }
            return object;
        };

        /**
         * Converts this Collection to JSON.
         * @function toJSON
         * @memberof model.Collection
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Collection.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Collection;
    })();

    model.User = (function() {

        /**
         * Properties of a User.
         * @memberof model
         * @interface IUser
         * @property {string} [id] User id
         */

        /**
         * Constructs a new User.
         * @memberof model
         * @classdesc Represents a User.
         * @constructor
         * @param {model.IUser=} [properties] Properties to set
         */
        function User(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User id.
         * @member {string}id
         * @memberof model.User
         * @instance
         */
        User.prototype.id = "";

        /**
         * Creates a new User instance using the specified properties.
         * @function create
         * @memberof model.User
         * @static
         * @param {model.IUser=} [properties] Properties to set
         * @returns {model.User} User instance
         */
        User.create = function create(properties) {
            return new User(properties);
        };

        /**
         * Encodes the specified User message. Does not implicitly {@link model.User.verify|verify} messages.
         * @function encode
         * @memberof model.User
         * @static
         * @param {model.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link model.User.verify|verify} messages.
         * @function encodeDelimited
         * @memberof model.User
         * @static
         * @param {model.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @function decode
         * @memberof model.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {model.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.model.User();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof model.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {model.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a User message.
         * @function verify
         * @memberof model.User
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        User.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof model.User
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {model.User} User
         */
        User.fromObject = function fromObject(object) {
            if (object instanceof $root.model.User)
                return object;
            var message = new $root.model.User();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @function toObject
         * @memberof model.User
         * @static
         * @param {model.User} message User
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this User to JSON.
         * @function toJSON
         * @memberof model.User
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return User;
    })();

    model.Item = (function() {

        /**
         * Properties of an Item.
         * @memberof model
         * @interface IItem
         * @property {string} [id] Item id
         * @property {string} [url] Item url
         * @property {number|Long} [createdTsMicros] Item createdTsMicros
         * @property {string} [authorId] Item authorId
         */

        /**
         * Constructs a new Item.
         * @memberof model
         * @classdesc Represents an Item.
         * @constructor
         * @param {model.IItem=} [properties] Properties to set
         */
        function Item(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Item id.
         * @member {string}id
         * @memberof model.Item
         * @instance
         */
        Item.prototype.id = "";

        /**
         * Item url.
         * @member {string}url
         * @memberof model.Item
         * @instance
         */
        Item.prototype.url = "";

        /**
         * Item createdTsMicros.
         * @member {number|Long}createdTsMicros
         * @memberof model.Item
         * @instance
         */
        Item.prototype.createdTsMicros = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Item authorId.
         * @member {string}authorId
         * @memberof model.Item
         * @instance
         */
        Item.prototype.authorId = "";

        /**
         * Creates a new Item instance using the specified properties.
         * @function create
         * @memberof model.Item
         * @static
         * @param {model.IItem=} [properties] Properties to set
         * @returns {model.Item} Item instance
         */
        Item.create = function create(properties) {
            return new Item(properties);
        };

        /**
         * Encodes the specified Item message. Does not implicitly {@link model.Item.verify|verify} messages.
         * @function encode
         * @memberof model.Item
         * @static
         * @param {model.IItem} message Item message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Item.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.url != null && message.hasOwnProperty("url"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
            if (message.createdTsMicros != null && message.hasOwnProperty("createdTsMicros"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.createdTsMicros);
            if (message.authorId != null && message.hasOwnProperty("authorId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.authorId);
            return writer;
        };

        /**
         * Encodes the specified Item message, length delimited. Does not implicitly {@link model.Item.verify|verify} messages.
         * @function encodeDelimited
         * @memberof model.Item
         * @static
         * @param {model.IItem} message Item message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Item.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Item message from the specified reader or buffer.
         * @function decode
         * @memberof model.Item
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {model.Item} Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Item.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.model.Item();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                case 3:
                    message.createdTsMicros = reader.int64();
                    break;
                case 4:
                    message.authorId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Item message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof model.Item
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {model.Item} Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Item.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Item message.
         * @function verify
         * @memberof model.Item
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Item.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            if (message.createdTsMicros != null && message.hasOwnProperty("createdTsMicros"))
                if (!$util.isInteger(message.createdTsMicros) && !(message.createdTsMicros && $util.isInteger(message.createdTsMicros.low) && $util.isInteger(message.createdTsMicros.high)))
                    return "createdTsMicros: integer|Long expected";
            if (message.authorId != null && message.hasOwnProperty("authorId"))
                if (!$util.isString(message.authorId))
                    return "authorId: string expected";
            return null;
        };

        /**
         * Creates an Item message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof model.Item
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {model.Item} Item
         */
        Item.fromObject = function fromObject(object) {
            if (object instanceof $root.model.Item)
                return object;
            var message = new $root.model.Item();
            if (object.id != null)
                message.id = String(object.id);
            if (object.url != null)
                message.url = String(object.url);
            if (object.createdTsMicros != null)
                if ($util.Long)
                    (message.createdTsMicros = $util.Long.fromValue(object.createdTsMicros)).unsigned = false;
                else if (typeof object.createdTsMicros === "string")
                    message.createdTsMicros = parseInt(object.createdTsMicros, 10);
                else if (typeof object.createdTsMicros === "number")
                    message.createdTsMicros = object.createdTsMicros;
                else if (typeof object.createdTsMicros === "object")
                    message.createdTsMicros = new $util.LongBits(object.createdTsMicros.low >>> 0, object.createdTsMicros.high >>> 0).toNumber();
            if (object.authorId != null)
                message.authorId = String(object.authorId);
            return message;
        };

        /**
         * Creates a plain object from an Item message. Also converts values to other types if specified.
         * @function toObject
         * @memberof model.Item
         * @static
         * @param {model.Item} message Item
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Item.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.url = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.createdTsMicros = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.createdTsMicros = options.longs === String ? "0" : 0;
                object.authorId = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.createdTsMicros != null && message.hasOwnProperty("createdTsMicros"))
                if (typeof message.createdTsMicros === "number")
                    object.createdTsMicros = options.longs === String ? String(message.createdTsMicros) : message.createdTsMicros;
                else
                    object.createdTsMicros = options.longs === String ? $util.Long.prototype.toString.call(message.createdTsMicros) : options.longs === Number ? new $util.LongBits(message.createdTsMicros.low >>> 0, message.createdTsMicros.high >>> 0).toNumber() : message.createdTsMicros;
            if (message.authorId != null && message.hasOwnProperty("authorId"))
                object.authorId = message.authorId;
            return object;
        };

        /**
         * Converts this Item to JSON.
         * @function toJSON
         * @memberof model.Item
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Item.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Item;
    })();

    return model;
})();

module.exports = $root;
