import DataAccess = require("./../DataAccess");
import IPhotoModel = require("./../../models/interfaces/PhotoModel");

let mongoose = DataAccess.mongooseInstance;
let mongooseConnection = DataAccess.mongooseConnection;

class PhotoSchema {
    static get schema() {
        let schema = mongoose.Schema({
            title: { type: String, required: true },
            uri: { type: String },
            dateUploaded: { type: Date, required: true }
        });

        return schema;
    }
}

let schema = mongooseConnection.model<IPhotoModel>("Photos", PhotoSchema.schema);

export = schema;
