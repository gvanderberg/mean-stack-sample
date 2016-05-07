import {Http, Response, Request} from "angular2/http";
import {Injectable} from "angular2/core";

@Injectable()
export class DataService {
    public _pageSize: number;
    public _baseUri: string;

    constructor(public http: Http) {

    }

    set(baseUri: string, pageSize?: number): void {
        this._baseUri = baseUri;
        this._pageSize = pageSize;
    }

    get(page: number) {
        //var uri = this._baseUri;
        var uri = this._baseUri + page.toString() + "/" + this._pageSize.toString();

        return this.http.get(uri).map(res => (<Response>res));
    }

    post(data?: any, mapJson: boolean = true) {
        if (mapJson) {
            return this.http.post(this._baseUri, data).map(res => <any>(<Response>res).json());
        }
        else {
            return this.http.post(this._baseUri, data);
        }
    }

    delete(id: number) {
        return this.http.delete(this._baseUri + "/" + id.toString()).map(res => <any>(<Response>res).json())
    }

    deleteResource(resource: string) {
        return this.http.delete(resource).map(res => <any>(<Response>res).json())
    }
}