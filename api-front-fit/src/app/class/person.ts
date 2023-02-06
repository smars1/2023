import { Commune } from './commune';
//step 3 creamos class person
export class Person {
  public id : number = 0;
  public name : string = "";
  public email : string = "";
  public birthday : Date = new Date();
  // Hacemos referencia a la tabla commune
  public commune : Commune = new Commune();
}

