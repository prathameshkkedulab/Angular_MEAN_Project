import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AccServiceService } from "../acc-service.service";
import { AccInfo } from "../acc-info";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  regForm: FormGroup;
  datasaved = false;
  message: String;

  constructor(private formbuilder: FormBuilder, private accservice: AccServiceService) { }

  ngOnInit() {
    this.setFormState();
  }

  // Validation For Fields
  setFormState(): void {
    this.regForm = this.formbuilder.group({
      Name: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      Password: ['', [Validators.required]]
    });
  }

   // Function for Submit
   onSubmit() {
    let userinfo = this.regForm.value;
    console.log(userinfo);
    this.createUserAccount(userinfo);
    this.regForm.reset();
  }

  //API JSON response result 
  createUserAccount(accinfo: AccInfo) {
    this.accservice.createAccount(accinfo).subscribe((respResult) => {
      // let resp = JSON.stringify(respResult);
      this.datasaved = true;
      this.message = respResult['msg'];
      this.regForm.reset();
    }
    )
  }

}
