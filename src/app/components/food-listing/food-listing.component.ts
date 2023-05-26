import { Component, OnInit} from '@angular/core';
import { PostService } from './../../post.service';
import { fromEvent, scan, throttleTime, map } from 'rxjs';


@Component({
  selector: 'app-food-listing',
  templateUrl: './food-listing.component.html',
  styleUrls: ['./food-listing.component.css']
})
export class FoodListingComponent implements OnInit {

  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [3, 6, 9, 12];

  constructor(private postService: PostService) {}

  ngOnInit(): void {


    fromEvent(document, 'click')
    .pipe(
      throttleTime(1000),
      map(event => {
        const e = event as MouseEvent;
        return  e.clientX;
        }),
//      map((event) => console.log(event.clientX)),

      scan((count, clientX) => count+ clientX , 0)
    )
    .subscribe((count) => console.log(`Clicked ${count} times`));

    /*   fromEvent(document, 'click')
     .pipe(scan((count) => count + 1, 0))
     .subscribe((count) => console.log(`Clicked ${count} times`)); */
      this.fetchPosts();
  }

  fetchPosts(): void {
    debugger;
    
    this.postService.getAllPosts().subscribe( Response => this.POSTS = Response );
    //.subscribe( response => {
     // this.POSTS = response ; 
      //console.log(response);
      //},
      //(error) => {
     //   console.log(error);
    //  }
  //);
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.fetchPosts();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }

}
