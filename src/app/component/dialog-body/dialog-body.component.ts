import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.scss']
})
export class DialogBodyComponent {
  userForm: FormGroup;

  constructor(private _fb: FormBuilder, private _usersService: UsersService, private _dialogRef: DialogRef<DialogBodyComponent>) {
    this.userForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      dob: '',

    });
  }
  onFormSubmit() {
    if (this.userForm.valid) {
      this._usersService.addUser(this.userForm.value).subscribe({
        next: (val: any) =>{
          alert('User Added to Phonebook Successfully!');
          this._dialogRef.close();
        },
        error: (err: any) => {
          console.error(err);
        },
      })
    }
  }


}
