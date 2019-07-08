import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toys',
  templateUrl: './toys.component.html',
  styleUrls: ['./toys.component.css']
})
export class ToysComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
toyscol=[
  {"id":1,
  "pic":'https://rukminim1.flixcart.com/image/612/612/jrwdyfk0/remote-control-toy/g/g/s/hx750-drone-2-6-ghz-6-channel-remote-control-quadcopter-stable-original-imafdhn8zhtfyrf2.jpeg?q=70'
},
{"id":2,
 "pic": 'https://rukminim1.flixcart.com/image/612/612/ju2z6a80/remote-control-toy/z/d/y/mini-racing-4-channel-radio-control-rc-car-red-miss-chief-original-imaff74ggzxjxgug.jpeg?q=70'
}
]
}
