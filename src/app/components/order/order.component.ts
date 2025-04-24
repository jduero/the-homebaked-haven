import { ChangeDetectionStrategy, Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { AddOrderComponent } from '../add-order/add-order.component';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [MatCardModule, MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})

export class OrderComponent {
  constructor(private cdr: ChangeDetectorRef) {}
  readonly dialog = inject(MatDialog);
  displayedColumns: string[] = ['no', 'name', 'address', 'mc', 'uc', 'ts', 'hr', 'price', 'actions'];
  dataSource = [
    // Sample static data (you can replace this with data from a service or Excel upload)
    { no: 1, name: 'Alice', address: '123 Street', mc: '1', uc: '2', ts: '10', hr: '5', price: '150' },
    { no: 2, name: 'Bob', address: '456 Avenue', mc: '3', uc: '4', ts: '8', hr: '4', price: '100' }
  ];
  currentNo = this.dataSource.length; 
  onUpdate(row: any) {
    console.log('Update clicked for:', row);
    // Implement update logic or open a dialog here
  }

  onDelete(row: any) {
    console.log('Delete clicked for:', row);
    // Implement delete logic or confirmation dialog here
    this.dataSource = this.dataSource.filter(item => item !== row);
  }
  onAdd() {
    const dialogRef = this.dialog.open(AddOrderComponent);
    dialogRef.componentInstance.formSubmitted.subscribe((data: any) => {
      this.currentNo += 1; // Increment the No.
      const newEntry = { no: this.currentNo, ...data };
      this.dataSource = [...this.dataSource, newEntry]; // Update the data source
    });
  }
}
