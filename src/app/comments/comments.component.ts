import {Component, OnInit} from "@angular/core";
import {DataService} from "../data.service";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  comments$: Object;
  postId$: number;
  post$: Object;

  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.postId$ = params.id);
    // mai merge și așa (cred...): this.post$ = this.route.snapshot.params.id
  }

  ngOnInit() {
    this.data.getComments(this.postId$).subscribe(
      (data) => {
        this.comments$ = data;
      }
    );
    this.data.getPost(this.postId$).subscribe(
      (data) => {
        this.post$ = data;
      }
    );
  }

}
