import { DynamicFormFieldModel } from "./dynamic-form-field.model";

export interface DynamicFormGroupModel {
  id?: number;
  label: string;
  description: string;
  dynamicFormTemplateId?: number;
  dynamicFormFields: DynamicFormFieldModel[];
}
