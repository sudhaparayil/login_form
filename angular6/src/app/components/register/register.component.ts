import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AdminService} from './../../services/admin.service';
import { CanActivate, Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newRegister={ name:'',
  email:'',
  address: '',
  psw:'',
  gender:'',
  photoSrc:'',
  imgFile:[]
 }
 constructor( private adminService : AdminService,
  private routes: Router) { }

ngOnInit() {
}
displayPhoto(fileInput){
  
  var ext = fileInput.target.files[0].name.split('.').pop().toLowerCase();
  if (['gif','png','jpg','jpeg'].indexOf(ext) < 0) {
   // fileInput.target.files.remove(0);
  
    this.newRegister.photoSrc = '';
    alert('Please select a valid image [ jpg | jpeg | gif | png ]');
    return false;
  }
  //this.newUser.imgFile =ext;
  console.log(fileInput);
  this.newRegister.imgFile = fileInput.target.files[0];
  
  if (fileInput.target.files && fileInput.target.files[0]) {
    const reader = new FileReader();
  
    reader.onload = ((e) => {
      this.newRegister.photoSrc = e.target['result'];
    });
  
    reader.readAsDataURL(fileInput.target.files[0]);
  }
}
addRegister(newRegister){
  console.log(newRegister)
  this.adminService.getRegister(this.newRegister).subscribe(data => {
    console.log(data)
  })
}

}
