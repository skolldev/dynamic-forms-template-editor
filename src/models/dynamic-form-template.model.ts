import { DynamicFormGroupModel } from "./dynamic-form-group.model";

export interface DynamicFormTemplateModel {
  id?: number;
  description: string;
  label: string;
  dynamicFormGroups: DynamicFormGroupModel[];
}
