import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { DataService, IUser } from '../data.service';
import { FormControl, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './item-form.component.html',
  styleUrl: './item-form.component.scss'
})

export class ItemFormComponent {


  inputValue: string = '';  // Declare additionalValue property here
  additionalValue: string = "";
  updateValue: string = '';
  isEditMode: boolean = false;


  // @Input() selectedItem: any;
  @Output() itemUpdated = new EventEmitter<string>();

  @Input() selectedId: number = 0;


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedId']) {
      const newSelectedId = changes['selectedId'].currentValue;
      const previousSelectedId = changes['selectedId'].previousValue;

      if(newSelectedId){
        this.isEditMode = true
      }

    }
  }

  constructor(private dataService: DataService) { 

  }

  receive(message: any) {
    console.log("messs",message);
  }


  addItem(): void {
    if (this.inputValue == "") {
      alert("Empty data")
      return
    }

    this.dataService.addItem({ name: this.inputValue, id: 12 })
    this.inputValue = ""
  }

  updateItem(): void {
    this.itemUpdated.emit(this.updateValue)
    this.isEditMode = false
    // this.updateValue = ""
  }


  onInputChange(event: any): void {
    this.inputValue = event.target.value
  }

  onInputChangeUpdate(event: any): void {
    this.updateValue = event.target.value
  }

}
