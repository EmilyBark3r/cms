import { Component } from '@angular/core';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactItemComponent } from './contact-item/contact-item.component';
import { Contact } from './contact.model';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [ContactListComponent, ContactDetailComponent, ContactItemComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  contacts: Contact[] = [
    new Contact("1", "R. Kent Jackson", "jacksonk@byui.edu", "208-496-3771", "../../assets/images/jacksonk.jpg", null),
    new Contact("2", "Rex Barzee", "barzeer@byui.edu", "208-496-3768", "../../assets/images/barzeer.jpg", null),
  ];
  // selectedContact: contact;
}
