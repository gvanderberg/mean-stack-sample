import express = require("express");
import IBaseController = require("./interfaces/base/BaseController");
import IPhotoModel = require("./../models/interfaces/PhotoModel");
import PhotoBusiness = require("./../business/PhotoBusiness");

class PhotoController implements IBaseController<PhotoBusiness> {
    create(req: express.Request, res: express.Response): void {
        try {
            var user: IPhotoModel = <IPhotoModel>req.body;
            var business = new PhotoBusiness();

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
            var business = new PhotoBusiness();

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
            var business = new PhotoBusiness();

            business.findById(id, (error, result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.json(result);
                    //res.send({ "success": "success" });
                }
            });
        } catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
    retrieve(req: express.Request, res: express.Response): void {
        try {
            var business = new PhotoBusiness();

            business.retrieve((error, result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.json(result);
                    //res.render("users/list", { title: "Photos", data: result });
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
            var user: IPhotoModel = <IPhotoModel>req.body;
            var business = new PhotoBusiness();

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

export = PhotoController;