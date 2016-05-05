import {Component, OnInit} from "angular2/core";

@Component({
    selector: "contact",
    styleUrls: ["app/components/contact/contact.component.css"],
    templateUrl: "app/components/contact/contact.component.html"
})

export class ContactComponent implements OnInit {
    constructor() {
        console.log("Contact View Rendered!");
    }

    ngOnInit() { }
}