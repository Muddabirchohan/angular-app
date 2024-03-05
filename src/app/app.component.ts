import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';
import { CommonModule } from '@angular/common';
import { ItemFormComponent } from './item-form/item-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet],
  imports: [ItemListComponent, ItemFormComponent, FormsModule, RouterOutlet, CommonModule, HttpClientModule],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})

export class AppComponent {
  // title = '';
  // dynamicPropName: string = 'just a random prop'; // Set the initial value
  // receivedMessage: string = '';
  // updatedName: string = "";
  // receivedId: number = 0;

  // @Input() selectedId: string | undefined;


  // constructor(private dataService: DataService) {
  //   // this.items = dataService.getItems();
  //   // this.goto = dataService.goTo();
  // }



  // receiveMessage(message: string) {
  //   this.receivedMessage = message;
  // }

  // receiveId(message: number) {
  //   this.receivedId = message;
  // }

  // recieveUpdated(message: string) {
  //   this.updatedName = message;
  //   this.dataService.updateItem({id: this.receivedId, name: message})
  // }


}
