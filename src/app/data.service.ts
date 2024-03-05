import { HttpClient } from '@angular/common/http';
import {  Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';

export interface IUser {
  name: string,
  id: number
}


@Injectable({
  providedIn: 'root'
})


export class DataService {



  constructor(private ngZone: NgZone, private http: HttpClient) { }


  private baseUrl = 'https://jsonplaceholder.typicode.com';

  
  getComments(): Observable<Comment[]> {
   return this.http.get<Comment[]>(`${this.baseUrl}/comments`);
   }





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

  updateItem(data: IUser): void {
    const index =  this.items.findIndex(item => item.id == data.id);
    console.log("index",index,data)
    if (index !== -1) {
    this.items[index].name = data.name
    }
  }

  

  deleteItem(id: number): void {
    // Find the index of the item to delete based on its ID
    const index = this.items.findIndex(item => item.id === id);
  
    if (index === -1) {
      console.error("Item with ID", id, "not found for deletion.");
      return; // Early exit if item not found
    }
  
    // Create a new array reference with the filtered contents
    this.items.splice(index, 1);
  
  
    // Optionally (if needed):
    // - Trigger change detection manually for better responsiveness
    //   this.changeDetectorRef.detectChanges();
  
    // Inform the parent component about the deletion (optional)
    // this.messageEvent.emit({ message: 'Item deleted successfully' });
  }
}
