import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../user';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {

  delForm:FormGroup|any;

  user: User = new User();

  constructor(private userService:UserService) {
    this.delForm=new FormGroup({
      userId:new FormControl('',[Validators.required]),
    });
   }

  public k=false;
  public email1:any;
  @Output() newItemEvent = new EventEmitter();

  ngOnInit(): void {
  }
  // delForm=new FormGroup({
  //   id:new FormControl('',[Validators.required])
  // })

  deleteUser(data: any){
    console.warn(data);
    this.k=true;
    this.email1=data.email;
    this.newItemEvent.emit(this.k);
    this.userService.deleteUser(data.userId).subscribe(
      (result)=>{console.warn(data);}
      );
    console.warn(data);
  }

  get userId(){
    return this.delForm.get('userId')
  }
}
