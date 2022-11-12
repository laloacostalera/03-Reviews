class Human {
  gender = 'rich';

  printGender = () => {
    console.log("The human is " + this.gender);
  }
}

class Person extends Human {
  name = 'Lalo';
  gender = 'Extra-rich';

  printName = () => {
    console.log('The Human is called ' + this.name);
  }

}



const human = new Human();
human.printGender(); 

const person = new Person ();
person.printName();
person.printGender();


const array = [1, 2, 3];
[el1, , el3] = array;

console.log(el1);
console.log('God is ' + el3);

