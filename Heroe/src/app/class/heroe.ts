import { NgModule } from '@angular/core';
export class Heroe {

  // mala practica el id sea opcional ==> idx?  ==>?
  public idx? : number = 0 ;
  public nombre : string = "";
  public biografia : string = "";
  public img : string = "";
  public aparicion : string = "";
  public casa : string = "";
  public isProfugo? : boolean = false;

  constructor(){

  }

}
