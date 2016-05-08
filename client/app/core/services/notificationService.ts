import {Injectable} from "angular2/core";

declare let alert: any;

@Injectable()
export class NotificationService {
    private _notify: any = alert;

    constructor() { }

    printConfirmationDialog(message: string, okCallback: () => any) {
        this._notify.confirm(message, function (e) {
            if (e) {
                okCallback();
            } else {
            }
        });
    }

    printErrorMessage(message: string) {
        this._notify.error(message);
    }

    printSuccessMessage(message: string) {
        this._notify.success(message);
    }
}