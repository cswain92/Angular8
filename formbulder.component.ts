import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  public frmRegister = this.fb.group({
    Name: ['', Validators.required],
    Price: [''],
    frmDetails: this.fb.group({
      City: [''],
      IsInStock: ['']
    }),
    newControls: this.fb.array([
      this.fb.control('')
    ])
  });

  ngOnInit() {
  }
   get newControls() {
     return this.frmRegister.get('newControls') as FormArray;
   }
   public AddPhotos() {
    this.newControls.push(this.fb.control(''));
   }
   public RemovePhoto(index) {
     this.newControls.removeAt(index);
   }
}
