import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var $:any;
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})

export class ClientComponent implements OnInit {

  details: Object;
  result: Object;
  status: boolean=false;
  resultedit: any;
  resultbody: any;
  resultprice: any;
  resultduration: any;
  resultid: any;

  constructor(private ht:HttpClient) { }

  ngOnInit() {
    this.ht.get("http://localhost:3000/comments")
    .subscribe(dat=>this.details=dat)
    
  }
  write()
  {
    var obj={
"body":"httpclient"
    }
   this.ht.post("http://localhost:3000/comments",obj)
   .subscribe(res=>console.log(res));
  }
  edit(editdata)
  {

    // this.status=true;
    console.log(editdata.body);
    this.resultid=editdata.id;
    this.resultbody=editdata.body;
    this.resultprice=editdata.price;
    this.resultduration=editdata.duration;
    // this.ht.put("http://localhost:3000/comments/1",
    // {
    //   "body":"angular"
    // }).subscribe(res=>console.log(res));
  } 
  sub(d)
  {

    console.log(d);

  
//     var newobj={
// body:d.body,
// price:d.price,
// duration:d.duration
//     }
// console.log(newobj);
this.ht.put("http://localhost:3000/comments/"+d.id,d)
.subscribe(res=>{console.log(res);
if(res){
  this.ht.get("http://localhost:3000/comments/").subscribe(res=>this.details=res)
}});
$('#myModal').close();
  }
  delete(val)
  {
    console.log(val);

    // this.ht.delete("http://localhost:3000/comments/"+val)
    // .subscribe(res=>console.log(res));

    this.ht.delete(`http://localhost:3000/comments/${val}`)
    .subscribe(res=>{console.log(res);
    if(res)
    {
      this.ht.get("http://localhost:3000/comments")
      .subscribe(rest=>{
        
    console.log(rest);
    this.details=rest;

  
  })
    }
    
    
    });
    
  
  }
//   update(d){
//     this.ht.put("http://localhost:3000/comments/"+d.id,{
      
//     })
// .subscribe(res=>{console.log(res)
//   res;
// if(res){
//   this.ht.get("http://localhost:3000/comments/").subscribe(res=>this.details=res)
// }});
//   }

  }

