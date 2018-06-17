import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  photos$ : Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getPhotos().subscribe(
      (data) => {
        this.photos$ = data;
        console.log(this.photos$);
      }
    )
  }

}
