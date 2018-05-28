import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AdminService} from './../../services/admin.service';
import { CanActivate, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newRegister={ 
  email:'',
  pswrepeat: '',
  psw:'',
 }
  constructor( private adminService : AdminService,
    private routes: Router) { }

  ngOnInit() {
  }
  addRegister(newRegister){
    console.log(newRegister)
    this.adminService.getRegister(this.newRegister).subscribe(data => {
      console.log(data)
    })
  }
}
