import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'phone', 'address', 'dob', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private _userService: UsersService,
    private _dialog:MatDialog
    ) { }

  ngOnInit(): void {
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
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      },
      error:(err)=>{
        console.log(err)
      }
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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
