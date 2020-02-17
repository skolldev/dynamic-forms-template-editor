import { Component, Input } from "@angular/core";
import { DynamicFormFieldModel } from "src/models/dynamic-form-field.model";
import { DynamicFormFieldTypes } from "src/models/dynamic-form-field-types";

@Component({
  selector: "app-dynamic-form-field",
  templateUrl: "./dynamic-form-field.component.html"
})
export class DynamicFormFieldComponent {
  @Input()
  public field: DynamicFormFieldModel | undefined;

  public fieldTypes = DynamicFormFieldTypes;
}
