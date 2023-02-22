import { Component,OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-grid-list',
  templateUrl: './user-grid-list.component.html',
  styleUrls: ['./user-grid-list.component.scss']
})
export class UserGridListComponent {
   users!: any [] ;

  constructor( private _userService: UsersService, private _dialog:MatDialog,) { }
 ngOnInit() {
   this.getUserList();
  }
  openDialog(){
    const dialogRef = this._dialog.open(DialogBodyComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val){
          this.getUserList();
        }
      },
    });
  }
  getUserList(){
    this._userService.getUserList().subscribe({
      next: (res) => {
        this.users = res;
      },
      error:(err)=>{
        console.log(err)
      }
    });
  }

  deleteUser(id: number){
    this._userService.deleteUser(id).subscribe({
      next: (res) => {
        alert('User deleted successfully');
        this.getUserList();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  openEditDialog(data: any){
    const dialogRef = this._dialog.open(DialogBodyComponent,{
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val){
          this.getUserList();
        }
      },
    });
  }
}



