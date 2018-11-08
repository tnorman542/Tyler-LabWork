import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magazine',
  styles: ["input.ng-touched.ng-invalid {background: red}",
    "input:required {box-shadow:none;}"],
  template: `
  <form #theForm="ngForm">
    Full name: <br/>
    <span style="color: red"
      [hidden]="theModel.valid || theModel.untouched">
      Please enter your name<br/></span>
    <input name="fullName" type="text" required [(ngModel)]="fullName" 
      #theElement #theModel="ngModel" /><br/>
    Valid: {{theModel.valid}}<br/>
    Touched: {{theModel.touched}}<br/>
    Dirty: {{theModel.dirty}}<br/>
    Magazine edition:<br/>
    <select name="selectedEdition" [(ngModel)]="selectedEdition">
      <option *ngFor="let e of editions"
        [ngValue]="e">{{e.editionName}}</option>
    </select><br/>
    Shipping option:
    <input type="radio" name="selectedShipping"
      [(ngModel)]="selectedShipping" value="GROUND"/>Ground
    <input type="radio" name="selectedShipping"
      [(ngModel)]="selectedShipping" value="AIR"/>Air
    <br/>
    <label><input name="acceptPolicy" type="checkbox" [(ngModel)]="acceptPolicy"/>
      I accept the terms and conditions</label><br/>
    <br/>
    Price: {{selectedEdition.price}}
    <br/>
    <button [disabled]="!theForm.form.valid"
      (click)="submitForm()">Purchase</button>
  </form>
  `
})
export class MagazineComponent implements OnInit {

  fullName = "";
  editions = [
    {editionCode: 1, editionName: "US", price: "10.99 USD"},
    {editionCode: 2, editionName: "Canada", price: "14.99 CAD"},
    {editionCode: 3, editionName: "International", price: "23.99 USD"},
  ];
  selectedEdition = this.editions[0]; //US default
  selectedShipping = "";
  acceptPolicy = false;

  constructor() { }

  ngOnInit() {
  }

  submitForm() {
    let requestData = {
      customerName: this.fullName,
      productCode: this.selectedEdition.editionCode,
      acceptPolicy: this.acceptPolicy,
      shipMode: this.selectedShipping
    };

    alert(JSON.stringify(requestData));
  }

}
