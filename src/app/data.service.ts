import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient) { }
getdata()
{
  return this.http.get("http://localhost:5000/employees");
}

delete(n)
{
  return this.http.delete("http://localhost:5000/employees/"+n);
}

adddata(empobj:any)
{console.log(empobj);
  return this.http.post("http://localhost:5000/employees",empobj);
}
}
