import mongoose = require("mongoose");

interface PhotoModel extends mongoose.Document {
    title: string;
    uri: string;
    dateUploaded: Date;
}

export = PhotoModel;