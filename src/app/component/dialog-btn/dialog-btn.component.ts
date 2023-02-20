import { Component } from '@angular/core';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-btn',
  templateUrl: './dialog-btn.component.html',
  styleUrls: ['./dialog-btn.component.scss']
})
export class DialogBtnComponent {
  constructor(private matDialog:MatDialog){}
  openDialog(){
    this.matDialog.open(DialogBodyComponent ,{
      width: '350px',
    });
  }
}
