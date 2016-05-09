import express = require("express");
import IBaseController = require("./interfaces/base/BaseController");
import IAlbumModel = require("./../models/interfaces/AlbumModel");
import AlbumBusiness = require("./../business/AlbumBusiness");

class AlbumController implements IBaseController<AlbumBusiness> {
    create(req: express.Request, res: express.Response): void {
        try {
            let data: IAlbumModel = <IAlbumModel>req.body;
            let business = new AlbumBusiness();

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
            let business = new AlbumBusiness();

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
            let business = new AlbumBusiness();

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
            let page: number = req.params.page;
            let pageSize: number = req.params.pageSize;
            let business = new AlbumBusiness();

            business.fetch(page, pageSize, (error, result) => {
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
            let data: IAlbumModel = <IAlbumModel>req.body;
            let business = new AlbumBusiness();

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

export = AlbumController;