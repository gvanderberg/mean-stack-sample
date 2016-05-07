import express = require("express");
import IBaseController = require("./interfaces/base/BaseController");
import IAlbumModel = require("./../models/interfaces/AlbumModel");
import AlbumBusiness = require("./../business/AlbumBusiness");

class AlbumController implements IBaseController<AlbumBusiness> {
    create(req: express.Request, res: express.Response): void {
        try {
            var user: IAlbumModel = <IAlbumModel>req.body;
            var business = new AlbumBusiness();

            business.create(user, (error, result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.json({ "success": "success" });
                }
            });
        } catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
    delete(req: express.Request, res: express.Response): void {
        try {
            var id: string = req.params._id;
            var business = new AlbumBusiness();

            business.delete(id, (error, result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.json({ "success": "success" });
                }
            });
        } catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
    findById(req: express.Request, res: express.Response): void {
        try {
            var id: string = req.params._id;
            var business = new AlbumBusiness();

            business.findById(id, (error, result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.json(result);
                }
            });
        } catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
    retrieve(req: express.Request, res: express.Response): void {
        try {
            var business = new AlbumBusiness();

            business.retrieve((error, result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.json(result);
                }
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
    update(req: express.Request, res: express.Response): void {
        try {
            var _id: string = req.params._id;
            var user: IAlbumModel = <IAlbumModel>req.body;
            var business = new AlbumBusiness();

            business.update(_id, user, (error, result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.json({ "success": "success" });
                }
            });
        } catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
}

export = AlbumController;