import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { BookingCalenderComponent } from './booking-calender/booking-calender.component';

export const routes: Routes = [
    {'path':'login','title':'Login',component:LoginComponent},
    {'path':'home','title':'Home',component:HomeComponent},
    {'path':'reservation','title':'Reservation',component:ReservationComponent},
    {'path':'contact','title':'Contact',component:ContactComponent},
    {'path':'booking-calendar','title':'booking-calendar',component:BookingCalenderComponent}
];
