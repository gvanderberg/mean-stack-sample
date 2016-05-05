import { IImageModel } from "./interfaces/ImageModel"

export class ImageModel implements IImageModel {
    url: String;

    constructor() {
        this.url = "http://";
    }
}