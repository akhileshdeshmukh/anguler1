import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public service:DataService) { }

  ngOnInit() {
  }

adddata(e:any)
{
  let empl=e.form.value;
  console.log(empl);
let stateofresult=this.service.adddata(empl);
stateofresult.subscribe((result)=>{
  console.log(result);
});
}
}
