import IChartModel = require("./interfaces/ChartModel");

class ChartModel {
    data: Object;
    height: Number;
    width: Number;

    constructor(config: Object) {
        this.data = config["data"];
        this.height = config["height"] || 300;
        this.width = config["width"] || 600;
    }
}

export = ChartModel;