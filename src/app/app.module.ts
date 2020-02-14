import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DynamicFormTemplateComponent } from "./dynamic-form-template/dynamic-form-template.component";
import { DynamicFormGroupComponent } from './dynamic-form-group/dynamic-form-group.component';
import { DynamicFormFieldComponent } from './dynamic-form-field/dynamic-form-field.component';
import { AllowedValuePipe } from './dynamic-form-field/allowed-value.pipe';

@NgModule({
  declarations: [AppComponent, DynamicFormTemplateComponent, DynamicFormGroupComponent, DynamicFormFieldComponent, AllowedValuePipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
