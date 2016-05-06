import express = require("express");
import PhotoController = require("./../controllers/PhotoController");

let router = express.Router();

class PhotoRoutes {
    private _photoController: PhotoController;

    constructor() {
        this._photoController = new PhotoController();
    }

    get routes() {
        let controller = this._photoController;

        router.get("/", controller.retrieve);
        router.post("/", controller.create);
        router.get("/:_id", controller.findById);
        router.put("/:_id", controller.update);
        router.delete("/:_id", controller.delete);

        return router;
    }
}

Object.seal(PhotoRoutes);

export = PhotoRoutes;