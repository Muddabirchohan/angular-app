import { ChangeDetectorRef, Component } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent {
 
    comments: any = []

  constructor(private dataService: DataService, private changeDetectorRef: ChangeDetectorRef) {

    // this.items = dataService.getItems();
  }

  ngOnInit(): void {

    // this.loader = true
    // this.items = this.dataService.getItems();
   
    this.dataService.getComments().subscribe(res => {
      this.comments = res

      // setTimeout(() => {
      //   this.loader = false
       
      // }, 1000)
    });

  }
}
