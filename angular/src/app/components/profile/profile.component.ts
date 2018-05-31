import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AdminService} from './../../services/admin.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user={name:'',email:'',password:'',photo:{data:'',contentType:''}};
  tmplogoSrc:any;
  id:any;
  siteUrl = "http://localhost:3000";
  constructor(
    private routes: Router,private _activatedRoute: ActivatedRoute,private adminService : AdminService) {
      
     }

  ngOnInit() {
this.getData();
  }

getData(){
  this._activatedRoute.params.subscribe((params) => {
    this.id = params['id'];
// console.log(this.id)    
  });
  this.adminService.getoneuser(this.id).subscribe(data=>{
    this.user=data;
     console.log(data)

    console.log(data.file_name)
    if(data.file_name){
      this.tmplogoSrc = this.siteUrl + '/admin/getphoto/' + data.file_name ;
    }if(data.thumbnail){
      this.tmplogoSrc = data.thumbnail;
    }
    else{
      this.tmplogoSrc = "assets/image/Sunflower.jpeg";
    }
    console.log(this.tmplogoSrc)    
  })
}
logout(){
  this.adminService.logout().subscribe(data=>{
    if(data.value==true){
      this.routes.navigate(['/login']); 
    }
  })  
}
}
