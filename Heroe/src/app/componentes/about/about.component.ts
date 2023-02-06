import { ActivatedRoute } from '@angular/router';
import { HeroeService } from './../../serivicios/heroe.service';
import { Heroe } from './../../class/heroe';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  public heroe : Heroe = new Heroe();

  constructor(
    // atributos
    private heroeService:HeroeService,
    private activatedRoute:ActivatedRoute,

  ){
    this.activatedRoute.params.subscribe(params => {
      this.heroe = this.heroeService.getHeroe(params['id']);
    })



  }
}
