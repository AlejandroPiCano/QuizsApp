import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MoviesQuizzPagePage } from './movies-quizz-page.page';
var routes = [
    {
        path: '',
        component: MoviesQuizzPagePage
    }
];
var MoviesQuizzPagePageModule = /** @class */ (function () {
    function MoviesQuizzPagePageModule() {
    }
    MoviesQuizzPagePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [MoviesQuizzPagePage]
        })
    ], MoviesQuizzPagePageModule);
    return MoviesQuizzPagePageModule;
}());
export { MoviesQuizzPagePageModule };
//# sourceMappingURL=movies-quizz-page.module.js.map