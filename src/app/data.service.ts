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

  

  deleteItem(index: number): any {
    this.items.splice(index, 1);
  }
}
