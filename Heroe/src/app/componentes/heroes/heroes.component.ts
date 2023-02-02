import { Heroe } from './../../class/heroe';
import { Component, OnInit } from '@angular/core';
import { HeroeService } from './../../serivicios/heroe.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(
    private heroeService : HeroeService
  ){
    console.log("HEROES COMPONENT EJECUTANDO")
  }

  ngOnInit(): void {

    this.heroes = this.heroeService.getHeroes();
    console.log(this.heroes);
  }
}
