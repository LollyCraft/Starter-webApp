import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  comments$: Object;
  post$: Object;

  constructor(private data: DataService, private route: ActivatedRoute) { 
    this.route.params.subscribe( params => this.post$ = params.id)
  }

  ngOnInit() {
    this.data.getPost(this.post$).subscribe(
      (data) => {
        this.post$ = data;
        this.comments$ = data;
      }
    )
  }

}
