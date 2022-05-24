import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { IUser } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService:UserService) { }

  public users:IUser[]=[];

  public k=false;
  // @Output() newItemEvent = new EventEmitter();
  // public email1:any;

  ngOnInit(): void {
    this.userService.users().subscribe((data)=>{
      this.users = data;
      console.log(this.users);
    });
  }

  deleteUser(data: any){
    console.warn(data);
    this.k=true;
    // this.email1=data.email;
    // this.newItemEvent.emit(this.k);
    this.userService.deleteUser(data).subscribe(
      (result)=>{console.warn(data);}
      );
    console.warn(data);
  }

}
