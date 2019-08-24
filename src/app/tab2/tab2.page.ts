import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  nav  
  answers
  storageSession

  constructor (navController: NavController, private storage: Storage) {
    this.nav = navController;
    this.storageSession = storage;
  }
  
  getMusicQuestions() {
    this.storageSession.set('questionId', 2);
    this.nav.navigateForward('quizz-questions');
  }
}
