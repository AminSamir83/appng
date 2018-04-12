import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mailprotector',
  templateUrl: './mailprotector.component.html',
  styleUrls: ['./mailprotector.component.css']
})
export class MailprotectorComponent implements OnInit {
  mail: string;
  mailprotected: string ;

  protectmail (mail) {
    let name = '';
    let domain = '';
    let domain2 = '';
    let nameprotected = '';
    let domainprotected = '';
    if (this.isValide(mail) === false) { return (this.mailprotected = 'mail invalide'); } else {
      name   = mail.substring(0, mail.lastIndexOf('@'));
      domain = mail.substring( mail.lastIndexOf('@') + 1 , mail.lastIndexOf('.'));
      domain2 = mail.substring(mail.lastIndexOf('.') + 1);
      console.log( name );   // john.doe
      console.log( domain ); // email
      console.log( domain2 ); // com
       nameprotected = name.substr(0, 1);
       domainprotected = domain.substr(0, 1);
      for (let i = 1; i < name.length; i++) {nameprotected += '*'; }
      for (let i = 1; i < domain.length; i++) {domainprotected += '*'; }
      this.mailprotected = nameprotected + '@' + domainprotected + '.' + domain2;
    }

    return (this.mailprotected);
  }
  isValide (mail) {
    // tslint:disable-next-line:max-line-length
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (reg.test(mail));
  }
  constructor() { }

  ngOnInit() {
  }

}
