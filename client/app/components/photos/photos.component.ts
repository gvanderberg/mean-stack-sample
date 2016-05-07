import {Component, OnInit} from "angular2/core";
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from "angular2/common";
import {Router, RouterLink} from "angular2/router"
import {Paginated} from "./../../core/common/paginated";
import {DataService} from "./../../core/services/dataService";

@Component({
    selector: "photos",
    styleUrls: ["app/components/photos/photos.component.css"],
    templateUrl: "app/components/photos/photos.component.html",
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, RouterLink]
})

export class PhotosComponent extends Paginated implements OnInit {
    private _photosApi: string = "api/v1/photos/";
    private _photos: Array<any>;

    constructor(public dataService: DataService) {
        super(0, 0, 0);

        dataService.set(this._photosApi, 12);

        console.log("Photos View Rendered!");
    }

    getPhotos(): void {
        this._photos = new Array();
        this._photos.push({});
    }

    ngOnInit() { }
}