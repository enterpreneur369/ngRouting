import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  listaContactos: IContacto[] = LISTA_CONTACTOS;

  constructor() { }

  obtenerContactos(sexo?:string): Promise<IContacto[]> {
    if(sexo == "hombre" || sexo == "mujer") {
      let listaContactosFiltrada = this.listaContactos.filter(
        (contacto) => contacto.sexo = sexo);
      Promise.resolve(listaContactosFiltrada);
    } else if (sexo == "todos") {
      return Promise.resolve(this.listaContactos);
    } else {
      return Promise.reject("Error en el filtro");
    }
  }
}
