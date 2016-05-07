import {Component, OnInit} from "angular2/core";
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from "angular2/common";
import {RouterLink, RouteParams} from "angular2/router"
import {Routes, APP_ROUTES} from "./../../routes";

@Component({
    selector: "album-photos",
    styleUrls: ["app/components/albumPhotos/album-photos.component.css"],
    templateUrl: "app/components/albumPhotos/album-photos.component.html",
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, RouterLink]
})

export class AlbumPhotosComponent implements OnInit {
    private _albumsApi: string = "api/v1/albums";
    private _photosApi: string = "api/v1/photos";
    private _albumId: string;
    private _photos: Array<any>;
    private _routeParam: RouteParams;

    constructor(public routeParam: RouteParams) {
        this._routeParam = routeParam;
        console.log("Album Photos View Rendered!");
    }

    getAlbumPhotos(): void {

    }

    ngOnInit() { }
}