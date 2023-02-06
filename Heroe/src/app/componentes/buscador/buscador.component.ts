import { ActivatedRoute } from '@angular/router';
import { HeroeService } from './../../serivicios/heroe.service';
import { Heroe } from './../../class/heroe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit{
  // Nota para git hub: se crea el service antes y como consecuencia se tiene que crear la clase que lo implementa
  // algo parecido a cuando se crea una interfaz en java con spring-boot se crea la interfaz y posteriormente su clase implements

  // atributos de clase, retorna el metodo de buscar el termino que acamos de llamar en el servicio
  heroes : Heroe[] = [];
  termino : string = "";

  constructor(
    // atributos qui
    private heroeService : HeroeService,
    private activatedRoute : ActivatedRoute
  ){}

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this.heroeService.buscarHeroe(params['termino']);
      //console.log(this.heroes);
    } )
  }

}
