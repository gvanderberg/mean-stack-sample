import express = require("express");
import IBaseController = require("./interfaces/base/BaseController");
import IPhotoModel = require("./../models/interfaces/PhotoModel");
import PhotoBusiness = require("./../business/PhotoBusiness");

class PhotoController implements IBaseController<PhotoBusiness> {
    create(req: express.Request, res: express.Response): void {
        try {
            let data: IPhotoModel = <IPhotoModel>req.body;
            let business = new PhotoBusiness();

            business.create(data, (error, result) => {
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
            let id: string = req.params._id;
            let business = new PhotoBusiness();

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
            let id: string = req.params._id;
            let business = new PhotoBusiness();

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
            let business = new PhotoBusiness();

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
            let id: string = req.params._id;
            let data: IPhotoModel = <IPhotoModel>req.body;
            let business = new PhotoBusiness();

            business.update(id, data, (error, result) => {
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