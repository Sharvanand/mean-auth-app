import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name:String;
  email:String;
  username:String;
  password:String;

  constructor(private validateService:ValidateService) { }

  ngOnInit() {
  }
   
  onRegisterSubmit(){
    const user = {
      name:this.name,
      email:this.email,
      username:this.username,
      password:this.password
    }
    // Validate Register
    if(!this.validateService.validateRegister(user)){
      console.log("Please fill all  fields..")
      return false;
    }
    if(!this.validateService.validateEmail(user.email)){
      console.log("Please enter valid email..");
      return false;
    }
  }

}
