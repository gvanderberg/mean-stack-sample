import express = require("express");
import AlbumController = require("./../controllers/AlbumController");

let router = express.Router();

class AlbumRoutes {
    private _albumController: AlbumController;

    constructor() {
        this._albumController = new AlbumController();
    }

    get routes() {
        let controller = this._albumController;

        router.get("/:page/:pageSize", controller.retrieve);
        router.post("/", controller.create);
        router.get("/:_id", controller.findById);
        router.put("/:_id", controller.update);
        router.delete("/:_id", controller.delete);

        return router;
    }
}

Object.seal(AlbumRoutes);

export = AlbumRoutes;