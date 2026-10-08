class Karthik{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    view(){
        console.log(`name is ${this.name} and age is ${this.age}`);
    }
}
class Karthik1 extends Karthik{
    constructor(name, age, id){
        super(name, age);
        this.id=id;
    }   
    view(){
        console.log(`name is ${this.name}, age is ${this.age}, and id is ${this.id}`);
    }
}
class Karthik2 extends Karthik{
    constructor(name, age, id, role){
        super(name, age, id);
        this.role=role;
    }   
    view(){
        console.log(`name is ${this.name}, age is ${this.age}, id is ${this.id}, and role is ${this.role}`);
    }   
}
Dog.prototype.speak = function(){
    console.log(this.name + ' barks.');
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;    

let s=new Animal('Rex');
s.speak(); // Output: Rex makes a noise.

//in this we have created a prototypal inheritance where the Dog class inherits from the Animal class. The Dog class has its own speak method that overrides the speak method of the Animal class. When we create an instance of Dog and call the speak method, it will output "Rex barks." instead of "Rex makes a noise."
