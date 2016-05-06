import mongoose = require("mongoose");

interface ChartModel extends mongoose.Document {
    data: Object;
    height: Number;
    width: Number;
}

export = ChartModel;