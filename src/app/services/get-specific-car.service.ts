import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetSpecificCarService {

  getSpecificCar(id :number|string) : Observable<any> {
    return from(
      fetch("https://dt191g-projekt.azurewebsites.net/api/carapi/"+ id)
      .then(response => response.json())
      .catch(error => {
        console.error(error);
        throw error; 
      })
  );
}
}
