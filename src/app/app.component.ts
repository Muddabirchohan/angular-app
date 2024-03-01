import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';
import { CommonModule } from '@angular/common';
import { ItemFormComponent } from './item-form/item-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet],
  imports: [ItemListComponent, ItemFormComponent, FormsModule, RouterOutlet, CommonModule],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})

export class AppComponent {
  title = 'angular-pro';
}
