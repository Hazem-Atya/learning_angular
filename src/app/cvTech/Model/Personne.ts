export class Personne {

  id: number;
  name: string;
  firstName: string;
  age: number;
  imagePath: string;
  cin: number;
  job: string;


  constructor(id = 0, name = '', firstName = '', age = 0, imagePath = '', cin = 1, job = '') {
    this.id = id;
    this.name = name;
    this.firstName = firstName;
    this.age = age;
    this.imagePath = imagePath;
    this.cin = cin;
    this.job = job;
  }
}
