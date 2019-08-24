import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { RestClientService } from '../rest-client.service';
var Tab1Page = /** @class */ (function () {
    function Tab1Page(service) {
        this.service = service;
    }
    Tab1Page.prototype.getMoviesQuestions = function () {
        // this.service.getAllAnswers()
        // .subscribe(
        //   (data) => {this.answers = data; console.log(this.answers);},
        //   (error) => {console.log(error);}    
        // )
        this.nav.navigateForward('MoviesQuizzPagePage');
    };
    Tab1Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab1',
            templateUrl: 'tab1.page.html',
            styleUrls: ['tab1.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [RestClientService])
    ], Tab1Page);
    return Tab1Page;
}());
export { Tab1Page };
//# sourceMappingURL=tab1.page.js.map