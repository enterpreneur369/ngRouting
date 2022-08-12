import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router'; 
import { IContacto } from 'src/app/models/contact.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  token: string | null = null;

  contactoSeleccionado: IContacto | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Comprobar el token
    this.token = localStorage.getItem("token");
    // Leemos el estado del historial de navegación
    if (history.state.data) {
      console.log(history.state.data);
      this.contactoSeleccionado = history.state.data;
    }
  }

  navegarAContacts(): void {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        sexo: 'todos'
      }
    }
    this.router.navigate(["contacts"], navigationExtras);
  }

}
