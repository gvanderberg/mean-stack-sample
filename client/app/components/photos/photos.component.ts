import {Component, OnInit} from "angular2/core";
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from "angular2/common";
import {Router, RouterLink} from "angular2/router"
import {Paginated} from "./../../core/common/paginated";

@Component({
    selector: "photos",
    styleUrls: ["app/components/photos/photos.component.css"],
    templateUrl: "app/components/photos/photos.component.html",
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, RouterLink]
})

export class PhotosComponent extends Paginated implements OnInit {
    private _photosApi: string = "api/photos/";
    private _photos: Array<any>;

    constructor() {
        super(0, 0, 0);

        console.log("Photos View Rendered!");
    }

    getPhotos(): void {
        this._photos = new Array();
        this._photos.push({});
    }

    ngOnInit() { }
}