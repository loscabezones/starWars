import { Component, OnInit } from '@angular/core';
import { ShipsService } from 'src/app/services/ships.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit {

  ships = [];

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

        this.ships.push(info);

      });
      console.log(this.ships);

    });
  }

  ShowShips() {

  }

}
