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

  allCars :any;

  constructor(private getAllCarsService : GetAllCarsService) {}

  ngOnInit(){
    this.getAllCarsService.getAllCars().subscribe(cars =>{
      this.allCars = cars;
      console.log(cars);
    })
  }
}
