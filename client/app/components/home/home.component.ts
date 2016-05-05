import {Component, OnInit} from "angular2/core";

@Component({
    selector: "home",
    styleUrls: ["app/components/home/home.component.css"],
    templateUrl: "app/components/home/home.component.html"
})

export class HomeComponent implements OnInit {
    constructor() {
        console.log("Home View Rendered!");
    }

    ngOnInit() { }
}