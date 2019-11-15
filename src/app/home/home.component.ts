import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
employee;
msg;
  constructor(public service:DataService,public router:Router ) { 
    this.givedata()
  }

  ngOnInit() {
  }
  givedata()
  {
   let givemedata= this.service.getdata();
   givemedata.subscribe((result)=>{
this.employee=result;
   });
  }

  deletedata(no)
  {console.log(no);
let isdelete= this.service.delete(no);
isdelete.subscribe((result:any)=>{
if(result.affectedRows>0)
{
  this.givedata();
}else
{
  this.msg="something is wrong";
}
});
  }
  editdata(no)
{
  
}

gotoreg()
{
  this.router.navigate(['register']);
}
}
