import { Component, OnInit } from '@angular/core';
import { HoodService } from 'src/app/hood.service';


@Component({
  selector: 'app-hoods',
  templateUrl: './hoods.component.html',
  styleUrls: ['./hoods.component.css'],
  providers: [HoodService]
})
export class HoodsComponent implements OnInit {

  neighbourhood;

  constructor(private hood: HoodService) { 
    this.getNeighbourhoods();
    this.neighbourhood = {id: -1, name: '' , location: '', count:0};



  }
  getNeighbourhoods = () => {
    this.hood.getAllhoods().subscribe(
      data => {
        this.hood = data;
        console.log(data)
      },
      error => {
        console.log(error);
      }
      
    );
  }

  ngOnInit(): void {
  }

}
