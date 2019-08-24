import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var RestClientService = /** @class */ (function () {
    function RestClientService(http) {
        this.http = http;
        this.prodUrlServices = "https://quizzappapi20190821081301.azurewebsites.net/api/";
        this.urlServices = "https://localhost:44366/api/";
    }
    RestClientService.prototype.getAllAnswers = function () {
        return this.http.get(this.urlServices + "answers");
    };
    RestClientService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], RestClientService);
    return RestClientService;
}());
export { RestClientService };
//# sourceMappingURL=rest-client.service.js.map