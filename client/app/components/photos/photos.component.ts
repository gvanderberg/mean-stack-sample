import {Component, OnInit} from "angular2/core";

@Component({
    selector: "photos",
    styleUrls: ["app/components/photos/photos.component.css"],
    templateUrl: "app/components/photos/photos.component.html"
})

export class PhotosComponent implements OnInit {
    constructor() {
        console.log("Photos View Rendered!");
    }

    ngOnInit() { }
}