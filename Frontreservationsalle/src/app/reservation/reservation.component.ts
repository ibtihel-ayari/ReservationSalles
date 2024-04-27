import { Component, OnInit, inject } from '@angular/core';
import { HomeService } from '../services/home.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet} from "@angular/router";


@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [RouterLink, CommonModule
  ],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent implements OnInit{
  constructor(private homeService: HomeService,public _router: Router) { }

 
  reservations:any=[];
  ngOnInit(): void {
   this.loadReservations();  
   }
   loadReservations(){
    this.homeService.getReservations().subscribe({
      next:(reservations:any)=>{
        this.reservations=reservations;
        console.log('Reservations fetched successfully');
      },
      error:(error)=> console.log('Error fetching reservations:', error)
    })
  
  }
  createReservation(obj: any): void {
    this.homeService.createReservation(obj).subscribe({
      next: () => {
        console.log('Reservation created successfully');
        this.loadReservations(); // Recharger la liste des réservations après la création
      },
      error: (error) => console.log('Error creating reservation:', error)
    });
  }

  updateReservation(id: any, obj: any): void {
    this.homeService.updateReservation(id, obj).subscribe({
      next: () => {
        console.log('Reservation updated successfully');
        this.loadReservations(); // Recharger la liste des réservations après la mise à jour
      },
      error: (error) => console.log('Error updating reservation:', error)
    });
  }

  deleteReservation(id: any): void {
    this.homeService.deleteReservation(id).subscribe({
      next: () => {
        console.log('Reservation deleted successfully');
        this.loadReservations(); // Recharger la liste des réservations après la suppression
      },
      error: (error) => console.log('Error deleting reservation:', error)
    });
  }
}
