import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  nombre : string ='Diego Atzin Pineda Cota';
  nombre2 : string ='diEgO aTZin pIneda cOta';
  pokemon : string [] = ['Charmander', 'Charmeleon', 'Charizard', 'Charizar X', 'Charizard Y'];
  PI : number = Math.PI;
  porcentaje : number = 0.235;
  salario : number = 4000000
  fecha : Date = new Date();
  isActivo : boolean = true;
  password: string = "hola_mundo"


  idioma: string = 'en';
  videoUrl  : string = 'https://www.youtube.com/embed/-CBKW-90VxQ';

  valorPromesa = new Promise <string> ((resolve) => {
    setTimeout(() => {
      resolve('Deeesspieeeeeertaaaaaa')
    }, 5000);
  });


  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  }
}



