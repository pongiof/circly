import * as $protobuf from "protobufjs";

/** Namespace model. */
export namespace model {

    /** Properties of a Collection. */
    interface ICollection {

        /** Collection id */
        id?: string;

        /** Collection name */
        name?: string;

        /** Collection description */
        description?: string;

        /** Collection createdMicros */
        createdMicros?: string;

        /** Collection authorId */
        authorId?: string;

        /** Collection subscriberId */
        subscriberId?: string[];

        /** Collection itemId */
        itemId?: string[];
    }

    /** Represents a Collection. */
    class Collection {

        /**
         * Constructs a new Collection.
         * @param [properties] Properties to set
         */
        constructor(properties?: model.ICollection);

        /** Collection id. */
        public id: string;

        /** Collection name. */
        public name: string;

        /** Collection description. */
        public description: string;

        /** Collection createdMicros. */
        public createdMicros: string;

        /** Collection authorId. */
        public authorId: string;

        /** Collection subscriberId. */
        public subscriberId: string[];

        /** Collection itemId. */
        public itemId: string[];

        /**
         * Creates a new Collection instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Collection instance
         */
        public static create(properties?: model.ICollection): model.Collection;

        /**
         * Encodes the specified Collection message. Does not implicitly {@link model.Collection.verify|verify} messages.
         * @param message Collection message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: model.ICollection, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Collection message, length delimited. Does not implicitly {@link model.Collection.verify|verify} messages.
         * @param message Collection message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: model.ICollection, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Collection message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Collection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): model.Collection;

        /**
         * Decodes a Collection message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Collection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): model.Collection;

        /**
         * Verifies a Collection message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Collection message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Collection
         */
        public static fromObject(object: { [k: string]: any }): model.Collection;

        /**
         * Creates a plain object from a Collection message. Also converts values to other types if specified.
         * @param message Collection
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: model.Collection, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Collection to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a User. */
    interface IUser {

        /** User id */
        id?: string;
    }

    /** Represents a User. */
    class User {

        /**
         * Constructs a new User.
         * @param [properties] Properties to set
         */
        constructor(properties?: model.IUser);

        /** User id. */
        public id: string;

        /**
         * Creates a new User instance using the specified properties.
         * @param [properties] Properties to set
         * @returns User instance
         */
        public static create(properties?: model.IUser): model.User;

        /**
         * Encodes the specified User message. Does not implicitly {@link model.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: model.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link model.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: model.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): model.User;

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): model.User;

        /**
         * Verifies a User message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns User
         */
        public static fromObject(object: { [k: string]: any }): model.User;

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @param message User
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: model.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this User to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Item. */
    interface IItem {

        /** Item id */
        id?: string;

        /** Item url */
        url?: string;

        /** Item createMicros */
        createMicros?: string;

        /** Item authorId */
        authorId?: string;
    }

    /** Represents an Item. */
    class Item {

        /**
         * Constructs a new Item.
         * @param [properties] Properties to set
         */
        constructor(properties?: model.IItem);

        /** Item id. */
        public id: string;

        /** Item url. */
        public url: string;

        /** Item createMicros. */
        public createMicros: string;

        /** Item authorId. */
        public authorId: string;

        /**
         * Creates a new Item instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Item instance
         */
        public static create(properties?: model.IItem): model.Item;

        /**
         * Encodes the specified Item message. Does not implicitly {@link model.Item.verify|verify} messages.
         * @param message Item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: model.IItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Item message, length delimited. Does not implicitly {@link model.Item.verify|verify} messages.
         * @param message Item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: model.IItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Item message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): model.Item;

        /**
         * Decodes an Item message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): model.Item;

        /**
         * Verifies an Item message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Item message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Item
         */
        public static fromObject(object: { [k: string]: any }): model.Item;

        /**
         * Creates a plain object from an Item message. Also converts values to other types if specified.
         * @param message Item
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: model.Item, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Item to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
