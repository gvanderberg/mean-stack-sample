import DataAccess = require("./../DataAccess");
import IRoleModel = require("./../../models/interfaces/RoleModel");

let mongoose = DataAccess.mongooseInstance;
let mongooseConnection = DataAccess.mongooseConnection;

class RoleSchema {
    static get schema() {
        let schema = mongoose.Schema({
            name: { type: String, required: true }
        });

        return schema;
    }
}

let schema = mongooseConnection.model<IRoleModel>("Roles", RoleSchema.schema);

export = schema;
