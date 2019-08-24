import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  nav  
  answers
  storageSession

  constructor (navController: NavController, private storage: Storage) {
    this.nav = navController;
    this.storageSession = storage;
  }

  
getMoviesQuestions() {
   this.storageSession.set('questionId', 1);
   this.nav.navigateForward('quizz-questions');
 }
}
