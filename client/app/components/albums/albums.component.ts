import {Component, OnInit} from "angular2/core";
import {Router, RouterLink} from "angular2/router"
import {DataService} from "./../../core/services/dataService";
import {Routes, APP_ROUTES} from "./../../routes";

@Component({
    selector: "albums",
    styleUrls: ["app/components/albums/albums.component.css"],
    templateUrl: "app/components/albums/albums.component.html"
})

export class AlbumsComponent implements OnInit {
    private _albumsApi: string = "api/v1/albums";
    private routes = Routes;

    constructor(public albumsService: DataService, public router: Router) {
        this.routes = Routes;
        albumsService.set(this._albumsApi, 3);
    }

    ngOnInit() { }
}