import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-add-order',
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './add-order.component.html',
  styleUrl: './add-order.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddOrderComponent {
  @Output() formSubmitted = new EventEmitter<any>();
  
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [''],
      address: [''],
      mc: [],
      uc: [],
      ts: [],
      hr: [],
      price: []
    });
    this.form.valueChanges.subscribe((values) => {
      const mcPrice = (values.mc || 0) * 15; // MC: 15 each
      const ucPrice = (values.uc || 0) * 15; // UC: 15 each
      const tsPrice = (values.ts || 0) * 15; // TS: 15 each
      const hrPrice = (values.hr || 0) * 20; // HR: 20 each
      const totalPrice = mcPrice + ucPrice + tsPrice + hrPrice;
      this.form.get('price')?.setValue(totalPrice, { emitEvent: false });
    });
  }

  submit() {
    if (this.form.valid) {
      this.formSubmitted.emit(this.form.value); // Emit the data
    }
  }
}
