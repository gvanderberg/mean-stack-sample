import {Component, OnInit} from "angular2/core";
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from "angular2/common";
import {Router, RouterLink} from "angular2/router"
import {Routes, APP_ROUTES} from "./../../routes";
import {Paginated} from "./../../core/common/paginated";
import {DataService} from "./../../core/services/dataService";

@Component({
    selector: "albums",
    styleUrls: ["app/components/albums/albums.component.css"],
    templateUrl: "app/components/albums/albums.component.html",
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, RouterLink]
})

export class AlbumsComponent extends Paginated implements OnInit {
    private _albumsApi: string = "api/v1/albums";
    private _albums: Array<any>;
    private routes = Routes;

    constructor(public albumsService: DataService, public router: Router) {
        super(0, 0, 0);

        this.routes = Routes;

        albumsService.set(this._albumsApi, 3);

        this.getAlbums();
    }

    getAlbums(): void {
        this.albumsService.get(this._page).subscribe(res => {
            var data: any = res.json();
            this._albums = data.Items;
            this._page = data.Page;
            this._pagesCount = data.TotalPages;
            this._totalCount = data.TotalCount;
        }, err => {
            if (err.status == 401) {

            }
        });

        this._albums = new Array();
        this._albums.push({ "Id": 1, "Title": "Album 1", "Description": "XXX", "Thumbnail": "xxx" });
        this._albums.push({ "Id": 2, "Title": "Album 2", "Description": "YYY", "Thumbnail": "yyy" });
        this._albums.push({ "Id": 3, "Title": "Album 3", "Description": "XXX", "Thumbnail": "xxx" });
        this._albums.push({ "Id": 4, "Title": "Album 4", "Description": "YYY", "Thumbnail": "yyy" });
    }

    ngOnInit() { }
}