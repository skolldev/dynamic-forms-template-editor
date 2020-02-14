import { Component, OnInit, Input } from "@angular/core";
import { DynamicFormTemplateModel } from "src/models/dynamic-form-template.model";
import { DynamicFormGroupModel } from "src/models/dynamic-form-group.model";

@Component({
  selector: "app-dynamic-form-template",
  templateUrl: "./dynamic-form-template.component.html"
})
export class DynamicFormTemplateComponent implements OnInit {
  // TODO: Collapsible
  @Input()
  public template: DynamicFormTemplateModel | undefined;

  ngOnInit(): void {}

  public addGroup() {
    this.template?.dynamicFormGroups.push({
      label: "",
      description: "",
      dynamicFormFields: []
    });
  }

  public deleteGroup(group: DynamicFormGroupModel) {
    const index = this.template!.dynamicFormGroups.indexOf(group);
    this.template?.dynamicFormGroups.splice(index, 1);
  }
}
