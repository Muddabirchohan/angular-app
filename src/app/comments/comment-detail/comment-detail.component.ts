import { ChangeDetectorRef, Component } from '@angular/core';
import { DataService } from '../../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comment-detail',
  standalone: true,
  imports: [],
  templateUrl: './comment-detail.component.html',
  styleUrl: './comment-detail.component.scss'
})
export class CommentDetailComponent {

  commentSummary: any = {}
  commentId: string|null = "";

  constructor(private dataService: DataService,
     private changeDetectorRef: ChangeDetectorRef,
     private _route: ActivatedRoute) {

    // this.items = dataService.getItems();
  }

  ngOnInit(): void {


    this.commentId = this._route.snapshot.paramMap.get('id');

    console.log("comment id",this.commentId)


    this.dataService.getCommentDetail(this.commentId!).subscribe(res => {
      console.log("Res",res)
      this.commentSummary = res
    });

  }

}
