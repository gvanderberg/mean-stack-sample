import DataAccess = require("./../DataAccess");
import IUserModel = require("./../../models/interfaces/UserModel");

let mongoose = DataAccess.mongooseInstance;
let mongooseConnection = DataAccess.mongooseConnection;

class UserSchema {
    static get schema() {
        let schema = mongoose.Schema({
            username: { type: String, required: true },
            email: { type: String, required: true },
            hashedPassword: { type: String, required: true },
            //salt: { type: String, required: true },
            isLocked: { type: Boolean, required: true },
            dateCreated: { type: Date, required: true }
        });

        return schema;
    }
}

let schema = mongooseConnection.model<IUserModel>("Users", UserSchema.schema);

export = schema;
