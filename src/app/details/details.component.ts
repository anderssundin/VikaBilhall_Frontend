import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { GetSpecificCarService } from '../services/get-specific-car.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
objectId :string ="";
car :any;
constructor(private route: ActivatedRoute, private getSpecificCar :GetSpecificCarService) {}
ngOnInit() {
  this.route.params.subscribe(params => {
    this.objectId = params['id'];

    // Get specific car
    this.getSpecificCar.getSpecificCar(this.objectId).subscribe(car => {
      this.car = car;
      console.log(car);
    })
  })
}
}
