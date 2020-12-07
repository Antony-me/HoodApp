import { Component, OnInit } from '@angular/core';
import { VacantHousesService } from 'src/app/vacant-houses.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public vacants;

  constructor(private vacant: VacantHousesService) { }

  ngOnInit() {
    this.getVacants();
  }

  getVacants() {
    this.vacant.getAllVacant().subscribe(
      data => {
        this.vacants = data;
        console.log(data);

      },
      err => console.error(err),
      () => console.log('done loading vacants')
    );
  }
}
