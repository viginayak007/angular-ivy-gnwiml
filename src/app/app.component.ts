import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import htmlDoc from './doc';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  profileForm: FormGroup = this.formBuilder.group({
    body: [{ value: htmlDoc, disabled: false }, Validators.required]
  });
  public Editor = ClassicEditor;

  config = {
    toolbar: {
      items: [
        'heading',
        '|',
        '|',
        'bold',
        'italic',
        '|',
        'link',
        '|',
        'bulletedList',
        'numberedList',
        '|',
        '|',
        'insertTable',
        '|',
        'outdent',
        'indent',
        '|',
        'uploadImage',
        'blockQuote',
        '|',
        'undo',
        'redo'
      ],
      shouldNotGroupWhenFull: true,
      ckfinder: {
        options: {
            resourceType: 'Images'
        },
      },
    }
  };

  constructor(private formBuilder: FormBuilder) {}

  view() {
    console.log(this.profileForm.value.body);
  }
}
