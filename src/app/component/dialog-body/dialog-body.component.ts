import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.scss']
})
export class DialogBodyComponent {
  userForm: FormGroup;

  constructor(private _fb: FormBuilder) {
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
      console.log(this.userForm.value);
    }
  }


}
