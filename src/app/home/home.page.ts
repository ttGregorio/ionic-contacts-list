import { Component, OnInit } from '@angular/core';
import { Plugins } from "@capacitor/core";
const  { Contacts } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

 contacts:any[] = [];

  constructor() {}

  ngOnInit(){
    Contacts.getContacts().then(result => {
      console.log(result);

      for (const contact of result.contacts) {
        if(contact.phoneNumbers[0] != undefined){
           this.contacts.push(contact);
        }

//        alert(contact.displayName + '\n' + contact.phoneNumbers);
     }

      for (const contact of result.contacts) {
          alert(JSON.stringify(contact));
      }
  });
  }
}
