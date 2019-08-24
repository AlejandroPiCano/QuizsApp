import { Component, OnInit } from '@angular/core';
import { RestClientService } from '../rest-client.service';
import { Storage } from '@ionic/storage';
// import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-quizz-questions',
  templateUrl: './quizz-questions.page.html',
  styleUrls: ['./quizz-questions.page.scss'],
})
export class QuizzQuestionsPage implements OnInit {
//variables
  Questions
  CurrentQuestion = {description: ""}
  CurrentAnswers
  QuestionTypeTitle = ""
  QuestionTypeId
  QuestionIndex = 0
  Storage

  constructor (private service: RestClientService, private storage: Storage) {
    this.Storage = storage;
  }
  
getAnswers()
{
  this.service.getAnswersByQuestionId(this.CurrentQuestion.questionId)
            .subscribe(
              (answers) => 
              {
                this.CurrentAnswers = answers;
                console.log(this.CurrentAnswers);
              })
}
  evaluateQuestion(answer){
    this.QuestionIndex += 1;
    this.CurrentQuestion = this.Questions[this.QuestionIndex];
    this.getAnswers();
  }

  ngOnInit() {
    this.Storage.get('questionId').then((questionId) => {
      this.QuestionTypeId = questionId;
      this.service.getQuestionTypeById(this.QuestionTypeId)
      .subscribe(
        (data) => {
           this.Questions = data.questions;
           this.CurrentQuestion = this.Questions[this.QuestionIndex];
           this.QuestionTypeTitle = data.description;

           console.log(this.CurrentQuestion);

           this.getAnswers();
        },
        (error) => {console.log(error);}    
      )
    });
   }

}
