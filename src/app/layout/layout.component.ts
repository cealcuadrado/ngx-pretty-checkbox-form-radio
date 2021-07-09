import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PrettyRadioChange } from 'ngx-pretty-checkbox';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  numbers: any[] = [
    { id: 0, name: 'Cero', value: 0 },
    { id: 1, name: 'Uno', value: 1 },
    { id: 2, name: 'Dos', value: 2 },
    { id: 3, name: 'Tres', value: 3}
  ];

  radioForm: FormGroup;
  initialValue = 0;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.radioForm = this.fb.group({
      number: this.fb.control(0, [Validators.required])
    });
  }

  onSelectRadio(event: PrettyRadioChange) {
    this.radioForm.value.number = event.value;
  }

  isInitialValue(value: number): boolean {
    return value === 0;
  }

  submitForm(): void {
    this.toastr.success(`Opción seleccionada: ${this.radioForm.value.number}`, 'Formulario enviado');
  }
}
