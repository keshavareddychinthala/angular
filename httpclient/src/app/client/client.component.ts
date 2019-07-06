import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
 kk={
   "name":"keshava",
   "salary":45445,
   "domain" :"spring"
 }
 r;
  name: any;
  id: any;
  constructor(private ht:HttpClient) { }
  uname;
  salary;
  domain;
  k:boolean=false;
  ngOnInit() {
    this.ht.get("http://localhost:3000/users").subscribe((e)=>{console.log(e)
      this.r=e;}
        )
    // this.ht.post("http://localhost:3000/users",this.kk).subscribe(f=>console.log(f))
    // this.ht.delete("http://localhost:3000/users/6").subscribe(g=>console.log(g))
  }
  fb(v) {
   this.ht.delete(`http://localhost:3000/users/${v}`).subscribe((f)=>{console.log(f)
  if(f) {
    this.ht.get("http://localhost:3000/users/").subscribe(w=>{console.log(w),this.r=w})
  }
  });
  }
  fs(v) {
    
    this.k=true;
    this.id=v.id;
    this.name=v.name;
    this.salary=v.salary;
    this.domain=v.domain;
    
   }
   ff() {
    
   }



  //  let copy = Object.assign({}, myObject)
  // {
  //   "name":this.name,
  //   "salary":this.salary,
  //   "domain" :this.domain,
  // }



   gh(o) {

    // let copy=Object.assign({}, o);
    console.log(o);
// var newob={name:o.name,salary:o.salary,domain:o.domain
// }
    this.ht.put("http://localhost:3000/users/"+o.id,o).subscribe(g=>{console.log(g)
   if(g) {
     this.ht.get("http://localhost:3000/users/").subscribe(w=>{console.log(w),this.r=w})
   }
  }
  );
   }
   kl() {
    this.ht.post("http://localhost:3000/users",this.kk).subscribe((f)=>{console.log(f)
    if(f) {
      this.ht.get("http://localhost:3000/users/").subscribe((w)=>{console.log(w),this.r=w})
    }
  
  })
   }
}
