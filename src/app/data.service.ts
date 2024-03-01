import {  Injectable, NgZone } from '@angular/core';

export interface IUser {
  name: string,
  id: number
}


@Injectable({
  providedIn: 'root'
})


export class DataService {



constructor(private ngZone: NgZone) { }


  private items: IUser[] = [{id: 1 , name: 'Item 1'},{id: 2,name: 'Item 2'},{id: 3,name: 'Item 3'}];

  getItems(): IUser[] {
    return this.items;
  }

  addItem(item: IUser): void {
    this.items.push(item);
  }

  goTo(): void{
   console.log("goto")
  }

  // updateItem(data: IUser): void {
  //   this.items[data.id].name = data.name;
  // }

  

  deleteItem(index: number): any {
    this.items.splice(index, 1);
  }
}
