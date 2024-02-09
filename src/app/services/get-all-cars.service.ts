import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAllCarsService {

  constructor() { }

  getAllCars() : Observable<any> {
    return from(
      fetch("https://dt191g-projekt.azurewebsites.net/api/carapi/")
      .then(response => response.json())
      .catch(error => {
        console.error(error);
        throw error; 
      })
  );
}
}
