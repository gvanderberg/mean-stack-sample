import {Component, OnInit} from "angular2/core";

@Component({
    selector: "about",
    styleUrls: ["app/components/about/about.component.css"],
    templateUrl: "app/components/about/about.component.html"
})

export class PhotosComponent implements OnInit {
    constructor() {
        console.log("About View Rendered!");
    }

    ngOnInit() { }
}