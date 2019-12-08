import { Component, OnInit, Input } from '@angular/core';
import { PaperModel } from '../paper-model';
import { QuestionModel } from '../../question/question-model';
import { SharedService } from 'src/app/shared/shared.service';
import { TranslateService } from '@ngx-translate/core';
import { QuestionService } from '../../question/question.service';
import { WsResponse } from 'src/app/util/ws-response';
import { WsType } from 'src/app/util/ws-type';
import { LoadingService } from 'src/app/util/loading/loading.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { KeyboardComponent } from 'src/app/util/keyboard/keyboard.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-paper',
  templateUrl: './create-paper.component.html',
  styleUrls: ['./create-paper.component.css']
})
export class CreatePaperComponent implements OnInit {

  private paper: {id: string, data: PaperModel};

  private questionList: {id: string, data: QuestionModel}[] = [];

  private isShowPaperDetail: boolean = false;
  private isShowQuestion: boolean = false;

  private width;

  constructor(
    private sharedService: SharedService,
    private translate: TranslateService,
    private questionService: QuestionService, 
    private loadingService: LoadingService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {

    // Add Dummy Details
    this.addDummyDetails();
    this.sharedService.loadPaperWithDataRespond().subscribe(res => {
      this.paper = res.paper;
      this.questionService.getQuestionByPaperId(this.paper.id, this);
    })
    // this.sharedService.changeCreatePaperWidthRespond().subscribe(res =>{
    //   this.width = res.data;
    // })
  }

  private openKeyboard(curentText: string, isArray: boolean, variable: any, index: number, path: string) {    
    console.log("___openKeyboard()___");
    const modalRef = this.modalService.open(KeyboardComponent);

    modalRef.componentInstance.text = curentText;

    let modalText: string;

    let modalSubscription: Subscription = modalRef.componentInstance.modalText.subscribe(res =>{
      console.log(res);
      modalText = res;

      if(isArray){
        if(path!=undefined){
          let path_var = path.split('.');
          let length = path_var.length;
          switch(length){
            case 1:{
              modalText!=undefined? variable[index][path_var[0]] = modalText: variable = curentText;
              break;
            }
            case 2:{
              modalText!=undefined? variable[index][path_var[0]][path_var[1]] = modalText: variable = curentText;
              break;
            }
            case 3:{
              modalText!=undefined? variable[index][path_var[0]][path_var[1]][path_var[2]] = modalText: variable = curentText;
              break;
            }
          }
        }
      }
      else{
        modalText!=undefined? variable = modalText: variable = curentText;
      }
      modalSubscription.unsubscribe();
    });
  }

  private addDummyDetails(){
    this.addDummyPaper();
    this.addDummyQuestions();
  }

  private addDummyPaper(){
    this.paper = {
      id: "0",
      data: {
        name: "Model Paper XX",
        year: "2019",
        instructor: "XXXXXXXXXX",
        subject: "XXXXXXXXXX",
        no_of_questions: 50,
        added_questions: 0,
        time: "60",
        questions: "",
        price: ""
      }
    }
  }



  private addDummyQuestions(){
    for (let index = 0; index < 5; index++) {
      let question: {id: string, data: QuestionModel};
      question = {
        id: index.toString(),
        data: {
          subject: "Maths",
          instructor: "Erantha Welikala",

          question: "What is the sum of (square of 2, root of 16)",

          a: "8",
          b: "12",
          c: "20",
          d: "6",
          e: "2",

          answer: "A",

          paper: "", 
          number: index.toString(),
          
          image: false,
          image_url: "",
          metadata: ""
        }
      }
      this.questionList.push(question);      
    }    
  }

  onSuccess(data: WsResponse, serviceType: WsType){
    if(serviceType == WsType.GET_QUESTIONS_BY_PAPER_ID){
      this.questionList = data.payload;
      this.loadingService.hideLoading(serviceType);
    }
  }

  onFail(data: WsResponse, serviceType:WsType){
    if(serviceType == WsType.GET_QUESTIONS_BY_PAPER_ID){
      this.loadingService.hideLoading(serviceType);
    }
  }

}
