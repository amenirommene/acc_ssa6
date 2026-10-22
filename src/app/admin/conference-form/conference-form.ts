import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-conference-form',
  imports: [ReactiveFormsModule],
  templateUrl: './conference-form.html',
  styleUrl: './conference-form.css',
})
export class ConferenceForm {
  
  

  private fb=inject(FormBuilder)
  myForm : FormGroup = new FormGroup({
  title : new FormControl('', [Validators.required, Validators.minLength(10)]),
  description: new FormControl('',Validators.required),
  lieu : new FormControl(),
  date : new FormControl(),
  nbmax : new FormControl()

  })
  myForm2 : FormGroup = this.fb.group({
  title : ['', [Validators.required, Validators.minLength(10)]],
  description: ['',Validators.required],
  lieu : [],
  date : [],
  nbmax : []
  })
  
formStatus=toSignal(this.myForm.statusChanges, {initialValue:this.myForm.status});
get Title(){
    return this.myForm.get('title');
  }
  get Description(){
    return this.myForm.get('description');
  }

}
