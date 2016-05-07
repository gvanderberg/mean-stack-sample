import {Component, OnInit} from "angular2/core";
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from "angular2/common";
import {RouterLink, RouteParams} from "angular2/router"
import {Routes, APP_ROUTES} from "./../../routes";
import {Paginated} from "./../../core/common/paginated";
import {DataService} from "./../../core/services/dataService";

@Component({
    selector: "album-photos",
    styleUrls: ["app/components/albumPhotos/album-photos.component.css"],
    templateUrl: "app/components/albumPhotos/album-photos.component.html",
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, RouterLink]
})

export class AlbumPhotosComponent extends Paginated implements OnInit {
    private _albumsApi: string = "api/v1/albums/";
    private _photosApi: string = "api/v1/photos/";
    private _albumId: string;
    private _albumTitle: string;
    private _photos: Array<any>;
    private _routeParam: RouteParams;

    constructor(public dataService: DataService, public routeParam: RouteParams) {
        super(0, 0, 0);

        dataService.set(this._albumsApi, 12);

        this._routeParam = routeParam;
        this._albumId = this._routeParam.get("id");
        this._albumsApi += this._albumId + "/photos/";

        this.getAlbumPhotos();

        console.log("Album Photos View Rendered!");
    }

    convertDateTime(date: Date) {
        return date;
    }

    getAlbumPhotos(): void {
        this._albumTitle = "XXX";
        this._photos = new Array();
        this._photos.push({ "DateUploaded": "01 Jan 2016", "Title": "A:XX", "Uri": "aaa" });
        this._photos.push({ "DateUploaded": "02 Jan 2016", "Title": "B:XX", "Uri": "bbb" });
        this._photos.push({ "DateUploaded": "03 Jan 2016", "Title": "C:XX", "Uri": "ccc" });
        this._photos.push({ "DateUploaded": "04 Jan 2016", "Title": "D:XX", "Uri": "ddd" });
        this._photos.push({ "DateUploaded": "05 Jan 2016", "Title": "E:XX", "Uri": "eee" });
    }

    ngOnInit() { }
}