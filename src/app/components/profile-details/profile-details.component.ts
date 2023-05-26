import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../contact.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit{

  contacts: any[] = [];
  
  constructor(private contactService: ContactService) { }


  ngOnInit() {
    this.contactService.getContacts().subscribe((data:  any )=>{
      console.log(data);
       this.contacts = data;
      })
    }
}
