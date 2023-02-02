import { HeroesComponent } from './../heroes/heroes.component';
import { HeroeService } from './../../serivicios/heroe.service';
import { Heroe } from './../../class/heroe';
import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  //               instanciamos
  public heroe: Heroe = new Heroe();

  constructor(
    // Los atributos siempre van dentro del patensis del constructor
    private heroeService : HeroeService,
    private activatedRoute: ActivatedRoute

  ){
    // Entre corchetes va el codigo de ejecucion, en si las instrucciones
    this.activatedRoute.params.subscribe( params => {
      this.heroe = this.heroeService.getHeroe(params['id']);
      console.log(this.heroe);
    } )
  }
}
