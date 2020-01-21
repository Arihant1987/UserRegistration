import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

class Registration {
  constructor(
    public firstName: String = "",
    public lastName: String = "",
    public dob: NgbDateStruct = null,
    public email: String = "xyz@gmail.com",
    public password: String = "",
    public country: String = "Select country"
  ) {}
}; 

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})



export class RegistrationComponent implements OnInit {
  registrations: Registration[] = [];
  regModel: Registration;
  // It maintains registration form display status. By default it will be false.
  showNew: Boolean = false;
  // It will be either 'Save' or 'Update' based on operation.
  submitType: String = 'Save';
  // It maintains table row index based on selection.
  rowIndex: number ;
  // It maintains Array of countries.
  countries: String[] = ['India','US','UK','Japan'];


  constructor() {
    this.registrations.push(new Registration('Vivek','Kumar',{year: 1980, month: 5, day: 12}, 'johan@gmail.com', 'johan123', 'UK'));
    this.registrations.push(new Registration('Mohamed', 'Tariq', {year: 1975, month: 12, day: 3}, 'tariq@gmail.com', 'tariq123', 'UAE'));
    this.registrations.push(new Registration('Nirmal', 'Kumar', {year: 1970, month: 7, day: 25}, 'nirmal@gmail.com', 'nirmal123', 'India'));
  }

  ngOnInit() {
  }

  // This method associate to New Button.
  onNew() {
  // Initiate new registration.
  this.regModel = new Registration();
  // Change submitType to 'Save'.
  this.submitType = 'Save';
  // display registration entry section.
  this.showNew = true;
  }

  onSave() {
    if(this.submitType === 'Save') {
      this.registrations.push(this.regModel);
    }
    else {
    // Update the existing properties values based on model.
    this.registrations[this.rowIndex].firstName = this.regModel.firstName;
    this.registrations[this.rowIndex].lastName = this.regModel.lastName;
    this.registrations[this.rowIndex].dob = this.regModel.dob;
    this.registrations[this.rowIndex].email = this.regModel.email;
    this.registrations[this.rowIndex].password = this.regModel.password;
    this.registrations[this.rowIndex].country = this.regModel.country;
    }
    this.showNew = false;
  }

  onDelete(index: number){
    this.registrations.splice(index,1);
  }

  onEdit(index: number){
    this.rowIndex = index;
    this.regModel = new Registration();
    this.regModel = Object.assign({},this.registrations[this.rowIndex]);
    this.submitType = 'Update';
    this.showNew = true;
  }

  // This method associate to Cancel Button.
  onCancel() {
  // Hide registration entry section.
  this.showNew = false;
  }

  // This method associate to Bootstrap dropdown selection change.
  onChangeCountry(country: String) {
    // Assign corresponding selected country to model.
    this.regModel.country = country;
  }

}

