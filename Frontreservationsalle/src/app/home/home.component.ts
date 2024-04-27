import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { HomeService } from '../services/home.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit{

 // http=inject(HttpClient);
 private homeService = inject(HomeService);
  salles:any=[];
ngOnInit(): void {
 // this.fetchSalles();
this.loadSalles();  
}
//fetchSalles(){
 // this.http.get('http://localhost:4000/salles')
  //.subscribe((posts:any)=>{
  // console.log(posts);
  // this.salles=this.salles;
  //});
  //}

//loadSalles(){
//  this.homeService.getSalles().subscribe((salles :any)=>{
//console.log(salles);
//this.salles=salles;
 // });
//}

loadSalles(){
  this.homeService.getSalles().subscribe({
    next:(salles:any)=>{
      this.salles=salles;
      console.log('Salles fetched successfully');
    },
    error:(error)=> console.log('Error fetching salles:', error)
  })

}

}
