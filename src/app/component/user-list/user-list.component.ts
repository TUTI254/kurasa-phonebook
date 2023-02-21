import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private _userService: UsersService) { }

  ngOnInit(): void {
    this.getUserList();
  }
  getUserList(){
    this._userService.getUserList().subscribe({
      next: (res) => {
        console.log(res)
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
}
