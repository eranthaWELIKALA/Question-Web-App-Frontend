import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {

  @Input() text: string;
  @Output() modalText: EventEmitter<any> = new EventEmitter();

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

  private sendTextBack(){
    this.modalText.emit(this.text);
  }

}
