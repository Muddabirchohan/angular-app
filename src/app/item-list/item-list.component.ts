import { Component } from '@angular/core';
import { DataService, IUser } from '../data.service';
import { CommonModule } from '@angular/common';
import { ItemFormComponent } from '../item-form/item-form.component';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule,ItemFormComponent],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent {
  items: any[];
  goto: void;


  constructor(private dataService: DataService) {
    this.items = dataService.getItems();
    this.goto = dataService.goTo();
    
  }

  deleteItem(id: number): void {
    this.dataService.deleteItem(id);
  }

  // handleItemUpdate(updatedItem: IUser): void {
  //   // Call the data service update method with the updated item
  //   this.dataService.updateItem(updatedItem);
  // }


}
