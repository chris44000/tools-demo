import { LightningElement, wire } from "lwc";
import getcontacts from "@salesforce/apex/ContactListController.getContacts";

export default class ContactList extends LightningElement {
  @wire(getcontacts)
  contacts;
}
