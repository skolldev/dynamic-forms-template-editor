import { Pipe, PipeTransform } from "@angular/core";
import { DynamicFormFieldAllowedValues } from "src/models/dynamic-form-field-allowed-values";

@Pipe({
  name: "allowedValue"
})
export class AllowedValuePipe implements PipeTransform {
  transform(value: DynamicFormFieldAllowedValues[]): string {
    return value.map(val => val.label.trim()).join(",");
  }
}
