import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.scss']
})
export class DialogBodyComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _usersService: UsersService,
    private _dialogRef: MatDialogRef<DialogBodyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any // this is the data passed from the parent component

    ) {
    this.userForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      dob: '',

    });
  }

  ngOnInit(): void {
    this.userForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.userForm.valid) {
      if(this.data){
        this._usersService.updateUser(this.data.id,this.userForm.value).subscribe({
          next: (val: any) =>{
            alert('User Added to Updated!');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }else{
        this._usersService.addUser(this.userForm.value).subscribe({
          next: (val: any) =>{
            alert('User Added to Phonebook Successfully!');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }


}
