import {Component, Input, OnInit, Output, EventEmitter, OnChanges} from "@angular/core";
import {TypeaheadOption} from "./TypeaheadOption";

@Component({
  selector: 'jd-md-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss']
})
export class TypeaheadComponent implements OnInit, OnChanges {

  @Input()
  options: TypeaheadOption[];

  @Input()
  placeholder: string;

  @Output()
  value: EventEmitter<any>;

  displayOptions: TypeaheadOption[];

  userValue: string;
  showOptions: boolean;

  constructor() {
    this.value = new EventEmitter<any>();
  }

  ngOnInit () {
    this.userValue = '';
    this.displayOptions = this.options;
    this.showOptions = false;
  }

  ngOnChanges(changes) {
    this.valueChange();
  }

  selectionStarted() {
    this.showOptions = true;
  }

  selectionEnded() {
    // Hack for now. Let other events get processed first
    setTimeout(() => {
      this.showOptions = false;
    }, 200);

  }

  valueChange() {
    const regEx = new RegExp(this.userValue, 'i');
    this.displayOptions = this.options.filter((option) => {
      return !!regEx.exec(option.name) || !!regEx.exec(option.description);
    })
  }

  selectOption(option) {
    this.userValue = option.name;
    this.value.emit(option.value);
  }

}
