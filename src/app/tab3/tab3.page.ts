import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  nav  
  answers
  storageSession

  constructor (navController: NavController, private storage: Storage) {
    this.nav = navController;
    this.storageSession = storage;
  }
  
getSportsQuestions() {
   this.storageSession.set('questionId', 3);
   this.nav.navigateForward('quizz-questions');
 }

}
