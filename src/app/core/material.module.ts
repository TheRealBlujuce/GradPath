import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule, MatAutocompleteModule, MatChipsModule,
  MatFormFieldModule
} from '@angular/material';

@NgModule({
  imports: [
  CommonModule,
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatAutocompleteModule, 
  MatChipsModule,
  MatFormFieldModule
  ],
  exports: [
  CommonModule,
   MatToolbarModule,
   MatButtonModule,
   MatCardModule,
   MatInputModule,
   MatDialogModule,
   MatTableModule,
   MatMenuModule,
   MatIconModule,
   MatProgressSpinnerModule,
   MatAutocompleteModule, 
   MatChipsModule,
   MatFormFieldModule
   ],
})
export class CustomMaterialModule { }
