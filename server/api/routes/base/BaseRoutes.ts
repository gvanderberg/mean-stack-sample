import express = require("express");
import path = require("path");
import AlbumRoutes = require("./../AlbumRoutes");
import AccountRoutes = require("./../AccountRoutes");
import PhotoRoutes = require("./../PhotoRoutes");
import RoleRoutes = require("./../RoleRoutes");
import SetupRoutes = require("./../SetupRoutes");
import UserRoutes = require("./../UserRoutes");

let app = express();

class BaseRoutes {
    get routes() {
        // api routes
        app.use("/api/v1/albums", new AlbumRoutes().routes);
        app.use("/api/v1/account", new AccountRoutes().routes);
        app.use("/api/v1/photos", new PhotoRoutes().routes);
        app.use("/api/v1/roles", new RoleRoutes().routes);
        app.use("/api/v1/setup", new SetupRoutes().routes);
        app.use("/api/v1/users", new UserRoutes().routes);

        return app;
    }
}

export = BaseRoutes;