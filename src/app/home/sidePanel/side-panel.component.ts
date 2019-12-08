import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css']
})
export class SidePanelComponent implements OnInit {

  public divWidth: number = window.innerWidth;

  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit() {
  }

  private createNewPaper(){
    console.log("___createNewPaper()___");
  }

}
