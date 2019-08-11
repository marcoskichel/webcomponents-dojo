import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor() { }

  @Input() title;
  @Input() content;

  showing = false;

  ngOnInit() {
  }

  toggle(): void{
    this.showing = !this.showing;
  }

}
