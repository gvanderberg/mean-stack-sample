import mongoose = require("mongoose");

class DataAccess {
    static mongooseInstance: any;
    static mongooseConnection: mongoose.Connection;

    constructor() {
        DataAccess.connect();
    }

    static connect(): mongoose.Connection {
        if (this.mongooseConnection) {
            return this.mongooseConnection;
        }

        this.mongooseConnection = mongoose.connection;
        this.mongooseConnection.once("open", () => {
            console.log("Connected to mongodb.");
        });
        this.mongooseInstance = mongoose.connect("mongodb://dbo:dbo@jello.modulusmongo.net:27017/dY2tudim");
        //this.mongooseInstance = Mongoose.connect("mongodb://mongo:27017/dockerDb");

        return this.mongooseInstance;
    }
}

DataAccess.connect();

export = DataAccess;