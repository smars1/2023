import { User } from './class/user';
import { Commune } from './class/commune';
import { FitService } from './services/fit.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api-front-fit';

  // step 5 creamos la variable privada de nustro servicio
  constructor(
    // atributos
    private  serviceFit : FitService
  ){
    // este servicefit obtiene datos de comunas
    this.serviceFit.getComunas().subscribe((data : any) =>{
      const comunas : Commune [] = data;
      //console.log(data)
      console.log(comunas);
      //en una promesa tenemos si es correcto  o si falla mandamos el error
    }, (errorServicio) => {
      console.log(errorServicio);
    });

    // my code, creamos el componente que obtiene a los usuarios
    this.serviceFit.getUsers().subscribe((data : any) => {
      const users : User [] = data;
      console.table(users);
    }, (errorServiceUsers)=>{
      console.log(errorServiceUsers);
    })
  }
}
