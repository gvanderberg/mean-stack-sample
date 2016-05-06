import DataAccess = require("./../DataAccess");
import IAlbumModel = require("./../../models/interfaces/AlbumModel");
import PhotoSchema = require("./PhotoSchema");

let mongoose = DataAccess.mongooseInstance;
let mongooseConnection = DataAccess.mongooseConnection;

class AlbumSchema {
    static get schema() {
        let schema = mongoose.Schema({
            title: { type: String, required: true },
            description: { type: String },
            dateCreated: { type: Date, required: true },
            photos: { type: [PhotoSchema] }
        });

        return schema;
    }
}

let schema = mongooseConnection.model<IAlbumModel>("Albums", AlbumSchema.schema);

export = schema;
