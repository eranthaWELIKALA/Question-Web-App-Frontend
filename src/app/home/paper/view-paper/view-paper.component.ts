import { Component, OnInit } from '@angular/core';
import { PaperModel } from '../paper-model';
import { PaperService } from '../paper.service';
import { WsResponse } from 'src/app/util/ws-response';
import { WsType } from 'src/app/util/ws-type';
import { LoadingService } from 'src/app/util/loading/loading.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-view-paper',
  templateUrl: './view-paper.component.html',
  styleUrls: ['./view-paper.component.css']
})
export class ViewPaperComponent implements OnInit {

  private papers: {id: string, data: PaperModel}[] = [];
  private displayedColumns: string[] = ['name', 'year', 'load'];

  constructor(
    private loadingService: LoadingService,
    private sharedService: SharedService,
    private paperService: PaperService
  ) { }

  ngOnInit() {
    //this.addDummyPapers();
    this.paperService.getPapers(this); 
  }

  private addDummyPapers(){
    for (let index = 0; index < 5; index++) {
      let paper: {id: string, data: PaperModel};
      paper = {
        id: index.toString(),
        data: {
          name: "Model Paper " + (index+1),
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
      this.papers.push(paper);      
    }    
  }

  loadPaper(paper: PaperModel){
    this.sharedService.loadPaperWithDataRequest(paper);
  }


  onSuccess(data: WsResponse, serviceType:WsType){
    if(serviceType == WsType.GET_ALL_PAPERS){
      this.papers = data.payload;
      this.loadingService.hideLoading(serviceType);
    }
  }

  onFail(data: WsResponse, serviceType:WsType){
    if(serviceType == WsType.GET_ALL_PAPERS){
      this.loadingService.hideLoading(serviceType);
    }
  }

}
