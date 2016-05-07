import {Component, OnInit} from "angular2/core";
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from "angular2/common";
import {Router, RouterLink} from "angular2/router"
import {Routes, APP_ROUTES} from "./../../routes";

@Component({
    selector: "albums",
    styleUrls: ["app/components/albums/albums.component.css"],
    templateUrl: "app/components/albums/albums.component.html",
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, RouterLink]
})

export class AlbumsComponent implements OnInit {
    private _albumsApi: string = "api/v1/albums";
    private _albums: Array<any>;
    private routes = Routes;

    constructor(public router: Router) {
        this.routes = Routes;
        this.getAlbums();
    }

    getAlbums(): void {
        this._albums = new Array<any>();
        this._albums.push({ "Title": "XXX", "Description": "XXX", "Thumbnail": "xxx" });
    }

    ngOnInit() { }
}