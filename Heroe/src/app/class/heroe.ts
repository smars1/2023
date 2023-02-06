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
  //agregamos este
  public nombrePoder1? : string = "";
  public nombrePoder2? : string = "";
  public nombrePoder3? : string = "";
  public poder1? : string = "";
  public poder2? : string = "";
  public poder3? : string = "";

  constructor(){

  }

}
