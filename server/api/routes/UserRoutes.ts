import express = require("express");
import UserController = require("./../controllers/UserController");

let router = express.Router();

class UserRoutes {
    private _userController: UserController;

    constructor() {
        this._userController = new UserController();
    }

    get routes() {
        let controller = this._userController;

        router.get("/", controller.retrieve);
        router.get("/:page/:pageSize", controller.retrieve);
        router.post("/", controller.create);
        router.get("/:_id", controller.findById);
        router.put("/:_id", controller.update);
        router.delete("/:_id", controller.delete);

        return router;
    }
}

Object.seal(UserRoutes);

export = UserRoutes;