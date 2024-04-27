import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-calender',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './booking-calender.component.html',
  styleUrl: './booking-calender.component.css'
})
export class BookingCalenderComponent implements OnInit {
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
}

