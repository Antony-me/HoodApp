import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostService]
})
export class PostsComponent implements OnInit {

  public posts;

  constructor(private post: PostService) { }

  ngOnInit(){
    this.getposts();
  }

  getposts() {
    this.post.getAllPosts().subscribe(
      data => {
        this.posts = data;
        console.log(data);
        
      },
      err => console.error(err),
      () => console.log('done loading posts')
    );
  }

}
