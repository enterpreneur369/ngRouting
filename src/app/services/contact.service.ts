import { Injectable } from '@angular/core';
import { IContacto } from 'src/app/models/contact.interface';
import { LISTA_CONTACTOS } from '../mocks/contacts.mock';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  listaContactos: IContacto[] = LISTA_CONTACTOS;

  constructor() { }

  obtenerContactos(sexo?:string): Promise<IContacto[]> | null {
    if(sexo == "hombre" || sexo == "mujer") {
      let listaContactosFiltrada = this.listaContactos.filter(
        (contacto) => contacto.sexo = sexo);
      Promise.resolve(listaContactosFiltrada);
    } else if (sexo == "todos") {
      return Promise.resolve(this.listaContactos);
    } else {
      return Promise.reject("Error en el filtro");
    }
    return null;
  }
}
