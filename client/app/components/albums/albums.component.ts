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
    private _albumsApi: string = "api/v1/albums/";
    private _albums: Array<any>;
    private routes = Routes;

    constructor(public dataService: DataService) {
        super(0, 0, 0);

        dataService.set(this._albumsApi, 3);

        this.getAlbums();

        console.log("Albums View Rendered!");
    }

    convertDateTime(date: Date) {
        return date;
    }

    getAlbums(): void {
        this.dataService.get(this._page).subscribe(res => {
            let data: any = res.json();

            this._albums = data; //.Items;
            this._page = data.Page;
            this._pagesCount = data.TotalPages;
            this._totalCount = data.TotalCount;
        }, err => {
            if (err.status == 401) {

            }
        });
    }

    ngOnInit() { }
}