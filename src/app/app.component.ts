import { Component } from "@angular/core";
import { DynamicFormTemplateModel } from "src/models/dynamic-form-template.model";
import { Base } from "src/models/base.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  public templates: DynamicFormTemplateModel[] = [];

  public addTemplate() {
    this.templates.push({
      label: "",
      description: "",
      dynamicFormGroups: []
    });
  }

  public deleteTemplate(template: DynamicFormTemplateModel) {
    const index = this.templates.indexOf(template);
    this.templates.splice(index, 1);
  }

  public import(event: any) {
    try {
      if (event.target.files?.[0]) {
        const reader = new FileReader();

        reader.onload = e => {
          this.templates = JSON.parse(reader.result as string).items;
        };

        reader.readAsText(event.target.files[0]);
      }
    } catch (error) {
      console.error(error);
    }
  }

  public export() {
    this.templates.forEach(template => {
      template.dynamicFormGroups.forEach(group => {
        group.dynamicFormFields.forEach(field => {
          field.dynamicFormFieldAllowedValues = field.dynamicFormFieldAllowedValues.filter(
            val => val.label
          );
        });
      });
    });

    const base: Base = {
      items: this.templates
    };

    const dataString = JSON.stringify(base);
    const uri =
      "data:application/json;charset=utf-8," + encodeURIComponent(dataString);
    const name = `dynamic-form-template-${new Date().toISOString()}.json`;
    const link = document.createElement("a");
    link.setAttribute("href", uri);
    link.setAttribute("download", name);
    link.click();
  }
}
