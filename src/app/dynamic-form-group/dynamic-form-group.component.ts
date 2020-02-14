import { Component, Input } from "@angular/core";
import { DynamicFormGroupModel } from "src/models/dynamic-form-group.model";
import { DynamicFormFieldModel } from "src/models/dynamic-form-field.model";

@Component({
  selector: "app-dynamic-form-group",
  templateUrl: "./dynamic-form-group.component.html"
})
export class DynamicFormGroupComponent {
  // TODO: Collapsible
  @Input()
  public group: DynamicFormGroupModel | undefined;

  public addField() {
    this.group?.dynamicFormFields.push({
      label: "",
      description: "",
      required: false,
      position: 1,
      dynamicFormFieldTypeId: 1,
      dynamicFormFieldAllowedValues: []
    });
  }

  public deleteField(field: DynamicFormFieldModel) {
    const index = this.group!.dynamicFormFields.indexOf(field);
    this.group?.dynamicFormFields.splice(index, 1);
  }
}
