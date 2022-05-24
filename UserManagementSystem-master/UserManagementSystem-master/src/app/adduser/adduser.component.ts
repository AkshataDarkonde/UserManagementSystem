import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../user';
import { ConfirmedValidator } from './confirmed.validator';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  addForm:FormGroup=new FormGroup({});

  user: User = new User();

  constructor( private router: Router,private userService:UserService, private httpclient:HttpClient, private formBuild:FormBuilder) {
    this.addForm = formBuild.group({
    email: new FormControl('', [Validators.required,Validators.email,Validators.pattern('^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$',),]),
    password : new FormControl('',[Validators.required, Validators.minLength(5)]),
    confirmpassword:new FormControl('',[Validators.required, Validators.minLength(5)]),
    firstname : new FormControl('',[Validators.required]),
    lastname : new FormControl('',[Validators.required]),
    age : new FormControl('',[Validators.required]),
    role : new FormControl('',[Validators.required]),
  },
    {validator:ConfirmedValidator('password','confirmpassword')}
   )}
  
  public k=false;
  @Output() newItemEvent = new EventEmitter();
  public email1:any;

  ngOnInit(): void {
  }
  // addForm = new FormGroup({
  //   email: new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$',),]),
  //   password : new FormControl('',[Validators.required, Validators.minLength(5)]),
  //   confirmpassword:new FormControl('',[Validators.required, Validators.minLength(5)]),
  //   firstname : new FormControl(),
  //   lastname : new FormControl(),
  //   age : new FormControl(),
  //   role : new FormControl(),
  // })

  addUser(data:any){
    console.warn(data);
    if(data.password==data.confirmpassword)
    {
      this.k=true;
      // this.email1=data.email;
      // this.newItemEvent.emit(this.k);
      console.warn(data);
      this.userService.saveUser(data).subscribe((result)=>{
        console.warn(result);
      })
      // this.router.navigate(['success']);
    }
    else
    {
      alert("Enter valid information");
      // this.router.navigate(['adduser']);
    }
   }
   get email(){
    return this.addForm.get('email')
  }
  get confirmpassword(){
    return this.addForm.get('confirmpassword')
  }
  get password(){
    return this.addForm.get('password')
  }
  get f(){
    return this.addForm.controls;
  }

}
