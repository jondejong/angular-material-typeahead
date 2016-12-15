import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MaterialModule} from "@angular/material";
import {TypeaheadComponent} from "./typeahead.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    TypeaheadComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    TypeaheadComponent
  ]
})
export class TypeadheadModule {
}
