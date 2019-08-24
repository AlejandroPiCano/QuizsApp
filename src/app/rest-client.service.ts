import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestClientService {

  constructor(public http: HttpClient) { }
  prodUrlServices = "https://quizzappapi20190821081301.azurewebsites.net/api/"
  urlServices = "https://localhost:44366/api/"

  getQuestionTypeById(questionTypeId: number) {
    return this.http.get(this.urlServices + "QuestionTypes/" + questionTypeId);
  }
  getAnswersByQuestionId(questionId: number) {
    return this.http.get(this.urlServices + "Questions/" + questionId + "/Answers");
  }
}
