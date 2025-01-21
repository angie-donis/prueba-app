import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Company } from 'src/app/types';
import {HttpClient} from "@angular/common/http"
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  private dataSubject: BehaviorSubject<Company[]>;//Creamos el subject privado para almacenar las empresas
  public data: Observable<Company[]>;//Creamos el observable para consultar la informacion de las empresas

  constructor(private httpClient: HttpClient ) {
    this.dataSubject = new BehaviorSubject<Company[]>([]);//Inicializamos el subject
    this.data = this.dataSubject.asObservable();//Obtenemos el observable del subject
   }

   //Metodo para agregar data al observable
setData (data:Company[]) {
  this.dataSubject.next(data);
}

//Obtener la data del observable de una forma mas facil
get companies (){
  return this.dataSubject.value;
}

//Crear una empresa usando el api
create(company: Company) {
  return this.httpClient.post(`${environment?.API_URL}/companies`, company);//consumir el api para poder crear la empresa en la base de datos
}

//Actualizar una empresa usando el api
delete(company: Company) {
  return this.httpClient.delete(`${environment?.API_URL}/companies/${company?.id}`
  );//consumir el api para eliminar una empresa en la base de datos usando el id

}
getAll() {
  return this.httpClient.get(`${environment?.API_URL}/companies`);//consumir el api para obtener las empresas
}
getOne(id: string) {
  return this.httpClient.get(`${environment?.API_URL}/companies/${id}`);//Consumir el api para obtener sola una empresa
}
}
