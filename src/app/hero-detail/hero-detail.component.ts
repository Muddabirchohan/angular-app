import { Component, Input } from '@angular/core';
import { ItemFormComponent } from '../item-form/item-form.component';
import { ItemListComponent } from '../item-list/item-list.component';
import { DataService } from '../data.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [ItemFormComponent,ItemListComponent,RouterLink, RouterLinkActive],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss'
})
export class HeroDetailComponent {
  title = '';
  dynamicPropName: string = 'just a random prop'; // Set the initial value
  receivedMessage: string = '';
  updatedName: string = "";
  receivedId: number = 0;

  @Input() selectedId: string | undefined;


  constructor(private dataService: DataService) {
    // this.items = dataService.getItems();
    // this.goto = dataService.goTo();
  }



  receiveMessage(message: string) {
    this.receivedMessage = message;
  }

  receiveId(message: number) {
    this.receivedId = message;
  }

  recieveUpdated(message: string) {
    this.updatedName = message;
    this.dataService.updateItem({id: this.receivedId, name: message})
  }
}
