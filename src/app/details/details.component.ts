import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
objectId :string ="";

constructor(private route: ActivatedRoute) {}
ngOnInit() {
  this.route.params.subscribe(params => {
    this.objectId = params['id'];
  })
}
}
