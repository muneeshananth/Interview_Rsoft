import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-registerlist',
  templateUrl: './registerlist.component.html',
  styleUrls: ['./registerlist.component.css']
})
export class RegisterlistComponent implements OnInit {
  
  Userdata:any=[];

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
    this.Userdata=JSON.parse(localStorage.getItem('Userdata'));
  }
editdetails(data,i){
  localStorage.setItem('Editdata',JSON.stringify(data));
  localStorage.setItem('i',JSON.stringify(i));
  this.router.navigate(['/register'])
}
Delete(i){
  this.Userdata.splice(i,1);  
  localStorage.setItem("Userdata",JSON.stringify(this.Userdata));
}
backnav(){
  localStorage.removeItem('Editdata');
  this.router.navigate(['/register'])
}
}
