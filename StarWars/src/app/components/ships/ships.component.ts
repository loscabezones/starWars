import { Component, OnInit } from '@angular/core';
import { ShipsService } from 'src/app/services/ships.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit {

  ships = [];
  allships = [];
  maxShips: number;
  sumShips: number;
  numberOfShips: number = 3;

  constructor(private shipsService: ShipsService) { }

  ngOnInit() {
    this.shipsService.getApiShips().subscribe(data => {
      data['results'].forEach(element => {

        const url = element.url;
        const id = url.split("/").filter(function (item) {
          return item !== "";
        }).slice(-1)[0];

        const info = {
          name: element['name'],
          id: id
        };

        this.allships.push(info);
        this.maxShips = this.allships.length;

      });
      console.log(this.allships);
      console.log(this.maxShips);

      //show onli 3 elements of ships
        this.sumShips = 3;
        this.ships = this.allships.slice(0, this.numberOfShips);

    },
    (error) => {
      console.log(error)
    });
  }

  ShowShips() {
    this.sumShips += 3;
    this.ships = this.allships.slice(0, this.sumShips);
  }

}
