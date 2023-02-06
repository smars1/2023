import { Commune } from './../class/commune';
import { Injectable } from '@angular/core';
//importamos manualmente
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FitService {

 // step 1
  private token : string = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWVnby5waW5lZGEiLCJpYXQiOjE2NzU1ODQ4NzEsImV4cCI6MTY3NTU4ODQ3MX0._MzA6bFCvMhM-fYMIvtYvAcpsXkEkydYx3iJDO16p-k";

  constructor(
      // atributos
    // declaramps la clase y el objeto de inyeccion de dependencias de http
    private http : HttpClient

  ) { }
  // step 2 creamos un metodo para retornar el header
  // creamos un metodo para obtener el path o url del cual tomaremo datos le agregamos + query para modificar el path deseado
  getQuery(query : string) : string {
      // el query es lo que consumiremos de la url: users/login

      return "http://192.168.10.244:8080/api-backend/v1.0" + query ;
    }

    //step 4 creamos el metodo que va traer las commune
    getComunas() {
      const headers = new HttpHeaders({
        // jwt token
        'Authorization' : `${ this.token }`
      });
      // le pasamos el path de ruta ,   mandamos el token para que nuestra accion se valide
     return this.http.get(this.getQuery('/communes'), { headers })
     // el map debe importar map de rxjs, importarlo si no
      .pipe( map( data => console.log(data) ) );
    }


    //my code creando metodo para obtener datos de users
    getUsers(){
      const headers = new HttpHeaders({
        // jwt token
        'Authorization' : `${ this.token }`
      });
      return this.http.get(this.getQuery('/users'),  { headers })
      .pipe( map(data => console.log(data)))
    }
}
