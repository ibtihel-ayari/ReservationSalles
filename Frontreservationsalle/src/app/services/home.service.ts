import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';


const BASE_URL='http://localhost:4000/';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
private http=inject(HttpClient)
  constructor() { }

  login(obj: any) {
    return this.http.post(BASE_URL + 'auth/login', obj);
  }



  
  getSalles(){
    return this.http.get(BASE_URL+'salles');
  }


  //gestion reservation 
  getReservations(){
    return this.http.get(BASE_URL+'reservations');
  }
  createReservation(obj: any) {
    return this.http.post(BASE_URL + 'reservations/create', obj);
  }

  updateReservation(id: any, obj: any) {
    return this.http.put(BASE_URL + 'reservations/' + id, obj);
  }

  deleteReservation(id: any) {
    return this.http.delete(BASE_URL + 'reservations/' + id);
  }

  
}
