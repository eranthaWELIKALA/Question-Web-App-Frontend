import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private openAlert(){
    alert("AddQuestionPageComponent");
  }

}
