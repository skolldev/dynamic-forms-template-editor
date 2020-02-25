import { DynamicFormFieldTypes } from "./dynamic-form-field-types";
import { DynamicFormFieldAllowedValues } from "./dynamic-form-field-allowed-values";

export interface DynamicFormFieldModel {
  id?: number;
  label: string;
  description: string;
  position: number;
  required: boolean;
  dataSource?: string;
  dynamicFormFieldTypeId: DynamicFormFieldTypes;
  dynamicFormFieldAllowedValues: DynamicFormFieldAllowedValues[];
  allowedValuesString?: string;
  dynamicFormGroupId?: number;
}
