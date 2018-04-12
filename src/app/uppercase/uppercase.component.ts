import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-uppercase',
  templateUrl: './uppercase.component.html',
  styleUrls: ['./uppercase.component.css']
})
export class UppercaseComponent implements OnInit {
  name: string;
  uppercase() {
    // tslint:disable-next-line:prefer-const
    let newname = '';
    // tslint:disable-next-line:whitespace
    // tslint:disable-next-line:max-line-length
    // const tab1 = ['a', 'b' , 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    // tslint:disable-next-line:max-line-length
    // const tab2 = ['A', 'B' , 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y' , 'Z'];
    for (let i = 0; i < this.name.length; i++) {
      const caracode = this.name.charCodeAt(i);
      // tslint:disable-next-line:whitespace
      if (caracode > 96 && caracode < 123) {
        newname += String.fromCharCode(caracode - 32);
      } else { newname += String.fromCharCode(caracode); }
    }
    this.name = newname;


  }

  constructor() { }

  ngOnInit() {
  }

}
