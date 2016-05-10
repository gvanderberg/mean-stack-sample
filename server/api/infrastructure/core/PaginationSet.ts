class PaginationSet {
    constructor() {
        this._page = 0;
        this._totalCount = 0;
        this._totalPages = 0;
        this._items = new Array();
    }

    private _page: number;

    private _totalCount: number;

    private _totalPages: number;

    private _items: Array<any>;

    get count(): number {
        return this._items.length;
    }

    get page(): number {
        return this._page;
    }

    set page(value: number) {
        this._page = value;
    }

    get totalCount(): number {
        return this._totalCount;
    }

    set totalCount(value: number) {
        this._totalCount = value;
    }

    get totalPages(): number {
        return this._totalPages;
    }

    set totalPages(value: number) {
        this._totalPages = value;
    }

    get items(): Array<any> {
        return this._items;
    }

    set items(value: Array<any>) {
        this._items = value;
    }
}

export = PaginationSet;