import mongoose = require("mongoose");

interface UserModel extends mongoose.Document {
    username: string;
    email: string;
    hashedPassword: string;
    salt: string;
    isLocked: boolean;
    dateCreated: Date;
}

export = UserModel;