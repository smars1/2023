import { Person } from './person';
export class User {
  public id : number = 0;
  public name : string = "";
  public password : string ="";
  public enabled : boolean = true;
  public person : Person = new Person();
}
