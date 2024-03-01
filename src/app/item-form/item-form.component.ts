import { Component, EventEmitter, Output } from '@angular/core';
import { DataService, IUser } from '../data.service';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './item-form.component.html',
  styleUrl: './item-form.component.scss'
})

export class ItemFormComponent {

  
  inputValue: string = '';  // Declare additionalValue property here
  additionalValue: string = "";


  @Output() itemUpdated = new EventEmitter<string>();


  constructor(private dataService: DataService) {}

  addItem():void{
    if(this.inputValue == "") {
      alert("Empty data")
      return
    }
    
    this.dataService.addItem({name : this.inputValue, id : 12})
    this.inputValue = ""
  }


  onInputChange(event: any): void {
    this.inputValue = event.target.value
  }

  // updateItem(): void{
  //   // this.dataService.updateItem();
  //   const updatedItem: string = this.inputValue;
  //   this.itemUpdated.emit(updatedItem); // Emit the updated item object

  // }


}
