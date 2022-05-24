import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';
import { IUser, User } from '../user';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  constructor(private router:Router,public loginService:AuthenticationService) { }

  ngOnInit(): void {
  }



}
