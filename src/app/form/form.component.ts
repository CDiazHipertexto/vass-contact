import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  onKey(event: any) { // without type info
    console.log(event.srcElement.parentElement);
    event.srcElement.parentElement.classList.add('float-focus-2');

  }
  public focusIn(target: any): void {
    target.parentElement.classList.add('float-focus');
  }

  public focusOut(target: any): void {
    target.parentElement.classList.remove('float-focus');
  }

  typeCity: any[] = [
    { id: 'Colombia', name: 'Colombia' },
    { id: 'Venezuela', name: 'Venezuela' },
    { id: 'EEUU', name: 'EEUU' },
    { id: 'Argentina', name: 'Argentina' }
  ];
  selectedTypeAuto = [];
  selectedModelAuto = [];
  selectedyearAuto = [];
  constructor() {

  }

  ngOnInit(): void {
  }
  clearModel() {
    this.selectedTypeAuto = [];
    this.selectedModelAuto = [];
    this.selectedyearAuto = [];
  }

}
