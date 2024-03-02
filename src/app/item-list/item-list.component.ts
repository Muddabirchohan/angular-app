import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService, IUser } from '../data.service';
import { CommonModule } from '@angular/common';
import { ItemFormComponent } from '../item-form/item-form.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule, ItemFormComponent],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent {
  items: any[];
  comments: any[] | undefined;
  loader: boolean = false;
  count: number = 0;
  selectedId: number = 0;

  @Input() propName: string = "";

  @Output() messageEvent = new EventEmitter<any>();
  @Output() selectedIdEvent = new EventEmitter<any>();


  constructor(private dataService: DataService) {

    this.items = dataService.getItems();
  }

  ngOnInit(): void {

    this.loader = true
    this.dataService.getComments().subscribe(res => {
      this.comments = res

      setTimeout(() => {
        this.loader = false

      }, 3000)

    });

  }

  sendMessage() {
    this.messageEvent.emit({ data: { name: "shabaana" } });
  }


  selectedItem(id: number) {
    this.selectedId = id
    this.selectedIdEvent.emit(id);

  }


  deleteItem(id: number): void {
    this.dataService.deleteItem(id);
  }



}
