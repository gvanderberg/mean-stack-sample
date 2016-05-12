import express = require("express");
import bodyParser = require("body-parser");
import logger = require("morgan");
import BaseRoutes = require("./../../routes/base/BaseRoutes");
import MethodOverride = require("./../MethodOverride");

class BaseMiddlewares {
    static get configuration() {
        let app = express();

        app.use(logger("dev"));
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(MethodOverride.configuration());
        app.use(new BaseRoutes().routes);

        return app;
    }
}

Object.seal(BaseMiddlewares);

export = BaseMiddlewares;