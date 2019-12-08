import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public divHeight: number = window.innerHeight;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }
}
