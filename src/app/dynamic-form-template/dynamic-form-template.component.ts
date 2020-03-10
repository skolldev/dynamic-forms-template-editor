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
    if (!this.template) {
      return;
    }

    const index = this.template.dynamicFormGroups.indexOf(group);
    this.template?.dynamicFormGroups.splice(index, 1);
  }

  public moveGroup(group: DynamicFormGroupModel, direction: "up" | "down") {
    if (!this.template || this.template.dynamicFormGroups.length === 1) {
      return;
    }

    const { dynamicFormGroups } = this.template;

    const index = dynamicFormGroups.indexOf(group);
    if (
      (direction === "up" && index === 0) ||
      (direction === "down" && index === dynamicFormGroups.length - 1)
    ) {
      return;
    }
    const item = dynamicFormGroups.splice(index, 1)[0];

    if (direction === "up") {
      dynamicFormGroups.splice(index - 1, 0, item);
      console.log(dynamicFormGroups);
      return;
    }
    if (direction === "down") {
      dynamicFormGroups.splice(index + 1, 0, item);
      console.log(dynamicFormGroups);
      return;
    }
  }
}
