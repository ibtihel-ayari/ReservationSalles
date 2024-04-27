import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, Router, RouterLink, RouterOutlet} from "@angular/router";
// Interface pour représenter la structure des données de réservation
interface Reservation {
  utilisateur: string;
  salle: string;
  dateHeureDebut: Date;
  dateHeureFin: Date;
  status: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  // Utilisation de l'interface Reservation pour typer reservationObj
  reservationObj: any = {
    "utilisateur": "",
    "salle": "",
    "dateHeureDebut": new Date(), // Initialisez les dates avec la date actuelle par défaut
   "dateHeureFin": new Date(),
    "status": ""
  };
  

  salleList: any[] = [];

  constructor(private homeService: HomeService,public _router: Router) { }

  ngOnInit(): void {
    this.loadSalles();
  }

  loadSalles() {
    this.homeService.getSalles().subscribe({
      next: (salles: any) => {
        this.salleList = salles;
        console.log('Salles fetched successfully');
      },
      error: (error) => console.log('Error fetching salles:', error)
    });
  }




  onSaveBooking() {
    this.homeService.createReservation(this.reservationObj).subscribe((res: any) => {
      if (res.result) {
        alert('reservation Created');
      } else {
        alert(res.message);
      }
    });
  }
  
 
}
