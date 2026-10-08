function Animal(name){
    this.name = name;
}
Animal.prototype.speak = function(){
    console.log(this.name + ' makes a noise.');
}
function Dog(name, breed){
    Animal.call(this, name);
    this.breed = breed;
}
Dog.prototype.speak = function(){
    console.log(this.name + ' barks.');
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;    

let s=new Animal('Rex');
s.speak(); // Output: Rex makes a noise.

//in this we have created a prototypal inheritance where the Dog class inherits from the Animal class. The Dog class has its own speak method that overrides the speak method of the Animal class. When we create an instance of Dog and call the speak method, it will output "Rex barks." instead of "Rex makes a noise."