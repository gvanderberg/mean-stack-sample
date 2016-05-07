System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Paginated;
    return {
        setters:[],
        execute: function() {
            Paginated = (function () {
                function Paginated(page, pagesCount, totalCount) {
                    this._page = 0;
                    this._pagesCount = 0;
                    this._totalCount = 0;
                    this._page = page;
                    this._pagesCount = pagesCount;
                    this._totalCount = totalCount;
                }
                Paginated.prototype.range = function () {
                    if (!this._pagesCount) {
                        return [];
                    }
                    var step = 2;
                    var doubleStep = step * 2;
                    var start = Math.max(0, this._page - step);
                    var end = start + 1 + doubleStep;
                    if (end > this._pagesCount) {
                        end = this._pagesCount;
                    }
                    var ret = [];
                    for (var i = start; i != end; ++i) {
                        ret.push(i);
                    }
                    return ret;
                };
                ;
                Paginated.prototype.pagePlus = function (count) {
                    return +this._page + count;
                };
                Paginated.prototype.search = function (i) {
                    this._page = i;
                };
                ;
                return Paginated;
            }());
            exports_1("Paginated", Paginated);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3JlL2NvbW1vbi9wYWdpbmF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQUFBO2dCQUtJLG1CQUFZLElBQVksRUFBRSxVQUFrQixFQUFFLFVBQWtCO29CQUp6RCxVQUFLLEdBQVcsQ0FBQyxDQUFDO29CQUNsQixnQkFBVyxHQUFXLENBQUMsQ0FBQztvQkFDeEIsZ0JBQVcsR0FBVyxDQUFDLENBQUM7b0JBRzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO29CQUNsQixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztvQkFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7Z0JBQ2xDLENBQUM7Z0JBRUQseUJBQUssR0FBTDtvQkFDSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO3dCQUNwQixNQUFNLENBQUMsRUFBRSxDQUFDO29CQUNkLENBQUM7b0JBRUQsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO29CQUNiLElBQUksVUFBVSxHQUFHLElBQUksR0FBRyxDQUFDLENBQUM7b0JBQzFCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUM7b0JBQzNDLElBQUksR0FBRyxHQUFHLEtBQUssR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDO29CQUVqQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7d0JBQ3pCLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO29CQUMzQixDQUFDO29CQUVELElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztvQkFFYixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDO3dCQUNoQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNoQixDQUFDO29CQUVELE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ2YsQ0FBQzs7Z0JBRUQsNEJBQVEsR0FBUixVQUFTLEtBQWE7b0JBQ2xCLE1BQU0sQ0FBQyxDQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUNoQyxDQUFDO2dCQUVELDBCQUFNLEdBQU4sVUFBTyxDQUFDO29CQUNKLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQixDQUFDOztnQkFDTCxnQkFBQztZQUFELENBekNBLEFBeUNDLElBQUE7WUF6Q0QsaUNBeUNDLENBQUEiLCJmaWxlIjoiYXBwL2NvcmUvY29tbW9uL3BhZ2luYXRlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQYWdpbmF0ZWQge1xuICAgIHB1YmxpYyBfcGFnZTogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgX3BhZ2VzQ291bnQ6IG51bWJlciA9IDA7XG4gICAgcHVibGljIF90b3RhbENvdW50OiBudW1iZXIgPSAwO1xuXG4gICAgY29uc3RydWN0b3IocGFnZTogbnVtYmVyLCBwYWdlc0NvdW50OiBudW1iZXIsIHRvdGFsQ291bnQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9wYWdlID0gcGFnZTtcbiAgICAgICAgdGhpcy5fcGFnZXNDb3VudCA9IHBhZ2VzQ291bnQ7XG4gICAgICAgIHRoaXMuX3RvdGFsQ291bnQgPSB0b3RhbENvdW50O1xuICAgIH1cblxuICAgIHJhbmdlKCk6IEFycmF5PGFueT4ge1xuICAgICAgICBpZiAoIXRoaXMuX3BhZ2VzQ291bnQpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzdGVwID0gMjtcbiAgICAgICAgdmFyIGRvdWJsZVN0ZXAgPSBzdGVwICogMjtcbiAgICAgICAgdmFyIHN0YXJ0ID0gTWF0aC5tYXgoMCwgdGhpcy5fcGFnZSAtIHN0ZXApO1xuICAgICAgICB2YXIgZW5kID0gc3RhcnQgKyAxICsgZG91YmxlU3RlcDtcblxuICAgICAgICBpZiAoZW5kID4gdGhpcy5fcGFnZXNDb3VudCkge1xuICAgICAgICAgICAgZW5kID0gdGhpcy5fcGFnZXNDb3VudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZXQgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgIT0gZW5kOyArK2kpIHtcbiAgICAgICAgICAgIHJldC5wdXNoKGkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9O1xuXG4gICAgcGFnZVBsdXMoY291bnQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiArIHRoaXMuX3BhZ2UgKyBjb3VudDtcbiAgICB9XG5cbiAgICBzZWFyY2goaSk6IHZvaWQge1xuICAgICAgICB0aGlzLl9wYWdlID0gaTtcbiAgICB9O1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
