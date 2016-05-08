import express = require("express");
import RoleController = require("./../controllers/RoleController");

let router = express.Router();

class RoleRoutes {
    private _roleController: RoleController;

    constructor() {
        this._roleController = new RoleController();
    }

    get routes() {
        let controller = this._roleController;

        router.get("/", controller.retrieve);
        router.get("/:page/:pageSize", controller.retrieve);
        router.post("/", controller.create);
        router.get("/:_id", controller.findById);
        router.put("/:_id", controller.update);
        router.delete("/:_id", controller.delete);

        return router;
    }
}

Object.seal(RoleRoutes);

export = RoleRoutes;