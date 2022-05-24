import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user2:any;

  url = "https://jsonplaceholder.typicode.com/todos/1";
  constructor(private http : HttpClient) { }

  user(){
    return this.http.get(this.url);
   }
 
  users1() :Observable<IUser[]>{
     return this.http.get<IUser[]>("/assets/user.json");
   }
  //   saveUser(data : any){
  //   const httpOptions = { headers:new HttpHeaders({ 'Content-Type':'application/json; charset=UTF-8'})};
  //   data = JSON.stringify(data)
  //   return this.http.post("/assets/user.json",data,httpOptions);
  // }


  saveUser(data : any){
    const httpOptions = { headers:new HttpHeaders({ 'Content-Type':'application/json; charset=UTF-8'})};
    data = JSON.stringify(data)
    return this.http.post("http://localhost:8080/adduser",data,httpOptions);
  }
  users():Observable<IUser[]>{
    return this.http.get<IUser[]>("http://localhost:8080/getallusers");
  }
  // users(){
  //   let response=this.http.get("http://localhost:8080/getAllUsers");
  //   response.subscribe((data)=>this.user2=data);
  // }
  deleteUser(data:any){
    // const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json; charset=UTF-8'})}
    // data=JSON.stringify(data)
    return this.http.delete("http://localhost:8080/deleteuser?userId=" + data);
  }
}
