import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router'; 
import { GetAllCarsService } from '../services/get-all-cars.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  allCars :any[] =[];
  constructor(private getAllCarsService : GetAllCarsService) {}

  ngOnInit(){
    this.getAllCarsService.getAllCars().subscribe(cars =>{
      this.allCars = cars;
      console.log(cars);
    })
  }

  // Sök bil efter modellnamn
  searchCar(search: string) {
    if (!search) {
      // Om söksträngen är tom, visa alla bilar igen
      this.getAllCarsService.getAllCars().subscribe(cars => {
        this.allCars = cars;
      });
    } else {
      // Filtrera allCars baserat på söksträngen och skapa en ny array
      const searchResult = this.allCars.filter(car =>
        car.model.toLowerCase().includes(search.toLowerCase())
      );

      // Uppdatera allCars med sökresultatet
      this.allCars = searchResult;
    }
  }
}