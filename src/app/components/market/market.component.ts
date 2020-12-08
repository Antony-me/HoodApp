import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css'],
  providers: [PostService]
})

export class MarketComponent implements OnInit {
  businesses=[];
  newBusiness;
  

  constructor(private PostService: PostService) { }


  ngOnInit(){
    this.newBusiness = {
      business_name:"",
      business_email:"",
      business_category:"",
      business_user:"",
      business_neighborhood:"",


    }   
    this.getBusiness();

  }

  getBusiness() {
    this.PostService.getAllPosts().subscribe(
      data => {
        this.businesses = data[0].business_set;
        console.log(this.businesses);
      },
      err => console.error(err),
      () => console.log('done loading posts')
    );
  }
  
}
