import { NgModule } from '@angular/core';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatButtonToggleModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

const matModules = [
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatButtonToggleModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  imports: matModules,
  exports: matModules
})
export class MaterialModule { }
