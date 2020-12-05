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
  post_image = null;
  newPost;

  onFileSelected(event){
    console.log(event);
    this.post_image= event.target.files[0]
    
  }

  constructor(private PostService: PostService) { }

 
  ngOnInit(){
    this.newPost = {
      description:"",
      categories:"",
      post_image:""
    }    
  }

  getPosts() {
    this.PostService.getAllPosts().subscribe(
      data => {
        this.posts = data;
      },
      err => console.error(err),
      () => console.log('done loading posts')
    );
  }
  
  createPost(){
    // console.log(this.newPost);
    this.PostService.AddPost(this.newPost).subscribe(
      response => {
        console.log(response);
        
        alert('Your post has been updated')
      },
      error => console.log('error', error)
    )
  }


}
