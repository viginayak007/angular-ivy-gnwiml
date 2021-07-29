import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, CKEditorModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
