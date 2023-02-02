import { Heroe } from './../../class/heroe';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent {

  @Input() heroe : Heroe = new Heroe();
  // any para setearle cualquier valor
  @Input() idHeroe : any;

  //Redireccionamos a la ruta heroe con router de angular
  constructor(
    private router: Router
  ){}

  verHeroe() : void{
    this.router.navigate(['/heroe', this.idHeroe]);
  }
  // vamo devuelta a la tarjeta html para colocar el boton
}
