import mongoose = require("mongoose");

interface RoleModel extends mongoose.Document {
    name: string;
}

export = RoleModel;