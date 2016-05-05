import { IChartModel } from "./interfaces/ChartModel"

export class ChartModel implements IChartModel {
    id: String;
    data: Object;
    height: Number;
    width: Number;

    constructor(config: Object) {
        this.id = config["id"];
        this.data = config["data"];
        this.height = config["height"] || 300;
        this.width = config["width"] || 600;
    }
}