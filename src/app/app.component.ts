import {Component, OnInit} from '@angular/core';
import {TypeaheadOption} from "./typeahead";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  options: TypeaheadOption [];
  placeHolder: string;
  selectedName: string;

  constructor() {
    this.options = [];
    this.placeHolder = 'Select a thing';
    this.selectedName = '';
  }

  ngOnInit() {
    this.options = [
      { name: 'Bear', description: 'Super awesome cute Collie', value: 1},
      { name: 'Red Corvette', description: 'Little red fast cart', value: 2},
      { name: 'Jeep Grand Cherokee', description: 'Comfy SUV', value: 3},
      { name: 'Jeep Wrangler', description: 'Go anywhere with this thing', value: 4},
      { name: 'Snoop', description: 'Super awesome cute Puggle', value: 5},
      { name: 'Georgia', description: 'Super awesome cute dog', value: 6},
      { name: 'Table', description: 'Place to put dishes and stuff', value: 7},
      { name: 'Coffee Table', description: 'Place to put your feet and other stuff', value: 8},
      { name: 'BMW 3 Series', description: 'The ultimate driving machine', value: 9}
    ]
  }

  handleSelections(value) {
    this.selectedName = this.options.filter(option => option.value == value)[0].name;
  }

}
