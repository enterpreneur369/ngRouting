import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IContacto } from 'src/app/models/contact.interface';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {

  // Obtenemos la lista de contactos
  filtroSexo: string = "todos";
  listaContactos: IContacto[] = [];
  
  constructor(private router: Router, 
    private route: ActivatedRoute,
    private contactService: ContactService) { }

  ngOnInit(): void {  
    // Obtenemos los Query Params
    this.route.queryParams.subscribe((params: any) => {
      console.log("QueryParam:", params.sexo);
      if (params.sexo) {
        this.filtroSexo = params.sexo;
      }      
      // Solicitar la lista de contactos
      this.contactService.obtenerContactos(this.filtroSexo)
        .then((lista) => this.listaContactos = lista)
        .catch((error) => console.error(`Error al obtener contactos: ${error}`))
        .finally(() => console.info("Petición de contactos terminada"));
    });  
  }

  // ejemplo de paso de información entre componentes por medio del ESTADO
  volverAHome(contacto: IContacto) {
    let navigationExtras: NavigationExtras = {
      state: {
        data: contacto
      }
    }
    this.router.navigate(['/home'], navigationExtras);
  }


}
