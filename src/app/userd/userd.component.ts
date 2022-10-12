import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userd',
  templateUrl: './userd.component.html',
  styleUrls: ['./userd.component.css']
})
export class UserdComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }



fetchData=()=>{
  this.myapi.viewuserd().subscribe(
    (data)=>{
      this.userData=data
    }
  )
}


  userData:any={}
  
  ngOnInit(): void {
  }

}
